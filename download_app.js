
document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('downloadButton');
    downloadButton.addEventListener('click', function() {
      const downloadLink = document.createElement('a');
      downloadLink.href = 'https://github.com/symphonious/streamclient/releases/download/1-0-1/streamtranslator-win-x64.zip'; 
      downloadLink.download = 'streamtranslator-win64.zip'; 

      downloadLink.click();
      console.log("download");
      const websocketClient2 = new WebSocket("wss://symphonious.glitch.me/");
      websocketClient2.onopen = function(event) {
        websocketClient2.send("downloaded");  
      };
    });
});


