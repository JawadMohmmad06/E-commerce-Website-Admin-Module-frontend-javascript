function getseller() {

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var user=JSON.parse(this.responseText)
var row="" ;

       console.log(user.id)
      
        for (var i = 0; i < Object.keys(user).length; i++){
            row += `<tr>
                            <td>${user[i].id}</td>
                            <td>${user[i].uname}</td>
                            <td>${user[i].dob}</td>
                            <td>${user[i].gender}</td>
                            <td>${user[i].email}</td>
                            <td>${user[i].varify}</td>
                      </tr>`
            


        }
       document.getElementById("table").innerHTML=row;
    
       
    }
  };
xhttp.open("GET", "http://localhost:8070/Midtask_war_exploded/admin/user/seller/varify", true);
  
  xhttp.send();

 
return false;
 };
 function varify(pForm) {

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var user=JSON.parse(this.responseText)
        console.log(pForm.id.value+"vfsg")
        profileupdateppost(user);
        
        
           document.getElementById("response").innerHTML = "Update DOne";
        
    
    }
  };
xhttp.open("GET", "http://localhost:8070/Midtask_war_exploded/admin/user/seller/varify/"+pForm.id.value, true);
  
  xhttp.send();

 
return false;
 };

function profileupdateppost(user) {

  const tosend=
  {

      id: user.id,
      uname:user.uname,
      email:user.email,
      gender: user.gender,
      dob: user.dob,
      phone: user.phone,
      passwordd: user.passwordd,
      varify: true,
      confirm_password: user.confirm_password,
      

  }
  console.log(tosend.varify);
  var xhttp = new XMLHttpRequest();
  const js=JSON.stringify(tosend);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
        
       
     
    }
  };
  
  xhttp.open("POST", "http://localhost:8070/Midtask_war_exploded/admin/user/seller/varify/update");
  xhttp.setRequestHeader("Content-type", "application/json");
  
  xhttp.send(js);

  
};