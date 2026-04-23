const invoiceList = document.getElementById("invoice-list");

// fetch data from data.json and render on the page

fetch("./scripts/data.json")
  .then((response) => response.json())
  .then((data) => {
    const invoiceList = document.getElementById("invoice-list");
    data.forEach((invoice) => {
      const invoiceItem = document.createElement("div");
      invoiceItem.classList.add("invoice-item");
      invoiceItem.innerHTML = `
         <span class="invoice-id">${invoice.id}</span>
        <span class="invoice-date">${invoice.date}</span>
        <span class="invoice-name">${invoice.name}</span>
        <span class="invoice-amount">${invoice.amount}</span>
        <span class="invoice-status ${invoice.status.toLowerCase()}">${invoice.status}</span>
        <button class="invoice-details-cta">&gt;</button>
      `;
      invoiceList.appendChild(invoiceItem);
    });
  })
  .catch((error) => console.error(error));
