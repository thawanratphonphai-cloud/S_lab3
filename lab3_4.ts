class Entity{
    private id:number;
    private name:string;
    private price:number;
    private stock:number;
    constructor(id:number,name:string,price:number,stock:number){
        this.id=id;
        this.name=name;
        this.price=price;
        this.stock=stock;
    }
    public getId():number{
        return this.id;
    }
    public setId(id:number):void{
        this.id=id;
    }
    public getName():string{
        return this.name;
    }
    public setName(name:string):void{
        this.name;
    }
    public getPrice():number{
        return this.price;
    }
    public setPrice(price:number):void{
        this.price;
    }
    public getStock():number{
        return this.stock;
    }
    public setStock(stock:number):void{
        this.stock;
    }
}
const i =new Entity(120034,"Mouse",35000,20);
console.log(`รหัสสินค้า: ${i.getId()} ชื่อสินค้า: ${i.getName()} ราคา: ${i.getPrice()}บาท สต๊อก: ${i.getStock()-2}ชิ้น `);