// OLD WAY
// const http = require('http');

// http.createServer((req, res) => {
//   if(req.method === 'GET' && req.url === '/') {
//     res.end(`
//       <h1>Welcome</h1>
//     `);
//   } else if (req.method === 'GET' && req.url === '/puppies') {
//     res.end(`
//       <h1>Puppies!</h1>
//     `);
//   } else {
//     res.end(`
//       <h1>Page does not exist</h1>
//     `);
//   }
// }).listen(3000);

const bunnies = [
  { id: 1, name: 'floppy', color: 'brown', favtoy: 'grass ball'}, 
  { id: 2, name: 'thumper', color: 'gray', favtoy: 'bouncy ball'},
  { id: 3, name: 'rebecca', color: 'rebecca-purple', favtoy: 'purple-rope' },
  { id: 4, name: 'brownie', color: 'brown', favtoy: 'purple-rope' }
]


const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/bunnies', (req, res, next) => {
  res.send(`
    <h1>Bunnies Rock!</h1>
  `);
});

app.get('/api/v1/bunnies', (req, res, next) => {
  console.log(`REQ QUERY`, req.query);
  let foundBunnies = [];

  if(req.query.color) {
    foundBunnies = [...foundBunnies, ...bunnies.filter((bunny) => {
      return bunny.color === req.query.color;
    })];
  }
  
  if (req.query.favtoy) {
    foundBunnies = [...foundBunnies, ...bunnies.filter((bunny) => {
      return bunny.favtoy === req.query.favtoy;
    })];
  }
  
  res.send(foundBunnies);
});

app.get('/api/v1/bunnies/:animalName/:animalColor', (req, res, next) => {
  // console.log('REQ PARAMS:', req.params);
  const { animalName, animalColor } = req.params;

  const foundBunny = bunnies.find((bunny) => {
    return bunny.name === animalName && bunny.color === animalColor;
  });

  console.log(foundBunny)
  
  if(foundBunny) {
    res.send(foundBunny);
  } else {
    res.send('Bunny not found');
  }
});

app.get('/puppies', (req, res, next) => {
  res.send(`
    <h1>Puppies!</h1>
  `)
});

app.get('/api/v1/pokemon', (req, res, next) => {
  res.send([
    { id: 1,
      name: 'bulbasaur'
    }
  ]);
});

app.get('/api/v1/quote', (req, res, next) => {
  res.send('Here is a quote!');
});

app.get('/nothing', (request, response, next) => {
  console.log(response);
});

app.post('/login', (req, res, next) => {
  res.send(`<h1>Logged in!</h1>`)
});

app.use('/elephants', (req, res, next) => {
  console.log('ELEPHANTS');
});

app.get('*', (req, res, next) => {
  console.log(`You got got!`);
});

app.use((req, res, next) => {
  console.log(`route not found`);
});

app.listen(3000, () => { console.log(`listening on port 3000`) });