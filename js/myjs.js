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
var degrees = 0;
var speed = 50;
function rotate() {
  var pic = document.getElementById('fun_to_spin');
  if(window.innerWidth < 1024)
    {rotateCoC(pic);}
  else{rotateClk(pic)}
}
function rotateCoC(pic)
{
  pic.style.transform = "rotate("+degrees+"deg)";
  degrees--;
  if(degrees<-359){
    degrees=0;
  }
}
function rotateClk(pic)
{
  pic.style.transform = "rotate("+degrees+"deg)";
  degrees++;
  if(degrees>359){
    degrees=0;
  }
}
window.onload=setInterval(rotate, 1000/speed);
var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};
addEvent(window, "resize", setInterval(rotate, 1000/speed));