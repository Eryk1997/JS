var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;

var el = document.getElementById("cost");
el.textContent = "$" +total;

var userName;
var message;
userName = "Molly";
message = "See you soon";

var elName = document.getElementById('nameId');
elName.textContent = userName;
var elMessage = document.getElementById("messageId");
elMessage.textContent = message;

var inStock;
var shipping;
inStock = true;
shipping = false;

var elStock = document.getElementById('stockId');
elStock.textContent = inStock;

var elShipping = document.getElementById('shippingId');
elShipping.textContent = shipping;

var colors;
colors = ["white","green","red"];

var elColor = document.getElementById('colorId');
elColor.textContent = colors;

//Create array
var colorsArray = ['white','green','red'];

//update third element on the date
colorsArray[2] = 'yellow';

//get element with id of colors
var elColorArray = document.getElementById('colorId2');

//Replace 
elColorArray.textContent = colorsArray[2];

var subTotal = (13 + 1) * 5;
var shipping2 = 0.5 * (13 + 1);

var total2 = subTotal + shipping2;

var elTotal2 = document.getElementById('total2Id');
elTotal2.textContent = total2;

var elSubTotal = document.getElementById('subTotalId');
elSubTotal.textContent = subTotal;

var elShipping2 = document.getElementById('shipping2Id');
elShipping2.textContent = shipping2;


var fistName = "Eryk"
var surName = "Janocha"
var textWelcome = fistName + " " + surName;

var elTextWelcome = document.getElementById('textWelcomeId');
elTextWelcome.textContent = textWelcome;


var greeting = 'Howdy';
var name = 'Molly';
message = 'check your order';
var welcome = greeting + name + message;

var sign = 'House';
var tiles = sign.length;
subTotal = tiles * 5;
shipping2 = 7;
var grandTotal = subTotal + shipping2;

var el = document.getElementById('greeting2');
el.textContent = welcome;

var elSign = document.getElementById('userSign');
elSign.textContent = sign;

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

var elSubTotal2 = document.getAnimations('subtotal2');
elSubTotal2.textContent = subTotal;

var elSubTotal2 = document.getAnimations('shipping3');
elSubTotal2.textContent = shipping2;

var elGrandTotal = document.getAnimations('grandTotal');
elGrandTotal.textContent = grandTotal;