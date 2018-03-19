import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';

const app = express();
const indexHTMLPath = path.join(__dirname, '..', '..', 'static', 'index.html');

const indexHandler = (req: any, res: any) => {
  const html = fs.readFileSync(indexHTMLPath, 'utf8');
  res.status(200).end(html);
};

app.use('/css', express.static(path.join(__dirname, '..', '..', 'static', 'css')));
app.use('/js', express.static(path.join(__dirname, '..', '..', 'static', 'js')));

const frontendRoutes = [
  { route: '*', handler: indexHandler },
  { route: 'goodbye*', handler: indexHandler }
];

frontendRoutes.forEach((routeObj: any) => {
  app.get(`${routeObj.route}`, routeObj.handler);
});

app.listen(9002, () => {
  console.log('Static server is UP and running on port 9002');
});
