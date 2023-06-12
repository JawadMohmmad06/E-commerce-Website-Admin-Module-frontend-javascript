function update() {

      
  
  const xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var user=JSON.parse(this.responseText);
    console.log(user.password);
     document.getElementById("username").value = user.username;
    
      document.getElementById("phone").value= user.phone;

     document.getElementById("email").value= user.email;
  }}
  
  xhttp.open("GET", "http://localhost:8070/Midtask_war_exploded/admin/user/admin/2", true);
  
  xhttp.send();

return false;
  }



  function profileupdate(pForm) {

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var user=JSON.parse(this.responseText)
        profileupdateppost(user);
        
        
           document.getElementById("response").innerHTML = "Update DOne";
        
    
    }
  };
xhttp.open("GET", "http://localhost:8070/Midtask_war_exploded/admin/user/admin/2", true);
  
  xhttp.send();

 
return false;
 };

function profileupdateppost(user) {

  const tosend=
  {

      id: user.id,
      username:document.getElementById("username").value,
      gender: user.gender,
      email: document.getElementById("email").value,
      dob: user.dob,
      phone: document.getElementById("phone").value,
      password: user.password,
      authorities: user.authorities
      

  }
  var xhttp = new XMLHttpRequest();
  const js=JSON.stringify(tosend);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
       
     
    }
  };
  
  xhttp.open("POST", "http://localhost:8070/Midtask_war_exploded/admin/user/update");
  xhttp.setRequestHeader("Content-type", "application/json");
  
  xhttp.send(js);

  
};

