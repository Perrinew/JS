var fibo = [0, 1];
function fibonacci()
{
     var suite = fibo[fibo.length-1]+fibo[fibo.length-2];
     fibo.push(suite);
     return fibo;
}
for (n = prompt("fibonacci");n > 0; n--) 
{
document.getElementById("resultat").innerHTML=fibonacci()	;
}