document.getElementById('username').addEventListener('change', function() {
	var url = 'http://nodejs-mongodb-example-fit-zoom.0ec9.hackathon.openshiftapps.com/fitness?';
	document.getElementById('enter').href = url + document.getElementById('username').value;
});