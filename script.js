let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
import basicRoom from "./BasicRoom.js";
import deluxRoom from "./DeluxRoom.js";
import PaymentMethod from "./PaymentMethod.js";
import Client from "./Client.js";
import Reservation from "./Reservation.js";
let form = document.querySelector('form');
var checkIn = document.getElementById('checkIn');
var checkOut = document.getElementById('checkOut');

form.addEventListener('submit', (e) => {
      e.preventDefault();
    // var i = 1;
    // for(i=1;i<=10;i++){
    //     var room = new basicRoom("BR00"+i, "10"+i, "SB00"+i);
          
    //       room.addPhoto("IMAGES/home-slide"+i+".jpg")
    //       room._title="Habitacion sencilla";
    //       room._description="El mejor lugar para quedarte";
    //       room._stars=` <div class="stars">
    //       <i class="fas fa-star"></i>
    //       <i class="fas fa-star"></i>
    //       <i class="fas fa-star"></i>
    //       <i class="fas fa-star"></i>
    //       <i class="fas fa-star-half-alt"></i>
    //    </div>`;
    //       room._calendar.push("RES00"+i);
    
    //         var localData = localStorage.getItem('Rooms')
    //         var rooms = localData==null?{data:[]}:JSON.parse(localData)
            
    //         rooms.data.push(room)
          
    //         localStorage.setItem("Rooms", JSON.stringify(rooms))
    
    // }
    
    // var i = 1;
    // var b = i;
    // for(i=1;i<=5;i++){
    //     b = i;
    //     let beds=[];
    //     beds.push("DB00"+i);
    //     var room = new deluxRoom("DR00"+i, "20"+i, beds);
          
    //       room.addPhoto("IMAGES/home-slide"+i+".jpg")
    //       room._title="Habitacion Doble";
    //       room._description="El mejor lugar para quedarte";
    //       room._stars=` <div class="stars">
    //       <i class="fas fa-star"></i>
    //       <i class="fas fa-star"></i>
    //       <i class="fas fa-star"></i>
    //       <i class="fas fa-star"></i>
    //       <i class="fas fa-star-half-alt"></i>
    //    </div>`;
    //       room._calendar.push("RES00"+(b+=10));
    
    //         var localData = localStorage.getItem('Rooms')
    //         var rooms = localData==null?{data:[]}:JSON.parse(localData)
            
    //         rooms.data.push(room)
    //       //  rooms.data=[]
    //         localStorage.setItem("Rooms", JSON.stringify(rooms))
         
    // }
    
    
    // var i = 1;
    // var b = i;
    // for(i=1;i<=5;i++){
    //     b=i;
    //     let beds=[];
    //     if(i==1){
          
    //         beds.push("SB00"+(b+=10));
    //         b=i;
        
    //         beds.push("SB00"+(b+=11));
    //         b=i;
            
            
    //     }
    //     if(i==2){
    //         beds.push("SB00"+(b+=11));
    //         b=i;
    //         beds.push("SB00"+(b+=12));
    //         b=i;
    //     }
    //     if(i==3){
    //         beds.push("SB00"+(b+=12));
    //         b=i;
    //         beds.push("SB00"+(b+=13));
    //         b=i;
    //     }
    //     if(i==4){
    //         beds.push("SB00"+(b+=13));
    //         b=i;
    //         beds.push("SB00"+(b+=14));
    //         b=i;
        
    //     }
    //     if(i==5){
    //         beds.push("SB00"+(b+=14));
    //         b=i;
    //         beds.push("SB00"+(b+=15));
    //         b=i;
           
    //     }
        
        
    //     b=i; var c = i;
    //     var room = new deluxRoom("DR00"+(b+=5), "20"+(c+=5), beds);
          
    //       room.addPhoto("IMAGES/home-slide"+i+".jpg")
    //       room._title="Habitacion Doble";
    //       room._description="El mejor lugar para quedarte";
    //       room._stars=` <div class="stars">
    //       <i class="fas fa-star"></i>
    //       <i class="fas fa-star"></i>
    //       <i class="fas fa-star"></i>
    //       <i class="fas fa-star"></i>
    //       <i class="fas fa-star"></i>
    //    </div>`;
    //    var d = i;
    //       room._calendar.push("RES00"+(d+=15));
    
    //         var localData = localStorage.getItem('Rooms')
    //         var rooms = localData==null?{data:[]}:JSON.parse(localData)
            
    //         rooms.data.push(room)
    //         //rooms.data=[]
    //         localStorage.setItem("Rooms", JSON.stringify(rooms))
          
    // }

    //  var i = 1;
    // var changes = [];
    // var b = 10;
    // for(i=1;i<=10;i++){
        
    //     var reservation = new Reservation("RES00"+(i+b), "USR00"+(i+b),"DR00"+i, false, "2023-08-02", "2023-08-06", "RAPPI-AHORROS", "RESERVED", changes);
          
    //         var localData = localStorage.getItem('Reservations')
    //         var reservations = localData==null?{data:[]}:JSON.parse(localData)
            
    //         reservations.data.push(reservation)
          
    //       localStorage.setItem("Reservations", JSON.stringify(reservations))
        
    // }

    console.log(localStorage.getItem('Reservations'))


        const fd = new FormData(form);
        const obj = Object.fromEntries(fd);

        var _nAdults=obj["nAdults"];
        var _nChild=obj["nChild"];
        var _roomType=obj["roomType"];
            
        var _checkIn = checkIn.value;
        var _checkOut = checkOut.value;
        //start search of room 
      

        var localData = localStorage.getItem('Rooms')
        var rooms = localData==null?{data:[]}:JSON.parse(localData)
        
        var index;
        var found = false;

        var localData = localStorage.getItem('Reservations')
        var reservationsx = localData==null?{data:[]}:JSON.parse(localData)
        var reservations = reservationsx.data;


       
        var roomsToShowX=[];
        localStorage.setItem("RoomsToShowIDs", JSON.stringify(roomsToShowX));
  
       

        for(index in rooms.data){
            var roomX = rooms.data[index];
            
            if(roomX._id.includes(_roomType)){
                   var roomCalendar = roomX._calendar;
                   var index2;
                   for(index2 in roomCalendar){
                        var reservationIDX = roomCalendar[index2].replace('RES','');
                        reservationIDX =  Number(reservationIDX).toFixed(0)-1;
                        

                        if(_checkIn==reservations[reservationIDX]._checkIn||_checkOut==reservations[reservationIDX]._checkOut){
                            console.log("Esta no se puede\n"+_checkIn+" "+reservations[reservationIDX]._checkIn+"\n"+_checkOut+"  "+reservations[reservationIDX]._checkOut);
                        }
                        else if(_checkIn!=reservations[reservationIDX]._checkIn&&_checkOut!=reservations[reservationIDX]._checkOut){

                            console.log("Esta SI se puede\n"+_checkIn+" "+reservations[reservationIDX]._checkIn+"\n"+_checkOut+"  "+reservations[reservationIDX]._checkOut);

                           
                         
                            if(_checkIn!=reservations[reservationIDX]._checkIn||_checkOut!=reservations[reservationIDX]._checkOut){
                                var roomxID=roomX._id;
                                roomsToShowX.push(roomxID);
                                localStorage.setItem("RoomsToShowIDs", JSON.stringify(roomsToShowX));
                                
                            }
                           
                          

                        }
                   }
            }
        }
      
        if(roomsToShowX.length!=0){
            var localData = localStorage.getItem('Search')
            var Search = localData==null?{data:[]}:JSON.parse(localData)
                  
            Search.data = [];
            Search.data.push(_checkIn);
            Search.data.push(_checkOut);
            Search.data.push(_nAdults);
            Search.data.push(_nChild);
            Search.data.push(_roomType);
            
    
    
            localStorage.setItem("Search", JSON.stringify(Search))
         

            window.location.href = "avaliableRooms.html";
        } 

        




//       
//       room.addPhoto("IMAGES/home-slide1.jpg")
//       room._title="Habitacion sencilla";
//       room._description="El mejor lugar para quedarte";
//       room._stars=` <div class="stars">
//       <i class="fas fa-star"></i>
//       <i class="fas fa-star"></i>
//       <i class="fas fa-star"></i>
//       <i class="fas fa-star"></i>
//       <i class="fas fa-star-half-alt"></i>
//    </div>`;
//       room._calendar.push("RES001");

//         var localData = localStorage.getItem('Rooms')
//         var rooms = localData==null?{data:[]}:JSON.parse(localData)
        
//         rooms.data.push(room)
//        rooms.data=[]
//         localStorage.setItem("Rooms", JSON.stringify(rooms))
//         console.log(localStorage.getItem('Rooms'))

    
    
  });
  
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".room-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".gallery-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let accordions = document.querySelectorAll('.faqs .row .content .box');

accordions.forEach(acco =>{
    acco.onclick = () =>{
        accordions.forEach(subAcco => {subAcco.classList.remove('active')});
        acco.classList.add('active');
    }
})






        
    // create rooms
    
        
      
    // create reservations
    // var i = 1;
    // var changes = [];
    // var b = 10;
    // for(i=1;i<=10;i++){
        
    //     var reservation = new Reservation("RES00"+(i+b), "USR00"+(i+b),"DR00"+i, false, "2023-08-02", "2023-08-06", "RAPPI-AHORROS", "RESERVED", changes);
          
    //         var localData = localStorage.getItem('Reservations')
    //         var reservations = localData==null?{data:[]}:JSON.parse(localData)
            
    //         reservations.data.push(reservation)
          
    //       localStorage.setItem("Reservations", JSON.stringify(reservations))
        
    // }

