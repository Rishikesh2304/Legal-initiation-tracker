function toggleSettings() {
    const panel = document.getElementById('settings-panel');
    panel.classList.toggle('hidden');
  }
  
  function isValidDate(day, month, year) {
    const d = parseInt(day);
    const m = parseInt(month);
    const y = parseInt(year);
    const currentYear = new Date().getFullYear();
  
    return (
      d >= 1 && d <= 31 &&
      m >= 1 && m <= 12 &&
      y >= 1900 && y <= currentYear + 10
    );
  }
  
  function downloadCSV() {
    const dateValue = document.getElementById('report-date').value;
  
    if (!dateValue) {
      alert("Please select a valid date.");
      return;
    }
  
    const [year, month, day] = dateValue.split("-");
  
    const csvContent = `Date,Month,Year\n${day},${month},${year}`;
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', `report_${day}-${month}-${year}.csv`);
    a.click();
  }
  
  function showRecords() {
    const recordsContainer = document.getElementById("manual-records");
    if (recordsContainer) {
      recordsContainer.style.display =
        recordsContainer.style.display === "none" ? "block" : "none";
    }
  }
  function goBack() {
    window.history.back();
  }
  
  
  function goToInvoicePage() {
    window.location.href = "invoice.html"; // Make sure invoice.html exists
  }
  
  function addRecord() {
    const recordBox = document.getElementById("manual-records");
    const newRecord = prompt("Enter record in format: Date,Month,Year");
  
    if (newRecord) {
      const parts = newRecord.split(",");
      if (parts.length === 3 && isValidDate(parts[0], parts[1], parts[2])) {
        const p = document.createElement("p");
        p.textContent = `📅 ${parts[0]}/${parts[1]}/${parts[2]}`;
        recordBox.appendChild(p);
      } else {
        alert("❌ Invalid record format or date.\nPlease use: Date,Month,Year (e.g., 15,05,2024)");
      }
    }
  }
  