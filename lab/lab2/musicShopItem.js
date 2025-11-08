class MusicShopItem{
    constructor(name, type, price, quantity, description){
        this.name = name;
        this.type = type;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }

    getName(){
        return this.name;
    }
    getType(){
        return this.type;
    }
    getPrice(){
        return this.price;
    }
    getQuantity(){
        return this.quantity;
    }
    getDescription(){
        return this.description;
    }
    setQuantity(sold){
        if(sold > this.quantity){
            console.log("There is not enough inventory !");
            return;
        }
        this.quantity -= sold;
    }
    getInfo() {
        return `${this.name} (${this.type}) - $${this.price} | Qty: ${this.quantity} | ${this.description}`;
}
    addItem(amount){
        if(amount > 0){
            this.quantity = this.quantity + amount;
        }else{
            console.log("You should add a valid number ");
            return;
        }
    }

    removeItem(amount){
        if(amount >  0 && amount <= this.quantity){
            this.quantity = this.quantity - amount;
        }else{
            console.log("You should add a valid number");
            return;
        }
    }
}