const db = require('./server/db/_db');
const Aircraft = require('./server/db/models/aircraft');
const Country = require('./server/db/models/country');

const aircrafts = [
  {
    make: 'First Plane',
    model: 'Model 1',
    year: '2000',
    type: 'Attack',
    cost: '1',
    imageUrl: 'http://i2.cdn.turner.com/money/dam/assets/171128150757-siemens-airbus-electric-plane-1024x576.jpg',
    description: 'The air without is impregnated with raindew moisture, life essence celestial, glistening on Dublin stone there under starshiny coelum. God’s air, the Allfather’s air, scintillant circumambient cessile air. Breathe it deep into thee. By heaven, Theodore Purefoy, thou hast done a doughty deed and no botch! Thou art, I vow, the remarkablest progenitor barring none in this chaffering allincluding most farraginous chronicle',
    countryId: 1
  },
  {
    make: 'Second Plane',
    model: 'Model 2',
    year: '2000',
    type: 'Attack',
    cost: '1',
    imageUrl: 'http://i2.cdn.turner.com/money/dam/assets/171128150757-siemens-airbus-electric-plane-1024x576.jpg',
    description: 'The air without is impregnated with raindew moisture, life essence celestial, glistening on Dublin stone there under starshiny coelum. God’s air, the Allfather’s air, scintillant circumambient cessile air. Breathe it deep into thee. By heaven, Theodore Purefoy, thou hast done a doughty deed and no botch! Thou art, I vow, the remarkablest progenitor barring none in this chaffering allincluding most farraginous chronicle',
    countryId: 1
  },
  {
    make: 'Third Plane',
    model: 'Model 3',
    year: '2000',
    type: 'Attack',
    cost: '1',
    imageUrl: 'http://i2.cdn.turner.com/money/dam/assets/171128150757-siemens-airbus-electric-plane-1024x576.jpg',
    description: 'The air without is impregnated with raindew moisture, life essence celestial, glistening on Dublin stone there under starshiny coelum. God’s air, the Allfather’s air, scintillant circumambient cessile air. Breathe it deep into thee. By heaven, Theodore Purefoy, thou hast done a doughty deed and no botch! Thou art, I vow, the remarkablest progenitor barring none in this chaffering allincluding most farraginous chronicle',
    countryId: 2
  }
]

const countries = [
  {
    name: 'Arcadia',
    gfi: '5',
    countryId: 1
  },
  {
    name: 'Alfheim',
    gfi: '4',
    countryId: 2
  },
  {
    name: 'Atlantis',
    gfi: '2',
    countryId: 3
  },
  {
    name: 'El Dorado',
    gfi: '1',
    countryId: 4
  },
  {
    name: 'Country 5',
    gfi: '1',
    countryId: 5
  },
  {
    name: 'Country 6',
    gfi: '9',
    countryId: 6
  }

]

const seed = () =>
  Promise.all(countries.map(country =>
    Country.create(country))
  )
  .then(() =>
  Promise.all(aircrafts.map(aircraft =>
    Aircraft.create(aircraft))
  )
)

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      console.log('db closed')
      return null;
    });
};

main();
