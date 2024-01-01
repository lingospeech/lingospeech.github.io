
const url = 'http://symphonious.glitch.me/webping';
const data = {
  key1: 'value1',
  key2: 'value2'
};

document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('downloadButton');
    downloadButton.addEventListener('click', function() {
      const downloadLink = document.createElement('a');
      downloadLink.href = 'https://github.com/symphonious/manylanguages/releases/download/streamlanguages-2-0-0/streamlanguages-win64-2-0-0.zip';
      downloadLink.download = 'streamlanguages-win64.zip'; 

      downloadLink.click();
      console.log("download");
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data), 
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json(); 
        })
        .then(data => {
          console.log('response:', data);
        })
        .catch(error => {
          console.error('Error request:', error);
        });


        
      
    });
});


