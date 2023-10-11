/*Подсчёт количества отправленных сообщений
Необходимо подсчитать сколько всего было удачных сеансов связи с отправленными сообщениями.
Для отправки сообщений вам всегда потребуется строгая последовательность команд: start — connect — message — end.

Команды означают следующее:
• start — начать сеанс связи.
• connect — установить соединение.
• message — отправить сообщение.
• end — завершить сеанс связь.

Входящие параметры:
• actions — строковый массив команд, размер массива должен быть больше 3 и меньше 50, каждый элемент может принимать только одно из 4 значений (“start” | “connect” | “message” | “end”)


Результат:
• целое число — количество сеансов связи, в которые отправлялись сообщения



Пример 1 (PHP):
$actions = ["start", "connect", "message", "end"];
FirstBackTask::getResult(actions);  //1, одно сообщение в одну сессию

Пример 2 (PHP):
$actions = ["start", "connect", "message", "end", "start", "connect", "message", "end", "start", "connect", "message"];
FirstBackTask::getResult(actions); // 2, два сообщения, по одному в первой и второй сессии, третья сессия не была завершена
 */

export class FirstBackTask {
  static getResult(actions: string[]): number {
    if (actions.length < 4) return 0;
    const hash: string = ["start", "connect", "message", "end"].join("");
    let cntPackages: number = 0;
    for (let i = 0; i < actions.length + 3; i += 4) {
      const buffer = actions.slice(i, i + 4);
      if (buffer.join("") === hash) {
        cntPackages++;
        buffer.splice(0, buffer.length);
      }
    }
    return cntPackages;
  }
}
