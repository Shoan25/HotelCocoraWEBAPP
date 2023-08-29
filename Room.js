export default class  Room {
    constructor(id, roomNumber) { 
        this._description="";
        this._title="";
        this._stars=""; 
        this._calendar = [];
        //current state 1 = available, 2 = maintenance, 3 = in use
        this._currentState = "1";
        this._id = id;
        this._roomNumber = roomNumber;
        this._photos = [];
        this._price = "";
       
    }

    getInfo(){
        // var roomThings=[];
        // roomThings.push(this._price);
        // roomThings.push(this._photos);
        // roomThings.push(this._title);
        // roomThings.push(this._description);
        // roomThings.push(this._stars);
        // roomThings.push(this._id);
        
        // return
    }
  
    addPhoto(link){
        this._photos.push(link);
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