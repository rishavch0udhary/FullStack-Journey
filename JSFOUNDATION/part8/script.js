// example 1

document.getElementById("changeTextButton").addEventListener("click", function() {
  let paragraph = document.getElementById("myParagraph");
paragraph.textContent = "The paragraph is changed";
  
});

// example 2

document.getElementById("highlightFirstCity").addEventListener('click', function(){
  let hold = document.getElementById("citiesList");
  console.log(hold);
  
})

