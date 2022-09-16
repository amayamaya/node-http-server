export default async function bodyParser(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (data) => (body += data));
    req.on('end', () => {
      // what's this resolve business about? Logan showed amanda a cool thing but I missed it
      
      resolve(body == '' ? undefined : JSON.parse(body));
      //no body? resolve undefined if there is resolve the body
    });
    req.on('error', reject);
  });
}
