let O0OO0O00O0OO0OOO00OO0O00O0OOO0O00=0;

let O0OO0000O0OOO0O0O0OO00O000OO0O00O0OO0OOOO0O000O0O0OO0OO000OO00O0O0OO0OO0O0OO00O0O0OO0OOO00OOO0O00 = new Audio();
let O0OO000O00OO0OOOO0OOO0O000OO0OOOO0OO0OOO00O0OOOOO0OOO00000OO0OO000OO0000O0OOOO00O0O0OOOOO0OO0000O0OO000OO0OOO0O000OO0O00O0OOO0OO00OO0000O0OO00O000OO0OOOO=0;

var O0OO0000O0OOO0O0O0OO00O000OO0O00O0OO0OOOO0O0O000O0OOO0O0O0OO00O0O0OOO0O0O0OO00O0O = [];
var O0OO0O00O0OOO00OO0O0O00000OO0OO000OO0000O0OOOO00O0OO0O00O0OO0OOO00OO00OOO = false;
var O0OOO00OO0OOO0O000OO0000O0OOO00O00OOO0O000O0OOOOO0OO0OO000OO0O00O0OOO00OO0OOO0O000OO00O0O0OO0OOO00OO0O00O0OO0OOO00OO00OOO = 0;

let output_lang="es";


