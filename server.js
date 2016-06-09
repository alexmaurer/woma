var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var wineDB = mongojs('winelist', ['winelist']);
var staffDB = mongojs('staff', ['staff']);

var port = 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.listen(port);
console.log('Opening this brand new port:' + port);

app.get('/staffInformation', function (req, res) {

	staffDB.staff.find(function(err, docs) {
		res.json(docs);
	});
});

app.get('/winelist', function (req, res) {

	wineDB.winelist.find(function(err, docs) {
		res.json(docs);
	});
});

app.post('/staffInformation', function(req, res) {
	staffDB.staff.insert(req.body, function(err,doc) {
		res.json(doc);
	})
});


app.post('/winelist', function(req, res) {
	wineDB.winelist.insert(req.body, function(err,doc) {
		res.json(doc);
	})
});

app.delete('/staffinformation/:id', function(req,res) {

	var id = req.params.id;
	staffDB.staff.remove({_id: mongojs.ObjectId(id)}, function(err,doc) {
		res.json(doc);
	})

});

app.delete('/winelist/:id', function(req,res) {
	
	var id = req.params.id;
	wineDB.winelist.remove({_id: mongojs.ObjectId(id)}, function(err,doc) {
		res.json(doc);
	})
	
});