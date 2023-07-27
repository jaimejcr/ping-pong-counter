const body = document.querySelector("body");
const form = document.createElement("form");
const btnPlusOne = document.createElement("button");
const btnPlusTwo = document.createElement("button");
const btnReset = document.createElement("button");
const counterDisplayOne = document.createElement("h1");
const counterDisplayTwo = document.createElement("h1");

body.appendChild(counterDisplayOne);
body.appendChild(counterDisplayTwo);
body.appendChild(form);
body.appendChild(btnPlusOne);
body.appendChild(btnPlusTwo);
body.appendChild(btnReset);

counterDisplayOne.innerText = 0;
counterDisplayTwo.innerText = 0;


let options = [
  { value: 3, text: "3" },
  { value: 5, text: "5" },
  { value: 7, text: "7" },
  { value: 10, text: "10" },
  { value: 15, text: "15" },
];

function createSelect(optionsList) {
  let select = document.createElement("select");

  for (let i = 0; i < optionsList.length; i++) {
    const element = optionsList[i];
    let option = document.createElement("option");
    option.setAttribute("value", element.value);
    option.innerText = element.text;
    select.appendChild(option);
  }

  return select;
}

const select = createSelect(options);
form.appendChild(select);

let counterOne = 0;
let counterTwo = 0;

btnPlusOne.addEventListener("click", () => {
  if (counterOne < selectValue) {
    counterOne++;
    counterDisplayOne.innerText = counterOne;
  }
});

btnPlusTwo.addEventListener("click", () => {
  if (counterTwo < selectValue) {
    counterTwo++;
    counterDisplayTwo.innerText = counterTwo;
  }
});

btnReset.addEventListener("click", () => {
  counterDisplayOne.innerText = 0;
  counterDisplayTwo.innerText = 0;
  counterOne = 0;
  counterTwo = 0;
});

let selectValue = 3;
select.addEventListener("change", () => {
  selectValue = document.querySelector("select").value;
});