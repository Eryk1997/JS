var msg = 'Sign up to receive our newsletter for 10% off!';
function updateMessage(){
    var el = document.getElementById('message');
    el.textContent = msg;
}
updateMessage();

function calculate(a,b){
    return a*b;
}

var sum = calculate(2,5);

var elSum = document.getElementById('sumId');
elSum.textContent = sum;

function return2elements(a,b,c){
    var sum = a + b;
    var mul = sum * c;
    var text = "Hello";
    var arrayList = [sum,mul,text];
    return arrayList;
}

var elFist = document.getElementById('first');
elFist.textContent = return2elements(1,2,3)[0];

var elSecond = document.getElementById('second');
elSecond.textContent = return2elements(1,2,3)[1];

var elThird = document.getElementById('third');
elThird.textContent = return2elements(1,2,3)[2];

var hotel = {
    name: "Eryk",
    rooms: 40,
    booked: 25,
    checkAvailability: function(){
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('hotelId');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
// elRooms.textContent = hotel.checkAvailability();

var hotel = new Object();

hotel.name = "Park";
hotel.rooms = 75;
hotel.booked = 33;
hotel.checkAvailability = function(){
    return this.rooms - this.booked;
}

console.log(hotel.name);
console.log(hotel.checkAvailability());

var hotel = {
    name: "Park",
    rooms: 20,
    booked: 1
}

hotel.gym = true;
hotel.pool = false;

console.log("Gym " + hotel.gym);
console.log("Pool: " + hotel.pool);

console.log(window.location.href);
console.log(window.innerHeight);
console.log(msg.length);
console.log(msg.link());
console.log(msg.localeCompare(0));
console.log(msg.small());
console.log(msg.toUpperCase());
console.log(msg.sub());
console.log(msg.sup());
console.log(msg.trim());

class Hotel{
    constructor(name){
        this.name = name;
    }
}

var hotelTest = new Hotel("eryk");
console.log(hotelTest.name);

