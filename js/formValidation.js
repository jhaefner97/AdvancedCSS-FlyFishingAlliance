(function() {
    'use strict';
    window.addEventListener('load', function() {
   // Get the forms we want to add validation styles to
   console.log("Verifying Form");
   var forms = document.getElementsByClassName('needs-validation');
   // Loop over them and prevent submission
   var validation = Array.prototype.filter.call(forms, function(form) {
     form.addEventListener('submit', function(event) {
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
    console.log("form Validated");
     }, false);
   });
    }, false);
  })();
  