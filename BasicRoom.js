import Room from "./Room.js"; 
export default class  basicRoom extends Room{
    constructor(id,roomNumber,bed){
        super(id,roomNumber)
        this._bed=bed;
        this._price = "109.900";
    }

    

    isAvailable(checkIn, checkOut){
        return super.isAvailable(checkIn, checkOut);
    }

    getId(){
        return super.getId();
    }
}