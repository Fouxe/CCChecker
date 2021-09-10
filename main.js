// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
// Step 3
const validateCred = (array) => {
    // reverse the array (i know i can just reverse the for loop but eh)
    let tempArray = array.reverse()
    let sum = 0;
    for (let i = 0; i<array.length;i++){
        // i is divisible by 2 with no remainder therefore it is even to comply with the lugn algorithm
        if ((i % 2) === 0){
            sum += tempArray[i];
        } else {
            tempArray[i] *= 2;
            if (tempArray[i] > 9){
                sum += tempArray[i] - 9;
            } else {
                sum += tempArray[i];
            }
            tempArray[i] /= 2;
        }
    }
    return sum % 10 === 0 ? true : false;
};

//Step 4
const findInvalidCard = Inva => {
    Temps = [];
    for (let i = 0; i < Inva.length;i++){
         if (validateCred(Inva[i]) === false){
             // just the invalid Credit Card info into a new nested array
             Temps.push(Inva[i]);
         }
    }
    return Temps;
};

//to shorten call function of Step 4
let easy = findInvalidCard(batch);

//Step 5
const idInvalidCardCompanies = Num => {
    TempArr2 = [];
    FakeComp = [];
    for (let i = 0; i < Num.length; i++){
        // this is the part where not reversing the for loop in Step 3 came back to bite
        TempArr2.push(Num[i].reverse())
    }
    for (let i = 0; i < TempArr2.length;i++){
        // i did if else for this...
        if(TempArr2[i][0] === 3){
            FakeComp.push('Amex');
        } else if (TempArr2[i][0] === 4){
            FakeComp.push('Visa');
        } else if (TempArr2[i][0] === 5){
            FakeComp.push('Mastercard')
        } else if (TempArr2[i][0] === 6){
            FakeComp.push('Discover')
        } else {
            FakeComp.push('Company Not Found');
        }
    }
    // used .splice to remove the duplicates using if and or
    for (let i = 0; i < FakeComp.length;i++){
        if (FakeComp[i] === 'Amex' || FakeComp[i] === 'Visa' || FakeComp[i] === 'Mastercard' || FakeComp[i] === 'Discover'){
            FakeComp.splice(i,1);
        }
    }
    return FakeComp;
};
// accept number and strings to turn in to credit cards
const newCreditCard = CC => {
    CC = CC.toString();
    CC = CC.split('')
    return console.log(`${CC}`);
}
// turns all number to 9's
const DefileCreditCard = Kek => {
    Kek.forEach(element => {
       console.log(element = 9); 
    });
}
//DefileCreditCard(valid1)
//console.log(validateCred(valid1))
//outputs true
//console.log(easy)
//outputs invalid credit cards
//console.log(idInvalidCardCompanies(easy));
//outputs Mastercard,Discover,Amex,Visa
newCreditCard(4916646027367643);