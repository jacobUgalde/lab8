exports.addRSVP = function(req, res){
	var rsvpEmail = req.body.rsvpEmail;
	//this will print in your terminal when a POST is made
	console.log(rsvpEmail);

	data.rsvp.push(rsvpEmail); //add to current data

	//let's send our task name back so our browser knows it worked out!
	res.send(rsvpEmail);
}