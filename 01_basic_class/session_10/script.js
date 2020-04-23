function tambahBulat() {
  var area = document.getElementById('tambah'); //Get Id by div
  var bulat = document.createElement('span'); //Create span element
  var spasi = document.createTextNode(' '); //Create a blank space

  bulat.className = 'bulat'; //Adding class to span element
  area.appendChild(bulat); //Assign span into div element
  area.appendChild(spasi); //Create a blank space after assignment
  clearInterval();
}

function tambahKotak() {
  var area = document.getElementById('tambah');
  var kotak = document.createElement('span');
  var spasi = document.createTextNode(' ');

  kotak.classList.add('kotak');
  area.appendChild(kotak);
  area.appendChild(spasi);
}

//Create random element

var myVar = setInterval(tambahRandom, 2000);

function tambahRandom() {
  clearInterval(myVar);
  var area = document.getElementById('tambah');
  var kotak = document.createElement('span');
  var spasi = document.createTextNode(' ');
  var random = Math.floor(Math.random() * 2) + 1; //Random number, max:2 starting at 1

  kotak.classList.add('random' + random); //create a class and add a random num
  area.appendChild(kotak);
  area.appendChild(spasi);
}
