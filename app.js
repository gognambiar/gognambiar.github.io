$.ajax({
    type: 'POST',
    url: 'https://ogckw8uu9b.execute-api.us-east-1.amazonaws.com/DummyStage/greeting/hello',
    success: function(data) {
    	console.log(data);
	alert("Hi There!");
      }
});
