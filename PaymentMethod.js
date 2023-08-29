export default class  PaymentMethod {
    constructor(type, bank, ownersName, cvv, accountNumber, accountExpirationDate) { 
        this._type=type;
        this._bank=bank;
        this._ownersName=ownersName;
        this._cvv=cvv;
        this._accountNumber=accountNumber;
        this._accountExpirationDate=accountExpirationDate;
    }
}