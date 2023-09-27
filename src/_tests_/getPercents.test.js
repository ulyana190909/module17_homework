import { getPercents } from '../getPercents.js'

describe ("тестирование функции getPercents", () => {
  it("использование положительных чисел", () => {
    const result  = getPercents(35 , 1255);
    const result2  = getPercents(1 , 1);
    const result3  = getPercents(98 , 5);
    expect(result).toBe(439.25);
    expect(result2).toBe(0.01);
    expect(result3).toBe(4.9);
  }),

  it("тест с отрицательным числом", () => {
    const result  = getPercents(15 , -95);
    const result2  = getPercents(-95 , 155);
    const result3  = getPercents(-1 , -2000);
    expect(result).toBe(-14.25);
    expect(result2).toBe(-147.25);
    expect(result3).toBe(20);
  }),

  it("тест с использованием 0", () => {
    const result  = getPercents(0 , 10);
    const result2 = getPercents(0, 0);
    const result3 = getPercents(150 , 0);
    expect(result).toBe(0);
    expect(result2).toBe(0);
    expect(result3).toBe(0);
  })
  });