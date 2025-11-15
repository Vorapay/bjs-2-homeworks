class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    // Проверяем, есть ли уже звонок на это время
    if (this.alarmCollection.find(alarm => alarm.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    // Добавляем новый звонок 
    this.alarmCollection.push({
      callback,
      time,
      canCall: true
    });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  }

  getCurrentFormattedTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours}:${minutes}`;
  }

  start() {
    // Если интервал уже запущен, выходим
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      const currentTime = this.getCurrentFormattedTime();
      
      this.alarmCollection.forEach(alarm => {
        if (alarm.time === currentTime && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }, 1000);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  resetAllCalls() {
    this.alarmCollection.forEach(alarm => {
      alarm.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}


const alarmClock = new AlarmClock();

// Добавляем функцию-коллбек
function wakeUp() {
  console.log('Пора вставать!');
}

function coffeeTime() {
  console.log('Время для кофе!');
}

// Добавляем звонки
alarmClock.addClock('08:00', wakeUp);
alarmClock.addClock('08:30', coffeeTime);
console.log(alarmClock);

// Пытаемся добавить звонок на то же время (будет предупреждение)
alarmClock.addClock('08:00', wakeUp);
console.log(alarmClock);

// Запускаем будильник
alarmClock.start();

// Через некоторое время останавливаем
setTimeout(() => {
  alarmClock.stop();
}, 10000);

// Удаляем один звонок
alarmClock.removeClock('08:30');

// Сбрасываем возможность вызова всех звонков
alarmClock.resetAllCalls();

// Полная очистка
alarmClock.clearAlarms();