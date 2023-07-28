function updateTimer() {
  const now = new Date().getTime();
  const endDate = new Date("2023-08-30T00:00:00").getTime();
  const timeLeft = endDate - now;

  if (timeLeft <= 0) {
    document.getElementById("countdown").innerHTML = "Offer expired";
    document.getElementById("apply-coupon-btn").disabled = true;
  } else {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById(
      "countdown"
    ).innerHTML = `${days} days : ${hours} hours : ${minutes} min : ${seconds} sec`;
  }
}

setInterval(updateTimer, 1000);

let apply_coupon_btn = document.getElementById("apply-coupon-btn");

apply_coupon_btn.addEventListener("click", function () {
  const couponCode = document.getElementById("coupon-code");
  let discountedPrice = 50; // Original price of the product

  // Apply the coupon code and update the discounted price if needed
  if (couponCode.value == "EXAMSTART") {
    // 10% discount for EXAMSTART
    discountedPrice = 50 - (50 * 10) / 100;
    // Display the discounted price
    document.getElementById(
      "discounted-price"
    ).innerHTML = `Discounted Price: $${discountedPrice.toFixed(2)}`;
    let coupon_applied = document.getElementById("coupon-applied");
    alert("Congratulations !  😎😎🤩🤩🥰  10% Discount applied");
    apply_coupon_btn.style.backgroundColor = "black";
    document.getElementById("coupon-code").innerHTML = "";
    apply_coupon_btn.style.cursor = "not-allowed";
    apply_coupon_btn.disabled = true;
    coupon_applied.innerHTML = "Saved 10% off ";
  } else {
    alert("Invalid Coupon Code");
  }
});

let payment_success = document.getElementById("payment-success");

payment_success.addEventListener("click", PaymentSucceess);

function PaymentSucceess() {
  alert("Congratulations   👏👏👏 Payment Successful.. 💲💲💰💰💰  !!");
  payment_success.disabled = true;
  payment_success.style.cursor = "not-allowed";
  payment_success.style.backgroundColor = "black";
}
