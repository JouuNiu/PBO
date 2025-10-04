class FruitBasket{


    constructor(fruits){
        this.fruits = [];
    }
    addItem(item){
        this.fruits.push(item);
        console.log(`kamu baru saja menambahkan ${this.fruits}`);
    }
    getInformation(){
        console.log(`List buah di keranjang ${this.fruits}`);


    }
    removeLastItem(){
       this.fruits.pop(item);
       console.log(`kamu baru saja menghapus ${this.fruits}`);
    }
}
   




const fruits = new FruitBasket ();
fruits.addItem("Jeruk");
fruits.addItem("Apple");
fruits.getInformation();
fruits.removeLastItem();
fruits.getInformation();
