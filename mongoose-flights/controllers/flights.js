const Flight = require('../models/flight');
const Ticket = require('../models/ticket');


function allFlights(req, res) {
    Flight.find({}, function (err, flights) {

        if (err) {
            return console.log(err);
        }
        res.render('flights/index', { title: 'All Flights', flights });
    })
};

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight' });
};

function create(req, res) {
    const flight = new Flight(req.body);
    console.log(flight);
    flight.save(function (err) {
        if (err) return res.redirect('/flights/new');
        res.redirect('/flights');
    });

};

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        Ticket.find({ flight: flight._id }, function (err, tickets) {
            res.render('flights/show', { title: 'Flight Detail', flight, tickets });
        });
    });
};


module.exports = {
    index: allFlights,
    new: newFlight,
    create,
    show
}