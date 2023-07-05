
//calculate code
function calculate(){
    
    var average, letternote;
    s1 = parseFloat(document.getElementById('exam1').value);
    s2 = parseFloat(document.getElementById('exam2').value);
    s3 = parseFloat(document.getElementById('exam3').value);
    average=(s1+s2+s3)/3.0;

    if (average>=85 && average<=100)
        letternote='AA';
    else if (average>=70 && average<85)
        letternote='BB';
    else if (average>=55 && average<70)
        letternote='CC';
    else if (average>=45 && average<55)
        letternote='DD';
    else if (average>=0 && average<45)
        letternote='EE';
        
    document.getElementById('txtaverage').value=average+letternote;
    //document.getElementById('txtharf').value=harfnot;
}
//calculate code -end-



//Reset button
function checkForm(){
 alert("The form will be cleared");
 document.forms[0].reset();
}
 //Reset button -end-

