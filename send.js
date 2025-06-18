document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("invoiceForm");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const fromDate = document.getElementById("fromDate").value;
      const toDate = document.getElementById("toDate").value;
  
      if (fromDate && toDate) {
        alert(`Invoices for mails from ${fromDate} to ${toDate} are now marked for sending.`);
        form.reset();
      } else {
        alert("Please select both dates.");
      }
    });
  });
  
  // Back navigation function
  function goBack() {
    window.history.back();
  }
  