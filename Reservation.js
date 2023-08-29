export default class  Reservation {
    constructor(id, clientID, roomID, adittionalBed, checkIn, checkOut, paymentMethod, currentState, changesHistory) { 
        this._id=id;
        this._clientID=clientID;
        this._roomID=roomID;
        this._adittionalBed=adittionalBed;
        this._checkIn=checkIn;
        this._checkOut=checkOut;
        this._paymentMethod=paymentMethod;
        this._currentState=currentState;
        this._changesHistory=changesHistory;
    }
}