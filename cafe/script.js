const button = document.querySelectorAll(".order-button");
const orders = document.getElementById("orders");
const countDown = document.querySelector(".countdown");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", onClickButton);
}

function onClickButton(event) {
  let div = document.createElement("div");
  let h3 = document.createElement("h3");
  let Paragraph = document.createElement("p");
  let span = document.createElement("span");
  let button = document.createElement("button");
  button.addEventListener("click", () => {
    div.remove();
    clearInterval(timer);
  });
  orders.appendChild(div);
  div.appendChild(h3);
  div.appendChild(Paragraph);
  Paragraph.textContent = "Preparation time: ";
  Paragraph.appendChild(span);
  div.appendChild(button);

  div.classList.add("order-item");
  button.classList.add("pointer");

  if (event.target.value === "espresso") {
    console.log(event);
    h3.textContent = "Espresso";
    span.textContent = "10";
    span.after(" seconds");
    button.textContent = "cancel";
  } else if (event.target.value === "latte") {
    h3.textContent = "Latte";
    span.textContent = "15";
    span.after(" seconds");
    button.textContent = "cancel";
  } else if (event.target.value === "cake") {
    h3.textContent = "Cake";
    span.textContent = "20";
    span.after(" seconds");
    button.textContent = "cancel";
  } else if (event.target.value === "milk-tea") {
    h3.textContent = "Milk Tea";
    span.textContent = "20";
    span.after(" seconds");
    button.textContent = "cancel";
  } else if (event.target.value === "tea") {
    h3.textContent = "Tea";
    span.textContent = "10";
    span.after(" seconds");
    button.textContent = "cancel";
  } else if (event.target.value === "water") {
    h3.textContent = "Water";
    span.textContent = "10";
    span.after(" seconds");
    button.textContent = "cancel";
  }
  countDownValue = Number(span.textContent);
  timer(countDownValue, span, div, button);
}

function timer(countDownValue, span, div, button) {
  const timer = setInterval(() => {
    span.textContent = countDownValue;
    countDownValue--;
    if (countDownValue < 0) {
      clearInterval(timer);
      div.classList.add("ready");
      button.remove();
    }
  }, 1000);
}
