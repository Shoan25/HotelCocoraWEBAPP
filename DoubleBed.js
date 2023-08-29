import bed from "./Bed.js";

export default class doubleBed extends bed{
    constructor(id) {  
        super(id)
    }
     
    
    isAvailable(checkIn, checkOut){
        return super.isAvailable(checkIn, checkOut);
    }
    getID(){
        return super.getId();
    }
}