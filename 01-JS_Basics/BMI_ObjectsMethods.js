var irfan = {
    firstName: 'Irfan',
    secondName: 'Danish',
    mass: prompt("What is Irfan's mass in Kg:"),
    height: prompt("What is Irfan's height in Meters:"),
    bmi: function(){
        return this.mass/(this.height*this.height);
    }
};

var saad = {
    firstName: 'Saad',
    secondName: 'Ullah',
    mass: prompt("What is Saad's mass in Kg:"),
    height: prompt("What is Saad's height in Meters:"),
    bmi: function(){
        return this.mass/(this.height*this.height);
    }
};

console.log("Irfan's height: ", irfan.height, " Irfan's mass: ", irfan.mass)
console.log("Saad's height: ", saad.height, " Saad's mass: ", saad.mass)
console.log("Saad's BMI: ", saad.bmi(), " Irfan's BMI: ", irfan.bmi())
console.log("Irfan's BMI is greater than Saad's: " , irfan.bmi()>saad.bmi());