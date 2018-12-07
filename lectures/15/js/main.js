var acc = {
    name:"Muhammad Zain Ejaz",
    bal:0,
    curncy: 'PKRS',
    IBAN: 'Hello'
};

showAccountInfo();

function showAccountInfo(){
    document.getElementById("title").innerHTML = acc.name;
    document.getElementById("balance").innerHTML = acc.bal;
    document.getElementById("currency").innerHTML = acc.curncy;
    document.getElementById("IBAN").innerHTML = acc.IBAN;
}

function addInBalance(input){
    acc.bal +=  parseInt(input);
}

function keyup(event){
    var a = document.getElementById("deposit");
    var b = event.keyCode;
    if ((b >47 && b < 58) || b == 13 ){
        document.getElementById("deposit-msg").innerHTML = '';
        if (b == 13) {
            if (isNaN(a.value)){
                document.getElementById("deposit-msg").innerHTML = 'Enter Valid numbers please';
            }
            else {
                addInBalance(a.value);
                showAccountInfo();
            }
            document.getElementById("deposit").hideFocus();
            document.getElementById("deposit").placeholder = 'Deposit Amount';
            //a.placeholder = 'Deposit Amount';
        }
    }
    else{
        document.getElementById("deposit-msg").innerHTML = 'Enter Valid numbers please';
    }
}