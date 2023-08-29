export default class  Client {
    constructor(name, lastName, personalID, userID, city, adress, email, phoneNumber, paymentMethods, bookingHistory) { 
        this._name=name;
        this._lastName=lastName;
        this._personalID=personalID;
        this._userID=userID;
        this._city=city;
        this._adress=adress;
        this._email=email;
        this._phoneNumber=phoneNumber;
        this._paymentMethods=paymentMethods;
        this._bookingHistory=bookingHistory;
    }
}