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

  groceryList.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - $${item.amount.toFixed(2)} (Paid by ${item.paidBy})
      <button onclick="deleteGrocery(${index})">❌</button>
    `;
    list.appendChild(li);
  });
}
function deleteGrocery(index) {
  groceryList.splice(index, 1);
  renderGroceries();
}
document.addEventListener("change", function (e) {
  if (e.target.type === "checkbox") {
    const li = e.target.parentElement;
    li.style.textDecoration = e.target.checked ? "line-through" : "none";
    li.style.opacity = e.target.checked ? "0.6" : "1";
  }
});
