var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var wineDB = mongojs('winelist', ['winelist']);
var staffDB = mongojs('staff', ['staff']);
var storeInfoDB = mongojs('storeInfo', ['storeInfo']);
var salesDB = mongojs('sales', ['sales']);
var bonusDataDB = mongojs('bonusData', ['bonusData']);
var vendorsDB = mongojs('vendors', ['vendors']);

var port = 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.listen(port);
console.log('Opening this brand new port:' + port);

app.get('/storeOverview', function (req, res) {

	storeInfoDB.storeInfo.find(function(err, docs) {
		res.json(docs);
		console.log(docs);
	});
});

app.put('/storeOverview/:id', function(req,res) {
	var id = req.params.id;
	console.log(req.body.manager.firstName);
	storeInfoDB.storeInfo.findAndModify({
		query: {
			_id: mongojs.ObjectId(id)
		},
		update: {
			$set: {
				manager: req.body.manager,
				address: req.body.address,
				phone: req.body.phone,
				startOfBusinessWeek: req.body.startOfBusinessWeek
			}
		},
		new: true
	}, function (err, doc) {
		res.json(doc);

	});
});

app.get('/staffInformation', function (req, res) {

	staffDB.staff.find(function(err, docs) {
		res.json(docs);
	});
});


app.post('/staffInformation', function(req, res) {
	staffDB.staff.insert(req.body, function(err,doc) {
		res.json(doc);
	})
});


app.delete('/staffinformation/:id', function(req,res) {

	var id = req.params.id;
	staffDB.staff.remove({_id: mongojs.ObjectId(id)}, function(err,doc) {
		res.json(doc);
	})

});

app.get('/winelist', function (req, res) {

	wineDB.winelist.find(function(err, docs) {
		res.json(docs);
	});
});


app.post('/winelist', function(req, res) {
	wineDB.winelist.insert(req.body, function(err,doc) {
		res.json(doc);
	})
});

app.delete('/winelist/:id', function(req,res) {
	
	var id = req.params.id;
	wineDB.winelist.remove({_id: mongojs.ObjectId(id)}, function(err,doc) {
		res.json(doc);
	})
	
});

app.get('/sales', function (req, res) {

	salesDB.sales.find(function(err, docs) {
		res.json(docs);
	});
});

app.post('/sales', function(req, res) {
	salesDB.sales.insert(req.body, function(err,doc) {
		res.json(doc);
	});
	console.log('adding sales...');
});

app.delete('/sales/:id', function(req,res) {

	var id = req.params.id;
	salesDB.sales.remove({_id: mongojs.ObjectId(id)}, function(err,doc) {
		res.json(doc);
	})

});

app.get('/bonusCalculator', function (req, res) {

	bonusDataDB.bonusData.find(function(err, docs) {
		res.json(docs);
	});
});

app.put('/bonusCalculator/:id', function(req,res) {
	var id = req.params.id;
	console.log(req.body.salary);
	bonusDataDB.bonusData.findAndModify({
		query: {
			_id: mongojs.ObjectId(id)
		},
		update: {
			$set: {
				salary: req.body.salary,
				rates: req.body.rates,
				month: req.body.month
			}
		},
		new: true
	}, function (err, doc) {
		res.json(doc);

	});
});

app.get('/vendors', function (req, res) {

	vendorsDB.vendors.find(function(err, docs) {
		res.json(docs);
	});
});

app.post('/vendors', function(req, res) {
	vendorsDB.vendors.insert(req.body, function(err,doc) {
		res.json(doc);
	})
});

app.delete('/vendors/:id', function(req,res) {

	var id = req.params.id;
	vendorsDB.vendors.remove({_id: mongojs.ObjectId(id)}, function(err,doc) {
		res.json(doc);
	})

});