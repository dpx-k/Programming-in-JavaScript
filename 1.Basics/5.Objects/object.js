

var assisstantManager = { 
    movement: 5, socialSkills: 6, 
    streetSmarts: 4, 
    health : 50
}

assisstantManager.nextAcheivement = "Get promoted to store manager"

console.log(assisstantManager)

// bracket approach 
var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}

// combining both approaches
var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100} 

// keys can be created as numbers(string data type) but is discourages 
car["2025"] = 1992; 
console.log(car)

// bracket notation can evaluate expressions 
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}