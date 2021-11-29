var btn = document.querySelector("#btn");
var txtIn = document.querySelector("#txtInput");
var output = document.querySelector("#divOut");

var serverURL = "https://api.funtranslations.com/translate/dothraki.json";

function translateURL(text){
	return serverURL + "?" + "text=" + text; 
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


btn.addEventListener("click",function btnHandler(){
	fetch(translateURL(txtIn.value)).then(response => response.json()).then(json=>{
		divOut.innerText=json.contents.translated;
	}).catch(errorHandler);
});
