
//Calculation functions//

function krediHesapla()
{   
    
    var cekilecekTutar,vadeSayisi;
    var aylikTaksit,odenecekToplamTutar;

    cekilecekTutar=document.getElementById("txtKrediTutari").value;

    var liste= document.getElementById("listeVade");
    vadeSayisi=liste.options[liste.selectedIndex].value;

    if(vadeSayisi==12)
    {
        odenecekToplamTutar=cekilecekTutar*1.1;
    }
    else if(vadeSayisi==24)
    {
        odenecekToplamTutar=cekilecekTutar*1.2;
    }
    else if(vadeSayisi==36)
    {
        odenecekToplamTutar=cekilecekTutar*1.3;
    }
    else if(vadeSayisi==48)
    {
        odenecekToplamTutar=cekilecekTutar*1.4;
    }
    aylikTaksit=odenecekToplamTutar/vadeSayisi;

    document.querySelector("#result").innerHTML="Refund total: "+odenecekToplamTutar+"<br>"+
    "Your monthly installment amount : "+aylikTaksit.toFixed(2);


}



            //MONEY SOUND EFFECT //

           var myAudio=new Audio;
          function playAudio(){
            alert("Your transaction is successful");
            alert("$");

            myAudio.src="audio/b.mp3";
            myAudio.autoplay=true;
            myAudio.loop=true;
            }