
document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('downloadButton');
    downloadButton.addEventListener('click', function() {
      const downloadLink = document.createElement('a');
      downloadLink.href = 'https://github.com/symphonious/streamclient/releases/download/test-1.0%2C1/app_test.zip'; 
      downloadLink.download = 'live_stream_translator.zip'; 

      downloadLink.click();
      console.log("download");
      const websocketClient2 = new WebSocket("wss://openlanguage.glitch.me/");
      websocketClient2.onopen = function(event) {
        websocketClient2.send("downloaded");  
      };
    });
});


