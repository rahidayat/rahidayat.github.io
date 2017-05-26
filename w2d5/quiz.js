
var ans = new Array;
var done = new Array;
var score = 0;
ans[1] = "c";
ans[2] = "a";
ans[3] = "b";
ans[4] = "b";
ans[5] = "d";
ans[6] = "c";
ans[7] = "c";
ans[8] = "c";
ans[9] = "d";
ans[10] = "a";

function Quiz(pertanyaan, jawaban) {
  if (jawaban != ans[pertanyaan]) {
    if (!done[pertanyaan]) {
      alert("SALAH! Skor anda sekarang adalah: " + score);
    }
    else {
      alert("Anda sudah pernah menjawab soal ini!");
    }
  }
  else {
    if (!done[pertanyaan]) {
      score++;
      alert("BENAR! Skor anda sekarang adalah: " + score);
    }
    else {       
      alert("Anda sudah pernah menjawab soal ini!");
    }
  }
}


function Hasil () {
  if (score == 10) {
    alert("SEMPURNA! Anda mendapatkan nilai "+ score);
  }
  else if (score >= 7 && score <= 9) {
    alert("BAGUS! Anda mendapatkan nilai "+ score);
  }
  else {
    alert("Nilai Anda "+ score )
  }
}


