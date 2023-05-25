// let answer =""
// let celcius = parseInt(document.getElementById('celcius').value);
// let farenheit = parseInt(document.getElementById('farenheit').value);

//farenheit to celcius
function convert(output) {
    output = parseFloat(output);
    document.getElementById("answer").textContent=((output-32)/1.8).toFixed(2);
  }
function convert2(output2) {
    output2 = parseFloat(output2);
    document.getElementById("answer2").textContent= ((output2 * (9/5)) + 32).toFixed(2)
   }

  //celcius to farenheit
 