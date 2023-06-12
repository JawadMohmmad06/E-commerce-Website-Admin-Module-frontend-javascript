function update() {

      
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var user=JSON.parse(this.responseText)
var row="" ;

       console.log(user.id)
      
        for (var i = 0; i < Object.keys(user).length; i++){
            row += `<tr>
                            <td>${user[i].year}</td>
                            <td>${user[i].sales}</td>
                           
                      </tr>`
            


        }
       document.getElementById("table").innerHTML=row;
    
       
    }
  };
  
xhttp.open("GET", "http://localhost:8070/Midtask_war_exploded/admin/user/bus/growth", true);
  
  xhttp.send();

return false;
  }
  function busadd(pFrom) {
console.log(pFrom.year.value)
  const tosend=
  {
      year: pFrom.year.value,
      sales: pFrom.sales.value
  }
  var xhttp = new XMLHttpRequest();
  const js=JSON.stringify(tosend);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 ) {
        
       document.getElementById("response").innerHTML="Added";
     
    }
  };
  
  xhttp.open("POST", "http://localhost:8070/Midtask_war_exploded/admin/user/bus/growth/create");
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(js);
  return false;
};
function delbuss(pFrom) {
console.log(pFrom.year1.value);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 ) {
        
       document.getElementById("response").innerHTML="Deleted";
     
    }
  };
  
  xhttp.open("GET", "http://localhost:8070/Midtask_war_exploded/admin/user/bus/growth/delate/"+pFrom.year1.value,true);
  xhttp.send();
  return false;
};

