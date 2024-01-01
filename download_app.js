
document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('downloadButton');
    downloadButton.addEventListener('click', function() {
      const downloadLink = document.createElement('a');
      downloadLink.href = 'https://github.com/symphonious/manylanguages/releases/download/streamlanguages-2-0-0/streamlanguages-win64-2-0-0.zip';
      downloadLink.download = 'streamlanguages-win64.zip'; 

      downloadLink.click();
      console.log("download");
      
      
      fetch('https://symphonious.glitch.me/webping', { method: 'GET' });


        
      
    });
});


