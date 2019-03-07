jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  function valEmail($email)
  {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,8})?$/;
    //tbh I don't know what this says, but stackoverflow says it's correct
    return ( $email.length > 0 && emailReg.test($email));
  }
  function valCheck()
  {
    if (!$("#agreement").prop("checked"))
      {
        $("#submit").addClass('submitnotselected');
      }
    else
    {
      $("#submit").removeClass('submitnotselected');
    }
  }
  valCheck();
  $("#agreement").on("click", function () {
    valCheck();
    if ($("#agreement").prop("checked"))
      {
        $(".EULALabel").text("Agreed!");
      }
    else
      {
        $(".EULALabel").text("I Agree");
      }
  })
  $("#submit").on("click", function () {
    $("#myform").removeAttr("onsubmit");
    if ($("#agreement").prop("checked"))
      {
        if (valEmail($("#email").val()))
          {
            alert("Welcome to Slavery!");
          }
        else
          {
            alert("Please input valid Email address!");
            $("#myform").attr("onsubmit", "return false");
          }
      }
    else
      {
        alert("You have not Agreed to the EULA!");
        $("#myform").attr("onsubmit", "return false");
      }
  })
  $("#EULA").on("click", function () {
    alert("You, the user, get enslaved by us, the Company."); 
  })
});