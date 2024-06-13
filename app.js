// write code here
function calculatePoints(salesAmount) {
  let points = Math.floor(salesAmount / 100);

  return points;
}

let salesAmountInput = prompt("กรุณาใส่ยอดซื้อขาย (บาท):");
let salesAmount = parseFloat(salesAmountInput);

if (isNaN(salesAmount)) {
  console.log("โปรดใส่ยอดซื้อขายให้ถูกต้อง");
} else {
  let points = calculatePoints(salesAmount);
  console.log("ยอดซื้อขาย:", salesAmount, "บาท");
  console.log("แต้มที่ได้:", points, "แต้ม");
}

