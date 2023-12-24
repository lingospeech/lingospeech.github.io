document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('downloadButton');
    downloadButton.addEventListener('click', function() {
      const downloadLink = document.createElement('a');
      downloadLink.href = 'https://github.com/symphonious/manylanguages/releases/download/streamlanguages-1-0-1/streamlanguages-win64.zip'; 
      downloadLink.download = 'streamlanguages-win64.zip'; 

      downloadLink.click();
      console.log("download");
      
    });
});


