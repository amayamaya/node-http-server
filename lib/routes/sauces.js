const sauces = [
{ name: 'verde', magic: 'tomatillos' },
{ name: 'roja', magic: 'chile de arbol' },
];

export default {
  name: 'sauces',
  get(req, res) {
    //sequence below essentially the return
    //res.end really ends it
    res.write(JSON.stringify(sauces));
    res.end();
  },

  post(req, res) {
  res.setHeader('Content-Type', 'application/json');
  sauces.push(req.body);
  res.write(JSON.stringify(sauces));
  res.end();
  },

  put(req, res) {
  res.setHeader('Content-Type', 'application/json');
  sauces[0] = req.body;
  res.write(JSON.stringify(sauces));
  res.statusCode = 200;
  res.end();
  },

  delete(req, res) {
    sauces.pop();
    res.statusCode = 204;
    res.end();
  },
};
