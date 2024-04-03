let chalk;
import("chalk").then((chalkModule) => {
  chalk = chalkModule.default;
});

// Use the `chalk` variable to test if it's available
// setTimeout(() => {
//   if (chalk) {
//     console.log(chalk.red.underline.inverse("Hello, world!"));
//   }
// }, 1000);

// Email validator

const validator= require('validator');

const res= validator.isEmail("Ayan@Ayan.com");
console.log(res);