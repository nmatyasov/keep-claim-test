/*Необходимо вернуть последнюю цифру результата возведения в степень (a^b).

Входящие параметры: 
• a, целое число, 1<a<1000000000
• b, целое число, 1<b<1000000000

Результат:
• целое число — последнее число результата подсчёта

Пример 1 (PHP):
$a=7;
$b=3;
SecondBackTask::getResult(a,b); //3

Пример 2 (PHP):
$a=5;
$b=123456789;
SecondBackTask::getResult(a,b)); //5

*/

export class SecondBackTask {
  static getResult(base: number, exponent: number): number {
    if (base < 1 || exponent < 1) return 0;

    let c = 1;
    for (let i = 1; i <= exponent; i++) {
      c = (c * base) % 10;
    }
    return c;
  }
}
