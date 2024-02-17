## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let i = 0;
function myTimer(timeInMS){
if(i >= 20)
return;
setTimeout(function (){
i++;
console.log(i);
myTimer(timeInMS);
}, timeInMS);
}
myTimer(1000);

(Hint: setTimeout)
