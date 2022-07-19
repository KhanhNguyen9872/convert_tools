function createFileFromHex(cleaned_hex, filename) {
      if (cleaned_hex.length % 2) {
        alert ("Error: cleaned hex string length is odd.");     
        return;
      }

      var binary = new Array();
      for (var i=0; i<cleaned_hex.length/2; i++) {
        var h = cleaned_hex.substr(i*2, 2);
        binary[i] = parseInt(h,16);        
      }

		var byteArray = new Uint8Array(binary);
		var a = window.document.createElement('a');

		a.href = window.URL.createObjectURL(new Blob([byteArray], { type: 'application/octet-stream' }));
		a.download = filename;

		// Append anchor to body.
		document.body.appendChild(a)
		a.click();

		// Remove anchor from body
		document.body.removeChild(a)        
}
