import cats from './routes/cats.js';
import candies from './routes/candies.js';
import notFound from './not-found.js';
import bodyParser from './bodyParser.js';

const routes = {
  cats,
  candies,
  //sauces to follow
};

export default async function (req, res) {
  const parts = req.url.split('/'); console.log(parts);
  if (parts.length && parts[1] === 'api') {

    //sub 1 element in the array that has the index of one - the second thing
    req.body = await bodyParser(req);
    console.log(req);
    const resourceName = parts[parts.length - 1]
    const resource = routes[resourceName];
    // console.log(resource);
    if (resource === undefined) {
      notFound(req, res);
      return;
    }
    const route = resource[req.method.toLowerCase()];
    if (route === undefined) {
      //checking method exists
      notFound(req, res);
      return;
    }
    route(req, res);
    return;
  }

  notFound(req, res);
}
