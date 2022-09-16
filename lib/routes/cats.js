const cats = [
{ name: 'Julia', age: 6, vibe: 'floofly' },
{ name: 'Milo', age: 3, vibe: 'silky' },
{ name: 'Penny', age: 1, vibe: 'spunky' },
{ name: 'Mittens', age: 2, vibe: 'shy' },
{ name: 'Socks', age: 4, vibe: 'stylish' },
];
// amaya's cats here

export default {
  name: 'cats',
  get(req, res) {
    //sequence below essentially the return
    //res.end really ends it
    res.write(JSON.stringify(cats));
    res.end();
  },

  post(req, res) {
  res.setHeader('Content-Type', 'application/json');
  cats.push(req.body);
  res.write(JSON.stringify(cats));
  res.end();
}
};
