document.addEventListener("DOMContentLoaded", function () {
  const buyNowButtons = document.querySelectorAll(".market .btn");

  buyNowButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Mencegah pengalihan halaman
      showPaymentOptions(); // Menampilkan opsi pembayaran
    });
  });

  function showPaymentOptions() {
    document.getElementById("paymentOverlay").style.display = "flex";
  }

  function hidePaymentOptions() {
    document.getElementById("paymentOverlay").style.display = "none";
  }

  function showBarcode(method) {
    const barcodeContainer = document.getElementById("barcode-container");
    const barcodeImage = document.getElementById("barcode");

    // Update the source of the barcode image based on the selected method
    if (method === "gopay") {
      barcodeImage.src = "image/gopay.jpg"; // Replace with actual GoPay barcode URL
    } else if (method === "qris") {
      barcodeImage.src = "image/qris.jpeg"; // Replace with actual QRIS barcode URL
    }

    // Show the barcode container
    barcodeContainer.style.display = "block";
  }

  // Expose functions globally if necessary
  window.showPaymentOptions = showPaymentOptions;
  window.hidePaymentOptions = hidePaymentOptions;
  window.showBarcode = showBarcode;
});
