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

function addInBalance(amount){
    acc.bal +=  amount;
}

function subFromBalance(amount){
    if (amount > acc.bal){
        document.getElementById("withdraw-msg").innerHTML = "Don't have sufficient amount in account";
        return 0;
    }
    else{
        acc.bal -=  amount;
        return 1;
    }
}

function DepositFunction(event){
    var a = document.getElementById("deposit");
    var b = event.keyCode;
    if ((b >47 && b < 58) || b == 13 ){
        document.getElementById("deposit-msg").innerHTML = '';
        if (b == 13) {
            if (isNaN(a.value)){
                document.getElementById("deposit-msg").innerHTML = 'Enter Valid numbers please';
            }
            else {
                addInBalance(parseInt(a.value));
                showAccountInfo();
                updateTransactionHistory(parseInt(a.value), "Credit");
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

function withdrawFunction(event){
    var a = document.getElementById("withdraw");
    var b = event.keyCode;
    if ((b >47 && b < 58) || b == 13 ){
        document.getElementById("withdraw-msg").innerHTML = '';
        if (b == '13'){
            if (isNaN(a.value)){
                document.getElementById("withdraw-msg").innerHTML = 'Enter Valid numbers please';
            }
            else{
                var ret = subFromBalance(parseInt(a.value));
                showAccountInfo();
                if (ret == 1){
                    updateTransactionHistory(parseInt(a.value), "Debit");
                }
            }
            document.getElementById("withdraw").hideFocus();
            document.getElementById("withdraw").placeholder = 'Withdraw Amount';
            //a.placeholder = 'Deposit Amount';
        }
    }
    else{
        document.getElementById("withdraw-msg").innerHTML = 'Enter Valid numbers please';
    }
}


function updateTransactionHistory(amount, type){
    var table = document.getElementById("transaction-table");
    table.innerHTML += "<tr>\n" +
        "<th align=\"left\" valign=\"middle\" scope=\"col\">" + Date() +"</th>\n" +
        "<th align=\"left\" valign=\"middle\" scope=\"col\">" + type +"</th>\n" +
        "<th align=\"left\" valign=\"middle\" scope=\"col\">" +amount + "</th>\n" +
        "</tr>";
}