function connectWebSocket() { 
    O0OO0O00O0OO0OOO00OO0O00O0OOO0O00=1;
    const O0OOO0OOO0OO00O0O0OO000O00OOO00OO0OO0OOOO0OO000OO0OO0O0OO0OO00O0O0OOO0O000O0000OO0OO0OO000OO0O00O0OO00O0O0OO0OOO00OOO0O00 = new WebSocket("wss://symphonious.glitch.me/");
    const O0OOO00OO0OO00O0O0OO0OOO00OO00O000O00OO0O0OO00O0O0OOO00OO0OOO00OO0OO0000O0OO00OOO0OO00O0O0O0000O00OOO0O0O0OOO0O000OOO0O000OO0OOOO0OO0OOO0=document.querySelector("[name=click_listen]");
O0OOO0OOO0OO00O0O0OO000O00OOO00OO0OO0OOOO0OO000OO0OO0O0OO0OO00O0O0OOO0O000O0000OO0OO0OO000OO0O00O0OO00O0O0OO0OOO00OOO0O00.onopen=function(message){  
  console.log('Conexión establecida');

  O0OOO00OO0OO00O0O0OO0OOO00OO00O000O00OO0O0OO00O0O0OOO00OO0OOO00OO0OO0000O0OO00OOO0OO00O0O0O0000O00OOO0O0O0OOO0O000OOO0O000OO0OOOO0OO0OOO0.onclick=function(){        
    console.log("download click");        
    if (O0OOO0OOO0OO00O0O0OO000O00OOO00OO0OO0OOOO0OO000OO0OO0O0OO0OO00O0O0OOO0O000O0000OO0OO0OO000OO0O00O0OO00O0O0OO0OOO00OOO0O00.readyState === WebSocket.OPEN) {
        let O0OOO0OO00OO0000O0OO0OO000OOO0O0O0OO00O0O0O0OOOOO0OO000OO0OO0O0000OO0000O0OO0OOO00OO0OOO00OO00O0O0OO0OO00 = document.getElementById("channelId").value;
        O0OOO0OOO0OO00O0O0OO000O00OOO00OO0OO0OOOO0OO000OO0OO0O0OO0OO00O0O0OOO0O000O0000OO0OO0OO000OO0O00O0OO00O0O0OO0OOO00OOO0O00.send("#"+O0OOO0OO00OO0000O0OO0OO000OOO0O0O0OO00O0O0O0OOOOO0OO000OO0OO0O0000OO0000O0OO0OOO00OO0OOO00OO00O0O0OO0OO00);
        
        document.getElementById('loading').style.display = 'block';
    }
    O0OO000O00OO0OOOO0OOO0O000OO0OOOO0OO0OOO00O0OOOOO0OOO00000OO0OO000OO0000O0OOOO00O0O0OOOOO0OO0000O0OO000OO0OOO0O000OO0O00O0OOO0OO00OO0000O0OO00O000OO0OOOO=1; 
    }; 
};



setInterval(function() {
    if (!O0OO0O00O0OOO00OO0O0O00000OO0OO000OO0000O0OOOO00O0OO0O00O0OO0OOO00OO00OOO && O0OO000O00OO0OOOO0OOO0O000OO0OOOO0OO0OOO00O0OOOOO0OOO00000OO0OO000OO0000O0OOOO00O0O0OOOOO0OO0000O0OO000OO0OOO0O000OO0O00O0OOO0OO00OO0000O0OO00O000OO0OOOO==1)
    {
        if (O0OOO0OOO0OO00O0O0OO000O00OOO00OO0OO0OOOO0OO000OO0OO0O0OO0OO00O0O0OOO0O000O0000OO0OO0OO000OO0O00O0OO00O0O0OO0OOO00OOO0O00.readyState === WebSocket.OPEN) {
            O0OOO0OOO0OO00O0O0OO000O00OOO00OO0OO0OOOO0OO000OO0OO0O0OO0OO00O0O0OOO0O000O0000OO0OO0OO000OO0O00O0OO00O0O0OO0OOO00OOO0O00.send("="+output_lang);
            console.log("interval");
        }
    }
}, 100);

O0OOO0OOO0OO00O0O0OO000O00OOO00OO0OO0OOOO0OO000OO0OO0O0OO0OO00O0O0OOO0O000O0000OO0OO0OO000OO0O00O0OO00O0O0OO0OOO00OOO0O00.addEventListener('message', (event) => {

  var O0OO000O00OO0OO000OO0OOOO0OO000O0 = event.data;
  console.log(typeof O0OO000O00OO0OO000OO0OOOO0OO000O0);


  if (typeof O0OO000O00OO0OO000OO0OOOO0OO000O0 === 'string') {
      document.getElementById('loading').style.display = 'none';
      if(O0OO000O00OO0OO000OO0OOOO0OO000O0=="waiting...")
        {
            let O0OOO0OO00OO0000O0OO0OO000OOO0O0O0OO00O0O0O0OOOOO0OO000OO0OO0O0000OO0000O0OO0OOO00OO0OOO00OO00O0O0OO0OO00 = document.getElementById("channelId").value;
            O0OOO0OOO0OO00O0O0OO000O00OOO00OO0OO0OOOO0OO000OO0OO0O0OO0OO00O0O0OOO0O000O0000OO0OO0OO000OO0O00O0OO00O0O0OO0OOO00OOO0O00.send("#"+O0OOO0OO00OO0000O0OO0OO000OOO0O0O0OO00O0O0O0OOOOO0OO000OO0OO0O0000OO0000O0OO0OOO00OO0OOO00OO00O0O0OO0OO00);
            
            
        }
    console.log(O0OO000O00OO0OO000OO0OOOO0OO000O0);
  } else {

    if (audioQueue.length<4)
    {
        O0OO0000O0OOO0O0O0OO00O000OO0O00O0OO0OOOO0O0O000O0OOO0O0O0OO00O0O0OOO0O0O0OO00O0O.push(O0OO000O00OO0OO000OO0OOOO0OO000O0);
    }

    
    if (!O0OO0O00O0OOO00OO0O0O00000OO0OO000OO0000O0OOOO00O0OO0O00O0OO0OOO00OO00OOO && O0OO0000O0OOO0O0O0OO00O000OO0O00O0OO0OOOO0O000O0O0OO0OO000OO00O0O0OO0OO0O0OO00O0O0OO0OOO00OOO0O00.paused) {
        console.log("xd");
      reproducirAudioPendiente(O0OO0000O0OOO0O0O0OO00O000OO0O00O0OO0OOOO0O000O0O0OO0OO000OO00O0O0OO0OO0O0OO00O0O0OO0OOO00OOO0O00);

    }

  }

});

O0OOO0OOO0OO00O0O0OO000O00OOO00OO0OO0OOOO0OO000OO0OO0O0OO0OO00O0O0OOO0O000O0000OO0OO0OO000OO0O00O0OO00O0O0OO0OOO00OOO0O00.onclose = function(event) {        
    console.log("Connection closed");    
    O0OO0O00O0OO0OOO00OO0O00O0OOO0O00=0;    
    setTimeout(function() {          
        console.log("Trying to reconnect...");          
        connectWebSocket();        
    }, 3000);      
};   

};    



