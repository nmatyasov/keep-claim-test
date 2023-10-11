/*
Дана строка с набором чисел и фигурных скобок. Каждая цифра перед фигурными скобками определяет количество повторений данных 
внутри фигурных скобок. Хотя скобки могут быть вложенными, может быть не более пяти слоев вложенности. 
Необходимо преобразовать строку в соответствующую последовательность чисел.

Входящие параметры: 
•  строка — длина строки от 1 до 25 символов, каждый символ в строке может принимать одно из значений (“{“|”}”|”1”|”2”|”3”|”4”|”5”|”6”|”7”|”8”|”9”).
Нет случаев неправильных данных, например, когда число не стоит перед фигурными скобками или фигурная скобка не закрывается

Результат:
	• строка — состоящая из последовательности чисел, сформированная по обозначенным правилам

Пример 1 (PHP):
$s="2{4}3{23}";
ThirdBackTask::getResult(s); //"44232323"

Пример 2 (PHP):
$s="4{93{2}}";
ThirdBackTask::getResult(s); //"9222922292229222"

*/

export class ThirdBackTask {
  static replace(actions: string) {
    let arg = "";
    let str = "";
    const bracets: { idx: number; br: string; tail: string }[] = [];
    let intoBracket = false;
    for (let i = actions.length - 1; i >= 0; i--) {
      switch (actions[i]) {
        case "}":
          intoBracket = true;
          let t = {
            idx: i,
            br: "}",
            tail: actions.substring(actions.length, i + 1),
          };
          bracets.push(t);
          break;
        case "{":
          intoBracket = false;
          if (bracets[bracets.length - 1].br === "}") {
            str += arg
              .repeat(parseInt(actions[i - 1], 10))
              .split("")
              .reverse()
              .join("");

            let s =
              actions.substring(0, i - 1) +
              str +
              bracets[bracets.length - 1].tail;
            bracets.pop();
            return s;
          }
          break;
        default:
          intoBracket ? (arg += actions[i]) : "";
      }
    }

    return str;
  }

  static getResult(s: string) {
    if (s.length === 0) return "";
    let result: string = s;
    while (result.indexOf("{") > 0) {
      result = this.replace(result);
    }
    return result;
  }
}
