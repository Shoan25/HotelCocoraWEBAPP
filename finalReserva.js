var localData = localStorage.getItem('Rooms')
var roomsX = localData==null?{data:[]}:JSON.parse(localData)        

var rooms = roomsX.data;

var localData2 = localStorage.getItem('RoomsToShowIDs')
var roomsToShowX = localData2==null?{data2:[]}:JSON.parse(localData2)        

var roomsToShowID = roomsToShowX.data2;
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
var nAdults = document.getElementById('nAdults');
var nChild = document.getElementById('nChild')
var localData = localStorage.getItem('Search')
var Search2 = localData==null?{data:[]}:JSON.parse(localData)
var roomType = document.getElementById('roomType');

checkIn.value=Search2.data[0];
checkOut.value=Search2.data[1];
nAdults.value=Search2.data[2];
nChild.value=Search2.data[3];
roomType.value=Search2.data[4];


form.addEventListener('submit', (e) => {
      e.preventDefault();


        const fd = new FormData(form);
        const obj = Object.fromEntries(fd);

        var _nAdults=obj["nAdults"];
        var _nChild=obj["nChild"];
        var _roomType=obj["roomType"];
            
        var _checkIn = checkIn.value;
        var _checkOut = checkOut.value;
        //start search of room 
        console.log(_checkIn);
        

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
        console.log(localStorage.getItem('RoomsToShowIDs'))
        if(roomsToShowX.length!=0) {
            var localData = localStorage.getItem('Search')
            var Search = localData==null?{data:[]}:JSON.parse(localData)
                  
            Search.data = [];
            Search.data.push(_checkIn);
            Search.data.push(_checkOut);
            Search.data.push(_nAdults);
            Search.data.push(_nChild);
            Search.data.push(_roomType);
            
    
    
            localStorage.setItem("Search", JSON.stringify(Search))
            console.log(localStorage.getItem('Search'))

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

  var localData = localStorage.getItem('RoomToShowFinal')
  var finalRoom = localData==null?{data:[]}:JSON.parse(localData)
  var room1 = finalRoom[0];
var room;
  var index;
for(index in rooms){
    if(rooms[index]._id==room1){
        room=rooms[index];
    }
}
  

        const markup=`
        <div class="swiper-slide slide">
        <div class="image">
           <span class="price">${room._price}/night</span>
           <img src="${room._photos[0]}" alt="">
           <a  class="fas fa-shopping-cart"></a>
        </div>
        <div class="content">
           <h3>${room._title}</h3>
           <p>${room._description}</p>
           <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
           </div>
           <a id="btnAdicionarCama" name="${room._id}" class="btn">Agregar cama Sencilla</a>
           <a id="btnFinalizar" name="${room._id}" class="btn">Finalizar reserva</a>
          
           
        </div>
     </div>

     


        `; document.getElementById('data').innerHTML+=markup;
    


const btnFinalizar = document.getElementById('btnFinalizar');

btnFinalizar.onclick = () => {
  
  window.location.href = "finalizar.html";
}











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