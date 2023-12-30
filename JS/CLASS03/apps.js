var bangla=Number(prompt("Bangla Mark:"));
var english=Number(prompt("English Mark:"));
var math=Number(prompt("Math Mark:"));
var obtainMark=bangla+english+math;

if(bangla<33 || english<33 || math<33){
    document.write('F');
}
else if(obtainMark>=240){
   document.write('Bangla='+ bangla+'<br>'+'English='+ english+'<br>'+'Math='+ math+'<br>'+'<hr>'+'<br>'+'Total='+obtainMark + '<br>'+'Grade= A+');

}
else if(obtainMark>=210){
    document.write('Bangla='+ bangla+'<br>'+'English='+ english+'<br>'+'Math='+ math+'<br>'+'<hr>'+'<br>'+'Total='+obtainMark + '<br>'+'Grade= A');
}
else if(obtainMark>=180){
    document.write('Bangla='+ bangla+'<br>'+'English='+ english+'<br>'+'Math='+ math+'<br>'+'<hr>'+'<br>'+'Total='+obtainMark + '<br>'+'Grade= A-');
}
else if(obtainMark>=150){
    document.write('Bangla='+ bangla+'<br>'+'English='+ english+'<br>'+'Math='+ math+'<br>'+'<hr>'+'<br>'+'Total='+obtainMark + '<br>'+'Grade= B');
}
else if(obtainMark>=120){
    document.write('Bangla='+ bangla+'<br>'+'English='+ english+'<br>'+'Math='+ math+'<br>'+'<hr>'+'<br>'+'Total='+obtainMark + '<br>'+'Grade= C');
}
else if(obtainMark>=99){
    document.write('Bangla='+ bangla+'<br>'+'English='+ english+'<br>'+'Math='+ math+'<br>'+'<hr>'+'<br>'+'Total='+obtainMark + '<br>'+'Grade= D');
}