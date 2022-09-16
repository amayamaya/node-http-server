import cats from './routes/cats.js';
import candies from './routes/cats.js';
import notFound from './not-found.js';
import bodyParser from './bodyParser.js';

const routes = {
  cats,
  candies,
  //sauces to follow
};

export default async function (req, res) {
  const parts = url.split('/');
  if (parts.length && parts[0] === 'api') {
    req.body = await bodyParser(req);
    const resource = routes[parts[1]];
    //resource if statement here

    const route = resource[req.method.toLowerCase()];
    //route if statement here
    route(req, res);
    return;
  }

  notFound(req, res);
}
