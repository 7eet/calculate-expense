var total = document.querySelector(".total");

var map = new Map();

var count = 1;

var amount = document.querySelector(".amount");
amount.addEventListener("change", (e) => {
  map.set(count, e.target.value);
  count++;
  updateTotal();
})

function addItem() {
  let inputs = document.querySelector("#inputs");
  inputs.appendChild(addInput());
}


function addInput() {
  let div = document.createElement("div");
  div.classList.add("grid");
  div.classList.add(count);


  let inputItem = document.createElement("input");
  inputItem.type = "text";
  inputItem.placeholder = "item name"
  inputItem.classList.add("itemExtra");

  let inputAmount = document.createElement("input");
  inputAmount.type = "number";
  inputAmount.placeholder = "amount";
  inputAmount.classList.add("amountExtra");

  let cross = document.createElement("button");
  cross.textContent = "X";
  cross.classList.add("cross");

  div.appendChild(inputItem);
  div.appendChild(inputAmount);
  div.appendChild(cross);

  inputAmount.addEventListener("change", (e) => {
    map.set(count, e.target.value);
    count++;
    updateTotal();
  })

  cross.addEventListener("click", (e) => {
    map.delete(parseInt(div.classList[1]));
    div.remove();
    updateTotal(); 
  })

  return div;
}

function updateTotal() {
  let totalAmount = 0;
  for (let value of map.values()) {
    console.log(value)
    totalAmount = totalAmount + parseInt(value);
  }
  total.textContent = `$ ${totalAmount}`;
}