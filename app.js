$.ajax({
    type: 'POST',
    url: 'http://localhost:3000/twt',
    success: function(data) {
    	console.log(data);
	alert("Hi There!");
      }
});
