//Temperature converter program

const txtBox= document.getElementById("txtBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;


function convert(){
    temp = txtBox.value;
    temp = Number(temp);
    if(toFahrenheit.checked){
        temp = (temp*9/5) +32;
        result.textContent = `Temperature in Fahrenheit is ${temp.toFixed(1)}°F`;
    }else if(toCelsius.checked){
        temp = (temp-32)*5/9;
        result.textContent = `Temperature in celsius is ${temp.toFixed(1)}°C`;
    }else{
        result.textContent = "Please select a conversion unit!!";
    }
}