interface PaymentMethod{
    checkbin(money:number):void;
}
class PaymentCredit implements PaymentMethod{
    constructor(
        public creditcard:string,
        public howpay:string
    ){}
    checkbin(money: number): void {
        console.log(`ชำระเงิน ${money} บาท ชำระด้วย ${this.howpay} หมายเลขบัตร ${this.creditcard}`);
    }
}
const user1=new PaymentCredit("12345678","บัตรเครดิต");
user1.checkbin(100);