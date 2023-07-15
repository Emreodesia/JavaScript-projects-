

    //Payment section
function wage(){
  var average ,money;
 
  s1 = parseFloat(document.getElementById('m').value);
        var average=s1*3;

            if(average<=0 )
            {
                alert('Eror');
                money="$";
            }
            if(average<=30)
            {
              alert('HAVE A NICE DAY');
              money='$';

            }
            if(average<=900)
            {
                alert('Have a nice day');
                money='$';

            }

            
    document.getElementById('txtaverage').value=average+money;
    
    ;}

            //Door opening
    function changeScr() {
        document.getElementById("myImageId").src="doc/1.jpg";
      }

    
