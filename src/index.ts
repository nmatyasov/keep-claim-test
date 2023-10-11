import { FirstBackTask } from "./first-back-task";
import { SecondBackTask } from "./second-back-task";
import { ThirdBackTask } from "./third-back-task";

console.log("Задание 1");

console.log(FirstBackTask.getResult(["start", "connect", "message", "end"]));
console.log(
  FirstBackTask.getResult([
    "start",
    "connect",
    "message",
    "end",
    "start",
    "connect",
    "message",
    "end",
    "start",
    "connect",
    "message",
  ])
);


console.log("Задание 2");

console.log(SecondBackTask.getResult(7, 3));
console.log(SecondBackTask.getResult(5, 123456789));

console.log("Задание 3");

console.log(ThirdBackTask.getResult("2{4}3{23}"));
console.log(ThirdBackTask.getResult("4{93{2}}")); //9222922292229222
