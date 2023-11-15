 alert("Lütfen Kutuya bir değer giriniz");

//Veri Girişi 


  var mesaj = document.getElementById("mesaj");
  var karakter = document.getElementById("karakter");

  var karakterSiniri = 140;

  mesaj.onkeyup = karakterKontrol;
  mesaj.onkeydown = karakterKontrol;


//Karakter Kontrol

function karakterKontrol() {
    var mesajUzunluk = this.value.length;

    if (karakterSiniri >= mesajUzunluk) {
      var kalan = karakterSiniri - mesajUzunluk;
      karakter.innerHTML = kalan + " karakter kaldı";

    } else {
      this.value = this.value.substr(0, karakterSiniri);
    }
  }
  