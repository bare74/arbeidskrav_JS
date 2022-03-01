//alert("Velkommen til din handleliste. Legg inn varer du ønsker og pris");

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

  if (price === "0") {
    alert("Tast inn et beløp fra kr 1,- og oppover");
  } else {
    shopArray.push({
      name: shopInput,
      price: price,
    });
  }
  console.log("DETTE ER FØRSTE", shopArray);
  listshop();
  calculatePrice();
}

function calculatePrice() {
  let priceArray = shopArray.map((product) => product.price);
  let sum = priceArray.reduce(function (prev, curr) {
    return (Number(prev) || 0) + (Number(curr) || 0);
  });

  console.log(priceArray);
  document.getElementById("sum").innerHTML = "Totalt kr:" + sum + ",-"; //Kalkulator legge sammen summene
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
    listshop();

    let priceArray = shopArray.map((product) => product.price);
    let sum = priceArray.reduce(function (prev, curr) {
      return (Number(prev) || 0) + (Number(curr) || 0);
    });

    document.getElementById("sum").innerHTML = "Totalt kr:" + sum + ",-"; //Oppdatere pris ved sletting
  }
}
//Handlekurv 2
function addShopList1() {
  var shopInput1 = document.getElementById("input1").value; //input verdi vare
  var price1 = document.getElementById("inputNr1").value; //input pris på varen

  if (price1 === "0") {
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
  let priceArray1 = shopArray1.map((product) => product.price);

  let sum1 = priceArray1.reduce(function (prev, curr) {
    return (Number(prev) || 0) + (Number(curr) || 0);
  });

  document.getElementById("sum1").innerHTML = "Totalt kr:" + sum1 + ",-"; //Kalkulator legge sammen summene
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
    listshop1();

    let priceArray1 = shopArray1.map((product) => product.price);
    let sum1 = priceArray1.reduce(function (prev, curr) {
      return (Number(prev) || 0) + (Number(curr) || 0);
    });

    document.getElementById("sum1").innerHTML = "Totalt kr:" + sum1 + ",-"; //Oppdatere pris ved sletting
  }
}
//Handlekurv 3
function addShopList2() {
  var shopInput2 = document.getElementById("input2").value; //input verdi vare
  var price2 = document.getElementById("inputNr2").value; //input pris på varen

  if (price2 === "0") {
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
  let priceArray2 = shopArray2.map((product) => product.price);

  let sum2 = priceArray2.reduce(function (prev, curr) {
    return (Number(prev) || 0) + (Number(curr) || 0);
  });

  document.getElementById("sum2").innerHTML = "Totalt kr:" + sum2 + ",-"; //Kalkulator legge sammen summene
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
    listshop2();

    let priceArray2 = shopArray2.map((product) => product.price);

    let sum2 = priceArray2.reduce(function (prev, curr) {
      return (Number(prev) || 0) + (Number(curr) || 0);
    });

    document.getElementById("sum2").innerHTML = "Totalt kr:" + sum2 + ",-";
  }
}
