const inputVal = document.getElementById('input-control');
const button = document.querySelector('input[type=button]');
const ifcheck = document.querySelector('input[type=checkbox]');

inputVal.oninput = function(){
    if (inputVal.value == ""){
        result.innerHTML == "0.00";
    } else{
        if (!ifcheck.checked) {
            amtNewCedi = parseFloat(inputVal.value) / 10000;
            result.innerHTML = amtNewCedi.toLocaleString() + " " + "New Ghana Cedis";
        } else {
            amtOldCedi = parseFloat(inputVal.value) * 10000;
            result.innerHTML = amtOldCedi.toLocaleString() + " " +  "Old Ghana Cedis";
        }
    }
};
