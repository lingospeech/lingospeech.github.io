function connectWebSocketDownload() {

    const websocketClient2 = new WebSocket("wss://symphonious.glitch.me/");
  
    websocketClient2.onopen = function(event) {
      websocketClient2.send("refresh");  
    };
  
    websocketClient2.addEventListener('close', (event) => {
        if (event.wasClean) {
          console.log('connection closed correctly');
        } else {
          console.log('server disconnected');
          connectWebSocketDownload();
        }
        console.log(`code error: ${event.code}, reason: ${event.reason}`);
      });
      websocketClient2.addEventListener('error', (error) => {
        console.error('Error connection:', error);
      });
  }
  
  connectWebSocketDownload();
  
