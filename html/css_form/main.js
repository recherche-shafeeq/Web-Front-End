//making form and displaying it as alert message
var form = document.querySelector('form');
form.addEventListener('submit',submitFun);

function submitFun(e) {
	e.preventDefault(); 
	var nameValue = document.getElementById('name');
    var fnameValue = document.getElementById('fname');
    var addressValue = document.getElementById('address');
	console.log(nameValue.value);
	console.log(fnameValue.value);
    console.log(addressValue.value);
	if(confirm("Name: "+nameValue.value+" ,Father Name: "+fnameValue.value+" ,Address: "+ addressValue.value)){
		
	}
   	console.log(e.type);
}