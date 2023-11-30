/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const length = document.getElementById("lengthDOM")
const volume = document.getElementById("volumeDOM")
const mass = document.getElementById("massDOM")
const input = document.getElementById("inputDOM")
const button = document.getElementById("convertBtn")

const feet = 3.281
const meter = 1
const litres = 1
const gallons = 0.264
const kg = 1
const pound = 2.204

button.addEventListener("click", function(){
    let resultMeterToFeet = input.value*feet
    let resultFeetToMeter = input.value/feet
    let resultLitresToGallons = input.value*gallons
    let resultGallonsToLitres = input.value/gallons
    let resultKgToPounds = input.value*pound
    let resultPoundsToKg = input.value/pound

    length.innerHTML = `Length (Meters/Feet)<br>${input.value} meter(s) = <b>${resultMeterToFeet.toFixed(3)} feet</b> <br>${input.value} feet = <b>${resultFeetToMeter.toFixed(3)} meter(s)</b>`
    volume.innerHTML = `Volume (Liters/Gallons)<br>${input.value} litre(s) = <b>${resultLitresToGallons.toFixed(3)} gallon(s)</b><br>${input.value} gallon(s) = <b>${resultGallonsToLitres.toFixed(3)} litre(s)</b>`
    mass.innerHTML = `Mass (Kilogramms/Pounds)<br>${input.value} KG = <b>${resultKgToPounds.toFixed(3)} Pound(s)</b><br>${input.value} pound(s) = <b>${resultPoundsToKg.toFixed(3)} KG</b>`

})

