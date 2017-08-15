$(document).ready(function(){
  var userStress =[];
  var userSymptoms =[];
  var userSolution =[];
  $("form#stress-quiz").submit(function(event){
    event.preventDefault();
     //$("#re-stress").show();

     $("input:checkbox[name=stress]:checked").each(function(){
       userStress.push($(this).val());
      $('#re-stress').text(userStress);
     });

     //$("#re-symptoms").show();

     $("input:checkbox[name=symptoms]:checked").each(function(){
       userSymptoms.push($(this).val());

       $('#re-symptoms').text(userSymptoms);
     });

     //$("#re-solution").show();

     $("input:checkbox[name=solution]:checked").each(function(){
       userSolution.push($(this).val());
       $('#re-solution').text(userSolution);

     });
     function recommend(stress,symptom,solution){
         if((stress.length > 1) && (solution.length <1)){
           alert("Try some stress reduction techniques");
         };
         if((symptom.length > 1) && (solution.length <1)){
           alert("Try some stress reduction techniques and seek a doctor")
         };
         if((stress.length < 2) && (symptom.length < 2)){
           alert("You're doing fine");
         };
         if((symptom.length > 1) && (solution.length <1) && (stress.length > 1)){
           alert("Seek medical attention!")
         };
         if((solution.length > 1)){
           alert("Keep up the stress reduction techniques");
         };
     };
     recommend(userStress,userSymptoms,userSolution);
    // $('#transportation_survey').hide();
  });

});
