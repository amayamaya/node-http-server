const candies = [
{ name: 'swedish fish', profile: 'tangy' },
{ name: 'sour skittles', profile: 'sour' },
];

export default {
  name: 'candies',
  get(req, res) {
    //sequence below essentially the return
    //res.end really ends it
    res.write(JSON.stringify(candies));
    res.end();
  },

  post(req, res) {
  res.setHeader('Content-Type', 'application/json');
  candies.push(req.body);
  res.write(JSON.stringify(candies));
  res.end();
  },

  put(req, res) {
  res.setHeader('Content-Type', 'application/json');
  candies[0] = req.body;
  res.write(JSON.stringify(candies));
  res.statusCode = 200;
  res.end();
  },

  delete(req, res) {
    candies.pop();
    res.statusCode = 204;
    res.end();
  },
};
