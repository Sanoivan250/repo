class products{
    constructor(name,price,quantity,gradients){
     this.name=name;
     this.price=price;
     this.quantity=quantity;
      this.discount=Math.floor(Math.random()*200)+1;
     this.gradients=gradients;
    }
}
const Product1 = new products('Rice',12,'120kg','proteins');
const Product2 = new products('Potatoes',2,'220kg','proteins');
const Product3 = new products('Posho',11,'320kg','fats');
const Product4 = new products('Meat',12,'110kg','proteins');

console.log(Product1,Product2,Product3,Product4)
