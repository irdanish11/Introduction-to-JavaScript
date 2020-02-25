var bill = [124, 48, 268];

function tipCalculator(bill){
    var tip = [];
    var totalBill = [];
    var i = 0;
    while(i <= bill.length){
        if(bill[i]<=50){
            tip[i] = bill[i]*0.2;
            totalBill[i] = bill[i] + tip[i];
        }
        else if(bill[i]>50 && bill[i]<=200){
            tip[i] = bill[i]*0.15;
            totalBill[i] = bill[i] + tip[i];
        }
        else{
            tip[i] = bill[i]*0.10;
            totalBill[i] = bill[i] + tip[i];
        }
        i += 1;
        
    }
    tip.pop();
    totalBill.pop();
    return [tip, totalBill];
}

var tip, totalBill;
tip = tipCalculator(bill);
console.log(tip[0], tip[1]);