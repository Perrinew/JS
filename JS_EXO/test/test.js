function checkForm(f)
 {
    alert("je m'appelle " + f.elements['nom'].value + " " + f.elements['prénom'].value + " j'ai " + f.elements['âge'].value + " ans ");
    return false; //n'envoie pas le formulaire
 }

