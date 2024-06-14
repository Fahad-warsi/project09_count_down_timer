#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
import chalk from "chalk";

const input = await inquirer.prompt([
  {
    name: "ans",
    type: "number",
    message: "Enter time in Second : ",
  },
]);

function countDown(ans: number) {
  //declare current time
  let intialTime = new Date();

  //convert time from userInput
  let intervalTime = new Date().setSeconds(intialTime.getSeconds() + ans + 2);

  //userInput into correct Time format
  let IntervalTimeFormat = new Date(intervalTime);

  setInterval(() => {
    let currentTime = new Date();
    //calculating time difference from userInput and current Time
    let timeDiff = differenceInSeconds(IntervalTimeFormat, currentTime);
    let mint = Math.floor(timeDiff / 60);
    let sec = Math.floor(timeDiff % 60);
    console.clear();
    console.log("Count-Down started : ");

    console.log(
      chalk.red(
        `${String(mint).padStart(2, "0")}:${String(sec).padStart(2, "0")}`
      )
    );
    if (timeDiff <= 0) {
      process.exit();
    }
  }, 1000);
}
//Calling function....
countDown(input.ans);
