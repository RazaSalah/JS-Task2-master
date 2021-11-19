//Variables
//the time variable is like the count 
let time = 0 ; 
//for the interval 
let timerId = 0;
//the timer is not start yet
let timeout = true;
//Elements in a variable
const startb = document.getElementById("start");
const stopb = document.getElementById("stop");
const resetb = document.getElementById("reset");
const timer = document.querySelector("#time-display");

//use this function to start the timer
//the first step is to modify the timeout to true and then counting the interval by using predefined function and the timeId and then updating time function
const startClock = () => {
timeout=false;
timerId = setInterval(() => {
    time++;
    timeupdate();
}, 1000);
};

//this function update the timer values
// the first step is counting the minute and the second and then displaying the time

const timeupdate = () =>{
const min = Math.floor(time/60);
const sec = time % 60;

if(sec < 10){
    timer.innerHTML=min + ":0" + sec;
}else{
    timer.innerHTML = min +":" + sec;
}
};

// stop and clear the timer by using the predefined function which is clearInterval
const stopClock = () => {
clearInterval(timerId);
};

// Start the timer
//set the event listener for the buttons

startb.addEventListener("click" , function(event){
    if(timeout){
        startClock();
    }
});

//clicking on the stop button will stop the timer and turn the timer to true , the condition used to know if the start button is clicked or not
stopb.addEventListener("click" , function(event){
    stopClock();
    timeout=true;
    if(timeout){
        timeupdate();
    }
});

//by clicking on the reset button the clock will stop and the data will be defined as zero 
resetb.addEventListener("click",function(event){
stopClock();
timeout=true;
time=0;
timeupdate();
});


