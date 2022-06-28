var n = new Number,
  estPrem = new Boolean(true);
function tester() {
  n = Number(document.test.nbre.value);
  estPrem = true;
  let ok = "c'est un nombre premier";
  let nook = "ce n'est pas un nombre premier";
  for (j = 2; j < n; j++) {
    if (n % j == 0) estPrem = false;
  }
  //document.write(pasok);
  document.test.rep.value = estPrem;
  let html = document.getElementById("reponse").innerHTML;
  if (estPrem) 
  {
    document.getElementById("reponse").innerHTML = ok;
    document.body.style.backgroundColor = "green";
  } 
  
  else 
  { 
    document.body.style.backgroundColor = "red";
    document.getElementById("reponse").innerHTML = nook 
  }
}


