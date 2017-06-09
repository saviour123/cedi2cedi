/**
 * get form the amount from the form
*/
var nGHCField = document.getElementById('input-control');
var button = document.querySelector('input[type=button]');

nGHCField.oninput = function(){
    amtOldCedi = parseFloat(nGHCField.value) * 10000;
    return result.innerHTML = amtOldCedi.toLocaleString();
};

