
$(document).ready(function() {
  // --- our code goes here ---
  console.log("JQuery ready!");

  $('textarea').keyup(function() {
    const theCounter = $(this).val().length;
    const value = 140 - theCounter;

    $(this).parent().find('.counter').text(value);
    const redWord = document.querySelector(".counter");
    if (value < 0) {
      redWord.style.color = "red";
    }
    else{
      redWord.style.color = "black";
    }
  });

});

