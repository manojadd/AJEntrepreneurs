const db = require('./src/connections/dbconnect');

const Events = require('./src/model/event.schema');

let event = new Events({
    name: 'aa',
    description: 'a',
    g_placeId: 'a',
    d_date: '2017-06-23T18:30:00.000Z',
    d_time: '2017-06-02T13:53:42.383Z',
    a_date: '2017-06-24T18:30:00.000Z',
    a_time: '2017-06-02T13:53:55.253Z',
    e_type: 'night',
    limit: 22,
    price_head: 22
    
});

event.save(function(err, results) {
    console.log('saved', results);
});

