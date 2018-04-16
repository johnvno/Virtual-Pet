$(function() {
  
    checkAndUpdatePetInfoInHtml();
  
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.reset-button').click(clickedResetButton);
    
  })
  
    var pet_info = {name:"Virtpet", happiness:0, weight:10, age:0, status:"Your pet is ready to go."};
  
    function clickedTreatButton() {
      pet_info.happiness += 2;
      pet_info.weight += 3;
      pet_info.age += 1;
      pet_info.status = "Your pet loved that, but it's looking a bit heavier.";
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      pet_info.happiness += 1;
      pet_info.weight -= 1;
      pet_info.age += 1;
      pet_info.status = "Your pet liked that, and it looks a bit lighter.";
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      pet_info.happiness -= 2;
      pet_info.weight -=5;
      pet_info.age += 1;
      pet_info.status = "Your pet didn't like that very much, but it looks a lot lighter.";
      checkAndUpdatePetInfoInHtml();
    }
  
    function clickedResetButton() {
      restartPet();
      pet_info.status = "Your new pet is ready to go.";
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
  
    function restartPet() {
      pet_info.happiness = 0;
      pet_info.weight = 10;
      pet_info.age = 0;
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      if(pet_info.weight < 1){
        pet_info.status = "Your pet has died of malnutrition. Your new pet is ready to go.";
        restartPet();
      } else if(pet_info.weight > 20){
        pet_info.status = "Your pet has died of weight complications. Your new pet is ready to go.";
        restartPet();
      } else if(pet_info.happiness < -5){
        pet_info.status = "Your pet has run away. Your new pet is ready to go.";
        restartPet();
      } else if(pet_info.age > 20){
        if(pet_info.happiness > 20){
          pet_info.status = "Your pet has died peacefully of old age. Your new pet is ready to go. Inspired by your old pet, it is already quite happy.";
          restartPet();
          pet_info.happiness += 10;
        } else {
          pet_info.status = "Your pet has died peacefully of old age. Your new pet is ready to go.";
          restartPet();
        }
      }
    }
    
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.age').text(pet_info['age']);
      $('.status').text(pet_info['status']);
    }
  