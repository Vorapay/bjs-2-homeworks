// Задача №1:
function parseCount(value) {
    const parsedValue = Number.parseFloat(value);
    
    if (isNaN(parsedValue)) {
        throw new Error("Невалидное значение");
    }
    
    return parsedValue;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

console.log(validateCount("123"));
console.log(validateCount("45.67"));
console.log(validateCount("010"));
console.log(validateCount("abc"));
console.log(validateCount("123abc"));
console.log(validateCount(""));



// Задача №2:
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    
    get perimeter() {
        return this.a + this.b + this.c;
    }
    
    get area() {
        const p = this.perimeter / 2;
        const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return parseFloat(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}

const triangle1 = getTriangle(2,5,5);
console.log(triangle1.perimeter);
console.log(triangle1.area);

const triangle2 = getTriangle(6,10,15);
console.log(triangle2.perimeter);
console.log(triangle2.area);

const triangle3 = getTriangle(1,3,100);
console.log(triangle3.perimeter);
console.log(triangle3.area);

const triangle4 = getTriangle(100,3,10);
console.log(triangle4.perimeter);
console.log(triangle4.area);

