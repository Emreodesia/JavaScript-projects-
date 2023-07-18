//Body mass calculater function 
    function vkCalcu(){
        var average ,mo; //mo body type
       
        s1 = parseFloat(document.getElementById('m1').value);
        s2 = parseFloat(document.getElementById('m2').value);

              var average=s1/(s2*s2); // s1 =weight s2= height 
      
                  if(average<=0 )
                  {
                      alert('Eror');
                      mo='Eror';
                  }
                  else if (average >=1 && average <=8)
                  {
                     mo='You are very weak';
                  }
                  else if (average >=9 && average<=12)
                  {
                     mo='Aesthetic body';
                  }
                  else if (average >=12 && average <=18)
                  {
                    mo='Athletic body';
                  }
                  else if (average >=18 && average <=28 )
                  {
                    mo='Your weight is normal ';
                  }
                  else if (average >=28 && average <=35)
                  {
                    mo='Unhealthyl';
                  }
                  else if (average >= 35 && average<= 45)
                  {
                    mo='Extremely unhealthy';
                  }
                  





               
                  //Btn 1 &2
          document.getElementById('txtaverage').value=average;
          document.getElementById('txtm').value=mo;
          
          ;}