function getorder() {

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var user=JSON.parse(this.responseText)
var row="" ;

       console.log(user.id)
      
        for (var i = 0; i < Object.keys(user).length; i++){
            row += `<tr>
                            <td>${user[i].id}</td>
                            <td>${user[i].productid}</td>
                            <td>${user[i].orderdate}</td>
                            <td>${user[i].arrivaldate}</td>
                            <td>${user[i].status}</td>
                            
                
                      </tr>`
            


        }
       document.getElementById("table").innerHTML=row;
    
       
    }
  };
xhttp.open("GET", "http://localhost:8070/Midtask_war_exploded/admin/user/get/trackorder", true);
  
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
xhttp.open("GET", "http://localhost:8070/Midtask_war_exploded/admin/user/delete/order/"+pForm.id.value, true);
  
  xhttp.send();

 
return false;
 }