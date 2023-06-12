function reg(pForm) {

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var user=JSON.parse(this.responseText)
var row="" ;

       console.log(Object.keys(user).length)
      
        for (var i = 0; i < Object.keys(user).length/8; i++){
            row += `<tr>
                            <td>${user.id}</td>
                            <td>${user.username}</td>
                            <td>${user.authorities[0].id}</td>
                      </tr>`
            


        }
       document.getElementById("demo").innerHTML=row;
    
       
    }
  };
xhttp.open("GET", "http://localhost:8070/Midtask_war_exploded/admin/user/admin/2", true);
  
  xhttp.send();

 
return false;
 };
 function doo(user) {
  const tosend=
  {

      id: user.id,
      username: user.username,
      gender: "MSA",
      email: user.email,
      dob: user.dob,
      phone: user.phone,
      password: user.password,
      authorities: user.authorities
      

  }
  var xhttp = new XMLHttpRequest();
  const js=JSON.stringify(tosend);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var user=JSON.parse(this.responseText)
       
     
    }
  };
  
  xhttp.open("POST", "http://localhost:8070/Midtask_war_exploded/admin/user/update");
  xhttp.setRequestHeader("Content-type", "application/json");
  
  xhttp.send(js);
  return user;
  
};

  

 



