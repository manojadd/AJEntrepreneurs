let express = require('express');
let router = express.Router();
let db = require('../connections/dbconnect');
const Events = require('../model/event.schema');
const util = require('../utility/utility');
router.post('/events', function(req, res) {

    console.log('Got the event add request', req.body);
    let namesOb = {
        e_name: "name",
        e_desc: "description",
        e_placeId: "g_placeId",
        e_picUrl: "photo",
        e_dDate: "d_date",
        e_dTime: "d_time",
        e_rDate: "a_date",
        e_rTime: "a_time",
        e_type: "e_type",
        e_limit: "limit",
        e_price: "price_head"
    }
    let event_data = util.convertNames(namesOb, req.body);
    event_data['limit'] = parseInt(event_data['limit']);
    event_data['price_head'] = parseInt(event_data['price_head']);
    let event = new Events(event_data);
    Events.find({ name: event_data.name }, function(err, docs) {
        console.log("docs of finding", docs);

        if (docs == null || err) {
            console.log('mongoose returning null or error');
            return res.send({ status: false, result: 'Couldn\'t add Event', data: req.body })

        } else if (docs.length == 0) {
            event.save((err, result) => {
                if (err) {
                    return res.send({ status: false, result: event_data.name + ': Couldn\'t add Event', data: req.body })
                }
                return res.send({ status: true, result: event_data.name + ': Event added', data: req.body });
            });
        } else {
            return res.send({ status: false, result: event_data.name + ': Already Present', data: req.body });
        }
    });

})

//to get all events.
router.get('/events', function(req, res) {
    console.log('Got the event get request', req.body);
    Events.find({}, (err, docs) => {
        if (err || docs == null) {
            console.log('mongoose returning null or error');
            return res.send({ status: false, result: 'Couldn\'t fetch events', data: {} })

        } else if (docs.length == 0) {
            return res.send({ status: false, result: 'No Events', data: {} })
        } else {
            let namesOb = {
                name: "e_name",
                description: "e_desc",
                g_placeId: "e_placeId",
                photo: "e_picUrl",
                d_date: "e_dDate",
                d_time: "e_dTime",
                a_date: "e_rDate",
                a_time: "e_rTime",
                e_type: "e_type",
                limit: "e_limit",
                price_head: "e_price"
            }	
            console.log('fetched docs', docs);
            let convertNames = util.convertNames.bind(null,namesOb);
            docs = docs.map(convertNames);
            console.log('resulting docs', docs);
            return res.send({ status: true, result: 'Events found', data: docs});
        }
    });

});

module.exports = router;
