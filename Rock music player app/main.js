

alert("Welcome my page");
//Play and Pause buton
var myAudio =new Audio();
  function playAudio(){
    alert("The audio will start playing now.")
    myAudio.src='audio.mp3';
    myAudio.autoplay=true;
    myAudio.loop=true;
  }

  function pauseAudio(){
    alert("Now the audio will pause")
    myAudio.pause();
  }
//Play and Pause buton



