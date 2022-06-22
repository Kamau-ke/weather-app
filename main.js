let deg=document.querySelector('.deg');
let des=document.querySelector('.des');
let timezone=document.querySelector('.timezone');

let time=document.querySelector('.t-time');
let day_t=document.querySelector('.day-t');
let d_date=document.querySelector('.d-date')
          

function getTime(){
    let d_time=new Date();

    let hrs=d_time.getHours();
    let min=d_time.getMinutes();

   if(hrs<10 ) hrs= '0' + hrs; 
   if(min<10) min='0' + min;

//    hrs <12? timezone.textContent='AM' : timezone.textContent='PM';

   if(hrs<12){
    timezone.textContent='AM'
   }else{
    timezone.textContent='PM'
   }

    
    time.innerText=hrs + ': ' + min;
    
    let weekdays=new Array(7);
    weekdays[1]='Sun'
    weekdays[2]='Tue'
    weekdays[3]='Wed'
    weekdays[4]='Thur'
    weekdays[5]='Fri'
    weekdays[6]='Sat'
    weekdays[7]='Mon'
    
    
    
    let day=weekdays[d_time.getDay() ];
    day_t.innerText=day;

    let d_day=d_time.getDate();
    let month= d_time.getMonth() + 1
    let year=d_time.getFullYear()

    if(d_day<10) d_day='0' + d_day;
    if(month<10) month='0' + month;
    
    let current_date= d_day+ '/' + month + '/' +year;
    d_date.innerText=current_date;

    
}




 function getWeather(){
    let long;
    let lat;

    if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(position=>{

         // get logitude and latitude
         long=position.coords.latitude;
         lat=position.coords.latitude;

         fetch( 'https://api.openweathermap.org/data/2.5/weather?lat=-0.7157049&lon=-0.7157049&appid={Your id}')
                 .then(Response=>Response.json())
                 .then(data=>{
                     
                     const {main, weather}=data

                     let temp=main.temp-273;
                     deg.textContent=Math.floor(temp);
                     des.textContent=weather[0].description;

                 })

        
         
     })
}
 }

 setInterval(getWeather, 1000)
 setInterval(getTime, 1000)
 

    







