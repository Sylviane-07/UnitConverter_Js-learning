/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//grab dom el
const inputEl= document.getElementById("input-el")
const convertBtn = document.getElementById("convert")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


//add eventListener on btn
convertBtn.addEventListener("click", function(){
    let baseValue = inputEl.value
    const meterToFeet =  Number(baseValue * 3.281).toFixed(3)
    const literToGallon = Number(baseValue * 0.264).toFixed(3)
    const kiloToPound =  Number(baseValue * 2.204).toFixed(3)

    const feetToMeter = Number(baseValue * 0.304).toFixed(3)
    const gallonToLiter = Number(baseValue * 3.785).toFixed(3)
    const poundToKilo = Number(baseValue * 0.453).toFixed(3)

    if( baseValue < 1 ){
       lengthEl.textContent = `${baseValue} meter = ${meterToFeet} feet | ${baseValue} foot ${feetToMeter} meter`
       volumeEl.textContent = `${baseValue} liter = ${literToGallon} gallons | ${baseValue} gallon ${gallonToLiter} liter`
       massEl.textContent = `${baseValue} kilos = ${kiloToPound} pound | ${baseValue} pound ${poundToKilo} kilo`
    } else{
       lengthEl.textContent = `${baseValue} meters = ${meterToFeet} feet | ${baseValue} feet ${feetToMeter} meters`
       volumeEl.textContent = `${baseValue} liters = ${literToGallon} gallons | ${baseValue} gallons ${gallonToLiter} liters`
       massEl.textContent = `${baseValue} kilos = ${kiloToPound} pounds | ${baseValue} pounds ${poundToKilo} kilos`
    }
   
})
