jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  function valEmail($email)
  {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,8})?$/;
    //tbh I don't know what this says, but stackoverflow says it's correct
    return ( $email.length > 0 && emailReg.test($email));
  }
  $("#submit").on("click", function () {
    if ($("#agreement").prop("checked"))
      {
        if (valEmail($("#email").val()))
          {
            alert("Welcome to Slavery!");
          }
        else
          {
            alert("Please input valid Email address!");
          }
      }
    else
      {
        alert("You have not Agreed to the EULA!");
      }
  })
});