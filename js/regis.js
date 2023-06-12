function reg(pForm) {

const tosend=
  {
      username: pForm.username.value,
      gender: pForm.gender.value,
      email: pForm.email.value,
      dob: pForm.dob.value,
      phone: pForm.phone.value,
      password: pForm.password.value,
      authorities: [{
        id:2
      } 
      ]

  }

      const js=JSON.stringify(tosend);
  
  const xhttp = new XMLHttpRequest();
   xhttp.onload = function() {
    if(this.responseText!=null)
{
    document.getElementById("response").innerHTML = "Registration DOne";}
    else
    {
      document.getElementById("response").innerHTML = "Error";
    }
  };
  
  xhttp.open("POST", "http://localhost:8070/Midtask_war_exploded/admin/user/regis",true);
  xhttp.setRequestHeader("Content-type", "application/json");
  
  xhttp.send(js);

  return false;

  };



