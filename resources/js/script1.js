
updateEtherValue();

// SETTING UP BUTTON EVENT LISTENERS
$('#leftUpdateButton').on('click', updateLeft)
$('#rightUpdateButton').on('click', updateRight)

function updateLeft() {
    var leftTextValue = parseFloat($('#leftTextArea')[0].value);
    $('#leftThreshold')[0].innerText = leftTextValue;
}

function updateRight() {
    var rightTextValue = parseFloat($('#rightTextArea')[0].value);
    $('#rightThreshold')[0].innerText = rightTextValue;
}



// ----------------------------------------------------
// REPEATING REQUESTS
// ----------------------------------------------------

// UPDATE ETHER VALUE
var eth = 0;
setInterval("updateEtherValue()", 60000);

function updateEtherValue() {
    $.getJSON('https://api.etherscan.io/api?module=stats&action=ethprice&apikey=YourApiKeyToken')
     .done(function(response) {
          eth = response.result.ethusd;
          $('#currentValue')[0].innerText = eth;
     })
}

// CHECK LOWER THRESHOLD
setInterval("checkLeftThreshold()", 60000)

function checkLeftThreshold() {
    var currentValue = parseFloat($('#currentValue')[0].innerText);
    var lowerThreshold = parseFloat($('#leftThreshold')[0].innerText)
    if(currentValue <= lowerThreshold) {
        window.location.href = 'http://192.168.1.56:5003/set-red';
    }
}



// CHECK UPPER THRESHOLD
setInterval("checkUpperThreshold()", 60000)

function checkUpperThreshold() {

}















