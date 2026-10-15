abstract class ShippingCalculator {
    constructor(protected base:number) {}
    abstract calW(W:number):void;
}
class StandardShipping extends ShippingCalculator{
    constructor(base:number,private sent:number){
        super(base)
    }
    calsentW(W:number):void{
        console.log(`ค่าจัดส่ง: ${this.base+W*this.sent} บาท`);
    }
}
class ExpressShipping extends ShippingCalculator{
    constructor(base:number,private fas:number){
        super(base)
    }
    calsentW(W:number):void{
        console.log(`ค่าจัดส่ง: ${this.base+W*20*this.fas} บาท`);
    }
}
const t=new StandardShipping(200,7);
const t1=new ExpressShipping(100,8);
t.calsentW(10);
t1.calsentW(10);