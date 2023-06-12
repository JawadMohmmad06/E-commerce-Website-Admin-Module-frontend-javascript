function getscustomer() {

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var user=JSON.parse(this.responseText)
var row="" ;

       console.log(user.id)
      
        for (var i = 0; i < Object.keys(user).length; i++){
            row += `<tr>
                            <td>${user[i].id}</td>
                            <td>${user[i].username}</td>
                            <td>${user[i].firstnamename}</td>
                            <td>${user[i].lastname}</td>
                            <td>${user[i].gender}</td>
                            <td>${user[i].dob}</td>
                
                      </tr>`
            


        }
       document.getElementById("table").innerHTML=row;
    
       
    }
  };
xhttp.open("GET", "http://localhost:8070/Midtask_war_exploded/admin/user/get/customer", true);
  
  xhttp.send();

 
return false;
 };
 function deletet(pForm) {

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
    
        
        
           document.getElementById("response").innerHTML = "Delete DOne";
        
    
    }
  };
xhttp.open("GET", "http://localhost:8070/Midtask_war_exploded/admin/user/delete/customer/"+pForm.id.value, true);
  
  xhttp.send();

 
return false;
 }