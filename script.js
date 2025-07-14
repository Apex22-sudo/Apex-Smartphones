fetch("products.json")
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";

    data.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h4><p class="category">Category: ${product.category}</p>${product.name}</h4>
        <p class="price">${product.price}</p>
        <ul class="specs">
          ${Object.entries(product.specs).map(([key, val]) => `<li><strong>${key}:</strong> ${val}</li>`).join("")}
        </ul>
        <a href="https://wa.me/+254741888466" class="whatsapp-button" target="_blank">Order via WhatsApp</a>
      `;

      grid.appendChild(card);
    });
  });

function filterPhones() {
  let input = document.getElementById("searchBar").value.toLowerCase();
  let cards = document.getElementsByClassName("product-card");

  for (let card of cards) {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(input) ? "block" : "none";
  }
}
