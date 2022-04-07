'use strict'
/**
 * This function calculates pounds to kilos
 */
function calculate () {
  // input
  let pounds = parseFloat(document.getElementById('inputPounds').value)

  // process
  let kilos = pounds * 2.2046

  // output
  document.getElementById('answers').innerHTML = 'The amount of pounds in kilos is ' + kilos + ' kg'
}