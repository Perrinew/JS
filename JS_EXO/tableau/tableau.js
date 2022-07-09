var exemple = "Perrine"
console.log(`${exemple}`)

document.write("</br></br>")

// 1 forEach()

var tab= [1, 2, 3, 4, 5];
tab.forEach(i => {console.log(i);});

// 2 map()

var numbers = [4, 9, 16, 25, 81];
var x = numbers.map(Math.sqrt);
console.log(x);

// 3 reduce()
var nbrs = [20, 5, 5];
function facture(total, n) {
    return total - n;
}
console.log(nbrs.reduce(facture))

// 4 includes()
var tab = [1, 2, 3];

tab.includes(3); //sortie: true
tab.includes(0); //sortie: false
console.log(tab.includes(3))
console.log(tab.includes(0))

// 5 filter()
var tab = [0, 1, 2, 3, 4, 5];


var res = tab.filter(n => n > 2);
console.log(res);    

// 6 sort()
var systems = ["Windows", "Linux", "Apple"];
systems.sort();
console.log(systems);  

// 7 every()
var tab = [1, 2, 3, 4];

var b = tab.every(n => n < 5);
console.log(b); 
  
var b = tab.every(n => n > 2);
console.log(b); 

// 8 splice()
const mois = ['Jan', 'Mars', 'Avril', 'Juin'];
console.log(mois)
mois.splice(1, 0, 'Fev');

console.log(mois);

mois.splice(4, 1, 'Mai');

console.log(mois);

// 9 pop()
const legumes = ['broccoli', 'choux', 'pomme de terre', 'haricots', 'tomate'];

console.log(legumes.pop());

console.log(legumes);

legumes.pop();

console.log(legumes);
console.log("</br>")
// 10 find()
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
