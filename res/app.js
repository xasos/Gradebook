var grade1, grade2, finalGrade, semesterGrade, calculatedGrade;
    
// This will listen for a device shake and call the clear function
window.addEventListener('shake', shakeEventDidOccur, false);  
function shakeEventDidOccur () {
    reset();
}
    //hide clear button until grade is calculated
    $("#clearButton").hide();
      
    function calcGrade() {
      grade1 = $('#box1').val();
      grade2 = $('#box2').val();
      finalGrade = $('#box3').val();
      semesterGrade = $('#box4').val();
        
      if($("#finGr").is(':checked')) {
        calcFinalGrade();
      }
                  
      else if($("#semGr").is(':checked')) {
        calcSemesterGrade();
      }
          
      else {
        alert("Please select the type of grade you want to check.");
      }
    }
      
      function calcSemesterGrade() {
          $("clearButton").show();
          calculatedGrade = 0.4*(grade1) + 0.4*(grade2) + 0.2*(finalGrade);
          $('#box4').val(calculatedGrade);
      }
        
      function calcFinalGrade() {
          $("clearButton").show();
          calculatedGrade = 5*(semesterGrade - 0.4*(grade1) - 0.4*(grade2));
          
          if(calculatedGrade<0 || calculatedGrade > 100) {
            alert("The situation is not possible. Please try again.");
            reset();
          } 
          else {
            $('#box3').val(calculatedGrade);
          }
      }
      
//reset all variables when user clears
function reset() {
    grade1 = 0;
    grade2 = 0;
    finalGrade = 0;
    semesterGrade = 0;
    calculatedGrade = 0;
   
    $('#box1').val("");
    $('#box2').val("");
    $('#box3').val("");
    $('#box4').val("");
    $("#clearButton").hide();
}
