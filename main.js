window.addEventListener("keydown", function(event) {
  console.log(event);
  if(event.which == 8 || event.keyCode == 8 || event.code == "Backspace" ){
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      return false
  }
}, false);

// document.addEventListener("input", function(event) {
//   console.log(event);
//   if(event.which == 8 || event.keyCode == 8 || event.code == "Backspace" ){
//       event.preventDefault();
//       event.stopPropagation();
//       event.stopImmediatePropagation();
//       return false
//   }
// });



