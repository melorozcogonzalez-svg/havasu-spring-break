const groceryList = [];

function addGrocery() {
  const name = document.getElementById("item-name").value;
  const amount = parseFloat(document.getElementById("item-amount").value);
  const paidBy = document.getElementById("paid-by").value;

  if (!name || !amount || !paidBy) {
    alert("Fill everything out!");
    return;
  }

  groceryList.push({ name, amount, paidBy });
  renderGroceries();

  document.getElementById("item-name").value = "";
  document.getElementById("item-amount").value = "";
}

function renderGroceries() {
  const list = document.getElementById("grocery-list");
  list.innerHTML = "";

  groceryList.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.amount.toFixed(2)} (Paid by ${item.paidBy})`;
    list.appendChild(li);
  });
}
