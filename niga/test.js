class account{
   constructor(username,birth,amount,gender,country){
    this.username=username;
    this.birth=birth;
    this.amount=amount;
    this.gender=gender;
    this.country=country;
   }
           
}
const account1 = new account("Muhire",2024,"200000$","male","Rwanda");
const account2 = new account("betty",2012,"500000$","Female","Uganda");
const account3 = new account("Frank",2005,"700000$","Male","Togo");
const account4 = new account("Kagabo",2000,"1000000$","Male","USA");

const bankarray=[account1,account2,account3,account4];
bankarray.forEach(bank => {
    console.log(`username is ${bank.username} birth date is ${bank.birth} account balance is ${bank.amount} gender is ${bank.gender}
        country is ${bank.country}`)
    
});
    


