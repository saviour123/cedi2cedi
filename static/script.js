/**
 * get form the amount from the form
*/
var inputVal = document.getElementById('input-control');
var button = document.querySelector('input[type=button]');
var ifcheck = document.querySelector('input[type=checkbox]');

inputVal.oninput = function(){
    if (!inputVal.value){
        console.log(inputVal.value);
    }
    if (!ifcheck.checked) {
        amtNewCedi = parseFloat(inputVal.value) / 10000;
        result.innerHTML = amtNewCedi.toLocaleString() + " " + "New Ghana Cedis";
    } else {
        amtOldCedi = parseFloat(inputVal.value) * 10000;
        result.innerHTML = amtOldCedi.toLocaleString() + " " +  "Old Ghana Cedis";
    }
};