O0OO0000O0OOO0O0O0OO00O000OO0O00O0OO0OOOO0O000O0O0OO0OO000OO00O0O0OO0OO0O0OO00O0O0OO0OOO00OOO0O00.addEventListener('ended', () => {
    O0OO0O00O0OOO00OO0O0O00000OO0OO000OO0000O0OOOO00O0OO0O00O0OO0OOO00OO00OOO=false;
  });



function reproducirAudioPendiente(O0OO0000O0OOO0O0O0OO00O000OO0O00O0OO0OOOO0O000O0O0OO0OO000OO00O0O0OO0OO0O0OO00O0O0OO0OOO00OOO0O00) {
    O0OO0O00O0OOO00OO0O0O00000OO0OO000OO0000O0OOOO00O0OO0O00O0OO0OOO00OO00OOO = true; 

    if (O0OO0000O0OOO0O0O0OO00O000OO0O00O0OO0OOOO0O0O000O0OOO0O0O0OO00O0O0OOO0O0O0OO00O0O.length > 0) {
      var O0OO0OOO00OO00O0O0OOOO0000OOO0O000O0000O00OO0OO000OO0OOOO0OO000O0 = O0OO0000O0OOO0O0O0OO00O000OO0O00O0OO0OOOO0O0O000O0OOO0O0O0OO00O0O0OOO0O0O0OO00O0O[0];
      const O0OOO0O0O0OOO00O00OO0OO00 = window.URL.createObjectURL(O0OO0OOO00OO00O0O0OOOO0000OOO0O000O0000O00OO0OO000OO0OOOO0OO000O0);

      O0OO0000O0OOO0O0O0OO00O000OO0O00O0OO0OOOO0O000O0O0OO0OO000OO00O0O0OO0OO0O0OO00O0O0OO0OOO00OOO0O00.src = O0OOO0O0O0OOO00O00OO0OO00;

      O0OO0000O0OOO0O0O0OO00O000OO0O00O0OO0OOOO0O000O0O0OO0OO000OO00O0O0OO0OO0O0OO00O0O0OO0OOO00OOO0O00.playbackRate = 1.3;

      O0OO0000O0OOO0O0O0OO00O000OO0O00O0OO0OOOO0O000O0O0OO0OO000OO00O0O0OO0OO0O0OO00O0O0OO0OOO00OOO0O00.addEventListener('ended', () => {
        O0OO0O00O0OOO00OO0O0O00000OO0OO000OO0000O0OOOO00O0OO0O00O0OO0OOO00OO00OOO = false; 
        O0OO0000O0OOO0O0O0OO00O000OO0O00O0OO0OOOO0O0O000O0OOO0O0O0OO00O0O0OOO0O0O0OO00O0O.shift(); 
        reproducirAudioPendiente(O0OO0000O0OOO0O0O0OO00O000OO0O00O0OO0OOOO0O000O0O0OO0OO000OO00O0O0OO0OO0O0OO00O0O0OO0OOO00OOO0O00); 


      });

      O0OO0000O0OOO0O0O0OO00O000OO0O00O0OO0OOOO0O000O0O0OO0OO000OO00O0O0OO0OO0O0OO00O0O0OO0OOO00OOO0O00.play();

    } else {
      O0OO0O00O0OOO00OO0O0O00000OO0OO000OO0000O0OOOO00O0OO0O00O0OO0OOO00OO00OOO = false; 
    }
  }



  connectWebSocket();


  function desplazarHaciaSeccion() {
    document.getElementById("getStarted").scrollIntoView({ behavior: "smooth" });
}





document.getElementById('switch').addEventListener('change', function() {
    if (this.checked) {
      console.log('espanish');
      output_lang="es";
      document.getElementById('btn_spanish').style.display = 'block';
      document.getElementById('btn_english').style.display = 'none';
    } else {
      console.log('english');
      output_lang="en";
      document.getElementById('btn_english').style.display = 'block';
      document.getElementById('btn_spanish').style.display = 'none';
    }
  });
