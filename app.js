let one = document.getElementsByClassName("number-1")[0];
let two = document.getElementsByClassName("number-2")[0];
let three = document.getElementsByClassName("number-3")[0];
let four = document.getElementsByClassName("number-4")[0];
let five = document.getElementsByClassName("number-5")[0];
let six = document.getElementsByClassName("number-6")[0];
let seven = document.getElementsByClassName("number-7")[0];
let eight = document.getElementsByClassName("number-8")[0];
let nine = document.getElementsByClassName("number-9")[0];
let zero = document.getElementsByClassName("number-0")[0];
let buttons = document.getElementsByClassName("buttons-container");
let display = document.getElementsByClassName("display")[0];
let visible = document.getElementsByClassName("visible");
let process = document.getElementsByClassName("process");
let result = document.getElementsByClassName("result")[0];
let equal = document.getElementsByClassName("equal")[0];
let percent = document.getElementsByClassName("percent")[0];
let clean = document.getElementsByClassName("ac")[0];

clean.addEventListener("click", (e) => {
  window.location.reload();
});
let percentvalue = 0;

// let num = 0;
let islem = "";

Array.from(visible).forEach((element) => {
  element.addEventListener("click", (e) => {
    display.innerHTML += e.target.innerHTML;
  });
});

Array.from(process).forEach((element) => {
  element.addEventListener("click", (e) => {
    // console.log(e.target.innerHTML);
    // console.log(display.innerHTML);
    // num = Number(display.innerHTML);
    result.innerHTML = display.innerHTML;
    display.innerHTML = "";
    islem = e.target.innerHTML;
  });
});

percent.addEventListener("click", (e) => {
  percentvalue = 1;
});

// equal.addEventListener("click", (e) => {
//   if (islem == "x") {
//     result.innerHTML = num * display.innerHTML;
//     display.innerHTML = "";
//     num = "";
//   } else if (islem == "-") {
//     console.log(islem);
//     result.innerHTML = num - display.innerHTML;
//     display.innerHTML = "";
//     num = "";
//   } else if (islem == "+") {
//     result.innerHTML = num + Number(display.innerHTML);
//     display.innerHTML = "";
//     num = "";
//   } else if (islem == "/") {
//     result.innerHTML = num / display.innerHTML;
//     display.innerHTML = "";
//     num = "";
//   }
// });
// console.log(visible);

equal.addEventListener("click", (e) => {
  if (islem == "+") {
    result.innerHTML = parseInt(result.innerHTML) + parseInt(display.innerHTML);
  } else if (islem == "-") {
    result.innerHTML = parseInt(result.innerHTML) - parseInt(display.innerHTML);
  } else if (islem == "x") {
    result.innerHTML = parseInt(result.innerHTML) * parseInt(display.innerHTML);
  } else if (islem == "/") {
    result.innerHTML = parseInt(result.innerHTML) / parseInt(display.innerHTML);
  } else if (percentvalue != 0) {
    result.innerHTML =
      (parseInt(result.innerHTML) * parseInt(display.innerHTML)) / 100;
  }

  display.innerHTML = "";
});

// for(i=0;visible.length;i++){
//     visible[i].addEventListener("click", (e) => {
//   console.log(e.target.innerHTML);
//   display.innerHTML = e.target.innerHTML;
// })
// }

// buttons[0].addEventListener("click", (a) => {
//   console.log(a.target.parentElement.parentElement);
// });

// one.addEventListener("click", (e) => {
//   console.log(e.target.innerHTML);
//   display.innerHTML = e.target.innerHTML;
// });

// two.addEventListener("click", (e) => {
//   console.log(e.target.innerHTML);
//   display.innerHTML = e.target.innerHTML;
// });
// three.addEventListener("click", (e) => {
//   console.log(e.target.innerHTML);
//   display.innerHTML = e.target.innerHTML;
// });
// four.addEventListener("click", (e) => {
//   console.log(e.target.innerHTML);
//   display.innerHTML = e.target.innerHTML;
// });
// five.addEventListener("click", (e) => {
//   console.log(e.target.innerHTML);
//   display.innerHTML = e.target.innerHTML;
// });
// six.addEventListener("click", (e) => {
//   console.log(e.target.innerHTML);
//   display.innerHTML = e.target.innerHTML;
// });
// seven.addEventListener("click", (e) => {
//   console.log(e.target.innerHTML);
//   display.innerHTML = e.target.innerHTML;
// });
// eight.addEventListener("click", (e) => {
//   console.log(e.target.innerHTML);
//   display.innerHTML = e.target.innerHTML;
// });
// nine.addEventListener("click", (e) => {
//   console.log(e.target.innerHTML);
//   display.innerHTML = e.target.innerHTML;
// });
// zero.addEventListener("click", (e) => {
//   console.log(e.target.innerHTML);
//   display.innerHTML = e.target.innerHTML;
// });
