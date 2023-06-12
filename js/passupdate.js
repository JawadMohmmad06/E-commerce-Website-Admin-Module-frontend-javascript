
  function profileupdate(pForm) {

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var user=JSON.parse(this.responseText)
        if(pForm.ppass.value!= pForm.cpass.value)
        {
          document.getElementById("response").innerHTML = "Password Mitchmacthed";
        }
       
        else
        {
        profileupdateppost(user);
        
        
           document.getElementById("response").innerHTML = "Password Update DOne";
        }
    
    }
  };
xhttp.open("GET", "http://localhost:8070/Midtask_war_exploded/admin/user/admin/5", true);
  
  xhttp.send();

 
return false;
 };

function profileupdateppost(user) {

  const tosend=
  {

      id: user.id,
      username:user.username,
      gender: user.gender,
      email: user.email,
      dob: user.dob,
      phone: user.phone,
      password: document.getElementById("cpass").value,
      authorities: user.authorities
      

  }
  var xhttp = new XMLHttpRequest();
  const js=JSON.stringify(tosend);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
       
     
    }
  };
  
  xhttp.open("POST", "http://localhost:8070/Midtask_war_exploded/admin/user/updatepassword");
  xhttp.setRequestHeader("Content-type", "application/json");
  
  xhttp.send(js);

  
};