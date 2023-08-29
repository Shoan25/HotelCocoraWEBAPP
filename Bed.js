export default class bed{
    constructor(id) {  
        this.calendar = [];
        //current state 1 = available, 2 = maintenance, 3 = in use
        this.currentState = "1";
        this._id = id;
    }
  
    addtoCalendar(event){
        this.calendar.push(event);
    }

    isAvailable(checkIn, checkOut){
        
        for(index in this.calendar){
            this.calendar[i].getId;
        }

    }

    getId() {
        return this._id;
    }

    setId(id) {
        this._id=id;
    }
}