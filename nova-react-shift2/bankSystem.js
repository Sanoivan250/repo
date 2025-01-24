class bankAccount{
    constructor(name,id,widthdrow){
        this.name=name;
        this.widthdrow=widthdrow;
        this.id=id;
        this.amount=5000000;
        this.balance=this.amount-this.widthdrow
    }
}
const newAccount = new bankAccount('John Peter',1212,4000000);
console.log(`My name is ${newAccount.name} and my balance is ${newAccount.balance}`);
