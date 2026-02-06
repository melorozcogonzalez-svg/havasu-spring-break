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
document.querySelectorAll("#payment-list input").forEach(box => {
  const name = box.dataset.name;
  const saved = localStorage.getItem("paid_" + name);

  if (saved === "true") {
    box.checked = true;
    box.parentElement.style.textDecoration = "line-through";
    box.parentElement.style.opacity = "0.6";
  }

  box.addEventListener("change", () => {
    localStorage.setItem("paid_" + name, box.checked);

    box.parentElement.style.textDecoration = box.checked ? "line-through" : "none";
    box.parentElement.style.opacity = box.checked ? "0.6" : "1";
  });
});
