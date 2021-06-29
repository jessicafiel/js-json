var testeJson = {
    "uuid": "6bba01a5-f38a-43c9-8cfd-ab184f434a37",
    "name": "bootstrap",
    "version": "1",
    "description": [
        {
            "language": "en",
            "message": "Javascript bootloader"
        },
        {
            "language": "pt-BR",
            "message": "Carregador javascript"
        },
        {
            "language": "es",
            "message": "Carregador javascript"
        }
    ]
}
var showLanguage = function(json){
    //clique no botão : aparecer a mensagem
    if (json.language == "en") {
        var button1 = document.createElement("button");//createElement:cria um element
        button1.innerHTML = (json.language);
        var div = document.createElement("div");//criar a div, pois apos o clique aparecer o texto
        document.body.appendChild(button1);
        document.body.appendChild(div); // anexa o append, o ultimo..
        document.write("<br>");  //pular linha
        button1.addEventListener("click",function(evt){ // evt é o nome de uma variável, no caso não pode ser o json,addEventListener() registra uma única espera de evento em um único alvo 
            div.innerHTML = json.message; //innerhtml é usado para a mensagem aparecer na ela
      });
    }
    if(json.language == "pt-BR"){
        var button2 = document.createElement("button");
        button2.innerHTML = (json.language);
        var div2 = document.createElement("div");
        document.body.appendChild(button2);
        document.body.appendChild(div2);
        document.write("<br>");
        button2.addEventListener("click",function(evt){
            div2.innerHTML = json.message;
       });
    }
    if(json.language == "es"){
        var button3 = document.createElement("button");
        button3.innerHTML = (json.language);
        var div3 = document.createElement("div");
        document.body.appendChild(button3);
        document.body.appendChild(div3);
        document.write("<br>");
        button3.addEventListener("click",function(evt){
            div3.innerHTML = json.message;
         });
      }
} 

  for(var i in testeJson){
	console.log(i,testeJson[i]);//will print the entire test: id, name, version and description
    if( i == "description") {//the if will go through the entire description
	    console.log(testeJson[i]);//will print the 3 descriptions


         for(var d in testeJson[i]){ // the for is traversed within the entire function
             var x = showLanguage(testeJson[i][d]);
                //console.log(x);//here it will print all the descriptions inside the testJson
               
        }
	}
	
}





