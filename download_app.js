document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('downloadButton');
    downloadButton.addEventListener('click', function() {
      const downloadLink = document.createElement('a');
      downloadLink.href = 'https://github.com/symphonious/manylanguages/releases/download/streamlanguages-1-0-0/streamlanguages.zip'; 
      downloadLink.download = 'streamlanguages.zip'; 

      downloadLink.click();
      console.log("download");
      const websocketClient2 = new WebSocket("wss://symphonious.glitch.me/");
      websocketClient2.onopen = function(event) {
        websocketClient2.send("downloaded");  
      };
    });
});


