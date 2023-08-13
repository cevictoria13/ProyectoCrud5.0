function validateForm(){

    let name = document.getElementById('inputName').value;
    let email = document.getElementById('inputEmail').value;
    let phone =document.getElementById('inputPhone').value;
    
    
    if(name==""){
        alert('El nombre es requerido');
        return false;
    }
    
    if(email==""){
        alert('El email es requerido');
        return false;
    }else if(!email.includes("@")){
        alert('El email no es válido');
        return false;
    }
    
    if(phone==""){
        alert('El teléfono es requerido');
        return false;
    }
    return true;

}

function addData(){
    if(validateForm()==true){
        
    let name = document.getElementById('inputName').value;
    let email = document.getElementById('inputEmail').value;
    let phone =document.getElementById('inputPhone').value;

    let lista;

    if(localStorage.getItem('lista')==null){
        lista=[];
    }else{
        lista = JSON.parse(localStorage.getItem("lista"));
    }

    lista.push({
        name:name,
        email:email,        
        phone:phone,
    });

    localStorage.setItem('lista', JSON.stringify(lista));
    showData();

    document.getElementById('inputName').value="";
    document.getElementById('inputEmail').value="";
    document.getElementById('inputPhone').value="";

    }


function showData(){
    let lista;
    if(localStorage.getItem('lista')==null){
        lista=[];
    }else{
        lista = JSON.parse(localStorage.getItem("lista"));
    }
    let html="";
    lista.forEach(function(element, index){
        html += "<tr>";
        html += "<td>"+element.name+"</td>";
        html += "<td>"+element.email+"</td>";
        html += "<td>"+element.phone+"</td>";
        html += '<td><button onclick="deleteData('+ index +')" class="btn btn-primary">Eliminar</button> <button onclick="updateData('+index+')" class="btn btn-warning">Editar</button></td>';
        html += "</tr>";
    });
    document.querySelector('#tableData tbody').innerHTML = html;
}
document.onload = showData();
}


function deleteData(index){
    let lista;
    if(localStorage.getItem('lista')==null){
        lista=[];
    }else{
        lista = JSON.parse(localStorage.getItem("lista"));
    }
    lista.splice(index, 1);
    localStorage.setItem('lista',JSON.stringify(lista));
    showData();
}



function updateData(index){
    document.getElementById("btnAdd").style.display='none';
    document.getElementById("btnUpdate",btnAdd).style.display='block';

    let lista;

    if(localStorage.getItem('lista')==null){
        lista=[];
    }else{
        lista = JSON.parse(localStorage.getItem("lista"));
    }
   
    document.getElementById('inputName').value = lista[index].name;
    document.getElementById('inputEmail').value = lista[index].email;
    document.getElementById('inputPhone').value = lista[index].phone;
   
    document.querySelector("#btnUpdate").onclick=function(){
        if(validateForm()==true){
          
            lista[index].name =document.getElementById('inputName').value
            lista[index].email =document.getElementById('inputEmail').value
            lista[index].phone =document.getElementById('inputPhone').value

            localStorage.setItem('lista', JSON.stringify(lista));

        
            showData();
            document.getElementById('inputName').value="";
            document.getElementById('inputEmail').value="";
            document.getElementById('inputPhone').value="";

            document.getElementById("btnAdd").style.display='block';
            document.getElementById("btnUpdate",btnAdd).style.display='none';

        }
    };

}