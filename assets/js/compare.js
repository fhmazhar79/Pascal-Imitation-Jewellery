// Assuming all-data.js is loaded before this script and contains the `cards` array

// Populate the dropdowns with product names
for (var i = 0; i < cards.length; i++) {
    document.getElementById("select1").innerHTML += `
        <option value="${i}">${cards[i].name}</option>
    `;
    document.getElementById("select2").innerHTML += `
        <option value="${i}">${cards[i].name}</option>
    `;
}

// Function to handle selection of the first product
function item1(a) {
    var select2 = document.getElementById("select2").value;
    if (a != select2) {
        document.getElementById("img1").src = cards[a].img;
        document.getElementById("price1").innerHTML = cards[a].price;
        document.getElementById("desc1").innerHTML = cards[a].discription;
        document.getElementById("brand1").innerHTML = cards[a].silver;
        document.getElementById("exchange1").innerHTML = cards[a].exchange;
        document.getElementById("refund1").innerHTML = cards[a].refund;
        document.getElementById("color1").innerHTML = cards[a].color;
        document.getElementById("pack1").innerHTML = cards[a].pack;
    } else {
        document.getElementById("select1").selectedIndex = 0;
        document.getElementById("img1").src = "assets/img/no-card.jpg";
        document.getElementById("price1").innerHTML = "N/A";
        document.getElementById("desc1").innerHTML = "N/A";
        document.getElementById("brand1").innerHTML = "N/A";
        document.getElementById("exchange1").innerHTML = "N/A";
        document.getElementById("refund1").innerHTML = "N/A";
        document.getElementById("color1").innerHTML = "N/A";
        document.getElementById("pack1").innerHTML = "N/A";
    }
}

// Function to handle selection of the second product
function item2(a) {
    var select1 = document.getElementById("select1").value;
    if (a != select1) {
        document.getElementById("img2").src = cards[a].img;
        document.getElementById("price2").innerHTML = cards[a].price;
        document.getElementById("desc2").innerHTML = cards[a].discription;
        document.getElementById("brand2").innerHTML = cards[a].silver;
        document.getElementById("exchange2").innerHTML = cards[a].exchange;
        document.getElementById("refund2").innerHTML = cards[a].refund;
        document.getElementById("color2").innerHTML = cards[a].color;
        document.getElementById("pack2").innerHTML = cards[a].pack;
    } else {
        document.getElementById("select2").selectedIndex = 0;
        document.getElementById("img2").src = "assets/img/no-card.jpg";
        document.getElementById("price2").innerHTML = "N/A";
        document.getElementById("desc2").innerHTML = "N/A";
        document.getElementById("brand2").innerHTML = "N/A";
        document.getElementById("exchange2").innerHTML = "N/A";
        document.getElementById("refund2").innerHTML = "N/A";
        document.getElementById("color2").innerHTML = "N/A";
        document.getElementById("pack2").innerHTML = "N/A";
    }
}