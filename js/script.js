 function weightConverter(valNum) {
      document.getElementById("outputKilograms").innerHTML=valNum/2.2046;
    }

'use strict'
/**
 * This function calculates pounds to kilos
 */
function calculate () {
  // input
  const pounds = parseFloat(document.getElementById('length-of-rectangle').value)

  // process
  const kilos = pounds * 2.2046

  // output
  document.getElementById('pounds').innerHTML = 'The amount of pounds in kilos is ' + pounds + ' kg'
}