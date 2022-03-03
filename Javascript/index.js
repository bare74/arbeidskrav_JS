alert("Velkommen til din handleliste. Legg inn varer du ønsker og pris");

var shopList = document.getElementById("shop-list"); //Handlekurv 1
var shopList1 = document.getElementById("shop-list1"); //Handlekurv 2
var shopList2 = document.getElementById("shop-list2"); //Handlekurv 3

shopArray = [];
shopArray1 = [];
shopArray2 = [];

//Handlekurv 1
function addShopList() {
  var shopInput = document.getElementById("input").value; //input verdi vare
  var price = document.getElementById("inputNr").value; //input pris på varen
  document.getElementById("input").value = "";
  document.getElementById("inputNr").value = "";

  if (shopInput === "") {
    alert("Tast inn et vare navn");
  } else if (price === "0") {
    alert("Tast inn et beløp fra kr 1,- og oppover");
  } else {
    shopArray.push({
      name: shopInput,
      price: price,
    });
  }

  listshop();
  calculatePrice();
}

function calculatePrice() {
  let priceSum = 0;
  shopArray.forEach((product) => {
    priceSum += parseInt(product.price);
  });

  document.getElementById("sum").innerHTML = "Sum kr:" + priceSum + ",-"; //legge sammen summene
}

function listshop() {
  shopList.innerHTML = " ";
  for (let i = 0; i < shopArray.length; i++) {
    shopList.innerHTML += `<li><p>${shopArray[i].name}</p>
    <p>Kr: ${shopArray[i].price},-</p>

<button id="delete-btn" class="btn1" onclick = "deleteshop(${i})">\u00D7</button></li>`;
  }
}

function deleteshop(i) {
  if (confirm("Ønsker du og slette (vare)?")) {
    shopArray.splice(i, 1);
    document.getElementById("sum").innerHTML = " ";

    listshop();
    calculatePrice();
  }
}

//Handlekurv 2
function addShopList1() {
  var shopInput1 = document.getElementById("input1").value; //input verdi vare
  var price1 = document.getElementById("inputNr1").value; //input pris på varen
  document.getElementById("input1").value = "";
  document.getElementById("inputNr1").value = "";

  if (shopInput1 === "") {
    alert("Tast inn et vare navn");
  } else if (price1 === "0") {
    alert("Tast inn et beløp fra kr 1,- og oppover");
  } else {
    shopArray1.push({
      name: shopInput1,
      price: price1,
    });
  }

  listshop1();
  calculatePrice1();
}

function calculatePrice1() {
  let priceSum1 = 0;
  shopArray1.forEach((product) => {
    priceSum1 += parseInt(product.price);
  });

  document.getElementById("sum1").innerHTML = "Sum kr: " + priceSum1 + ",-"; //legge sammen summene
}

function listshop1() {
  shopList1.innerHTML = " ";
  for (let i = 0; i < shopArray1.length; i++) {
    shopList1.innerHTML += `<li><p>${shopArray1[i].name}</p>
     <p>Kr: ${shopArray1[i].price},-</p>
<button id="delete-btn" class="btn1" onclick = "deleteshop1(${i})">\u00D7</button></li>`;
  }
}

function deleteshop1(i) {
  if (confirm("Ønsker du og slette (vare)?")) {
    shopArray1.splice(i, 1);

    document.getElementById("sum1").innerHTML = " ";
    listshop1();
    calculatePrice1();
  }
}

//Handlekurv 3
function addShopList2() {
  var shopInput2 = document.getElementById("input2").value; //input verdi vare
  var price2 = document.getElementById("inputNr2").value; //input pris på varen
  document.getElementById("input2").value = "";
  document.getElementById("inputNr2").value = "";

  if (shopInput2 === "") {
    alert("Tast inn et vare navn");
  } else if (price2 === "0") {
    alert("Tast inn et beløp fra kr 1,- og oppover");
  } else {
    shopArray2.push({
      name: shopInput2,
      price: price2,
    });
  }

  listshop2();
  calculatePrice2();
}

function calculatePrice2() {
  let priceSum2 = 0;
  shopArray2.forEach((product) => {
    priceSum2 += parseInt(product.price);
  });

  document.getElementById("sum2").innerHTML = "Totalt kr: " + priceSum2 + ",-"; //legge sammen summene
}

function listshop2() {
  shopList2.innerHTML = " ";
  for (let i = 0; i < shopArray2.length; i++) {
    shopList2.innerHTML += `<li><p>${shopArray2[i].name}</p>
     <p>Kr: ${shopArray2[i].price},-</p>
<button id="delete-btn" class="btn1" onclick = "deleteshop2(${i})">\u00D7</button></li>`;
  }
}

function deleteshop2(i) {
  if (confirm("Ønsker du og slette (vare)?")) {
    shopArray2.splice(i, 1);
    document.getElementById("sum2").innerHTML = " ";
    listshop2();
    calculatePrice2();
  }
}
