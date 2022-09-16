export default async function parse(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (data) => (body += data));
    req.on('end', () => {
      // what's this resolve business about? Logan showed amanda a cool thing but I missed it
      
      resolve(JSON.parse(body));
    });
    req.on('error', reject);
  });
}
