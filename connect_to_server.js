const imgAreaGenerated = document.querySelector('.img-area-generated');
let init=0;

function connectWebSocket() {

  const websocketClient=new WebSocket("wss://symphonious.glitch.me/");
  
  const sendPrompt=document.querySelector(".generate-image");
  const sendRequest=document.querySelector(".send-request");
  
  websocketClient.onopen=function(message){
  console.log("client connected");
  
  sendPrompt.onclick=function(){
    var input = document.getElementById("promptInputId").value;
    var checkmessagepage2 = document.getElementById("check-message-page2");
    var imageMessage = document.getElementById("image-message");
      if (input.length<5)
      {
          checkmessagepage2.textContent = "Description too short";
      }else{
        checkmessagepage2.textContent = "";
        imgAreaGenerated.style.display = "flex";

        document.getElementById('promptInputId').value='';
        console.log("send: "+input);
        websocketClient.send("x"+input);
        document.getElementById("generate-image").disabled = true;

        if (init!=0) {
          img.remove();
        }
        init=1;
      }
  };


  sendRequest.onclick=function(){
    console.log("request");
    var input_username = document.getElementById("request-affiliation").value;
    if (input_username.length!=0)
      {
        document.getElementById('request-affiliation').value='';
        console.log("twitter: "+input_username);
        websocketClient.send("twitter: "+input_username);
        document.getElementById("request-affiliation").disabled = true;
      
      }
  };


  
  websocketClient.addEventListener('message', (event) => {

    var imageMessage = document.getElementById("image-message");
    const checkMessagePage2 = document.getElementById("check-message-page2");

    document.getElementById("generate-image").disabled = false;
    console.log(event.data);
    if (event.data=="400") {
      console.log("rejected request");
      imageMessage.textContent = "rejected request";
    } 
    if (event.data=="limit") {
      imageMessage.textContent = "request limit exceeded";
      checkMessagePage2.textContent="request limit exceeded";
    } 
    if (event.data!="waiting..." && event.data!="400" && event.data!="limit") {
      console.log(event.data);
      const img = document.createElement('img');
          img.src = event.data;
          imgAreaGenerated.appendChild(img);
          imgAreaGenerated.classList.add('active');
    }

    if (event.data=="request_received") {
      document.getElementById("request-affiliation").value="";
      document.getElementById("request-affiliation").disabled = false;
    } 

  
  });
  
  };
  
  websocketClient.onclose = function(event) {
      console.log("Connection closed");
      setTimeout(function() {
        console.log("Reconnecting");
        connectWebSocket();
      }, 3000);
    };
  
  }
  
  connectWebSocket();