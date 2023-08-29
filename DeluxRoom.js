import Room from "./Room.js"; 

export default class  deluxeRoom extends Room{
    constructor(id,roomNumber,beds){
        super(id,roomNumber)
        this._beds=beds;
        this._price = "209.900";
    }
    isAvailable(checkIn, checkOut){
        return super.isAvailable(checkIn, checkOut);
    }
}