//Deklarasi Variable Array Grades
var grades = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//Function Convert Grades
function batchGrader(grades) {
  var textGrades = '';
  var result = [];
  for (i = 0; i < grades.length; i++) {
    textGrades = '';
    if (grades[i] >= 80) {
      textGrades = 'A';
    } else if (grades[i] >= 70 && grades[i] <= 80) {
      textGrades = 'B';
    } else if (grades[i] >= 60 && grades[i] <= 70) {
      textGrades = 'C';
    } else {
      textGrades = 'D';
    }
    result.push(textGrades);
  }
  return result;
}

//Deklarasi Hasil Function ke dalam variable
var hasilConvert = batchGrader(grades);

//Function Recap Grades
function recapGrades(array, value) {
  var count = 0;
  array.forEach(function (v) {
    v === value && count++;
  });
  return count;
}

//Log Hasil Function Convert Grades
console.log(hasilConvert);
//Log Hasil Function Recap
console.log(recapGrades(hasilConvert, 'A') + ' siswa memperoleh nilai A');
console.log(recapGrades(hasilConvert, 'B') + ' siswa memperoleh nilai B');
console.log(recapGrades(hasilConvert, 'C') + ' siswa memperoleh nilai C');
console.log(recapGrades(hasilConvert, 'D') + ' siswa memperoleh nilai D');
