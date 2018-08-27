export default function () {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
  var Flights = [{
      id: 1,
      from: 'BOM',
      to: 'BLR',
      airline: 'Jet Airways',
      departure: '21:45',
      arrive: '23:35',
      duration: '	1h 50m',
      price: '2318'
    }, {
      id: 2,
      from: 'BOM',
      to: 'BLR',
      airline: 'GoAir',
      departure: '22:40',
      arrive: '00:35',
      duration: '	1h 55m',
      price: '2618'

    }, {
      id: 3,
      from: 'DEL',
      to: 'PUN',
      airline: 'Air India',
      departure: '04:55',
      arrive: '07:05',
      duration: '	2h 10m',
      price: '2498'

    }, {
      id: 4,
      from: 'DEL',
      to: 'PUN',
      airline: 'IndiGo',
      departure: '17:45',
      arrive: '20:00',
      duration: '	2h 15m',
      price: '4438'
    }


  ];


  this.namespace = 'api';
  this.get('/airports', () => {
    return {
      airports: [{
        id: 1,
        name: 'BOM'
      }, {
        id: 2,
        name: 'DEL'
      }, {
        id: 3,
        name: 'BLR'
      }, {
        id: 4,
        name: 'PUN'
      }]
    };
  });
  this.get('/flights', () => {
    return {
      flights: Flights
    }
  });

  this.get('/flights/:id', (schema, request) => {
    return {
      flights: Flights.filter((item) => {
        return item.id == request.params.id;
      })
    }
  });

  this.post('/token', (schema, request) => {
    var splitReq = request.requestBody.split('=');
    var user = splitReq[2].split('&')[0];
    var password = splitReq[3];
    var data = null;
    if (user == "admin" && password == "123456") {
      data = {
        "access_token": true,
        "name": user,
        "user_id": user,
      }
      
    }
    else{
      data={errors: ['there was an error']}, 404;
    }
    
    return data;
  })

}
