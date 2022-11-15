let calculator = {
  read(a, b) {
    this.a = a;
    a = +prompt("Число 1", 0);
    this.b = b;
    b = +prompt("Число 2", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
