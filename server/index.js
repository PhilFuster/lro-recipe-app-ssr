import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Menu } from '../src/components/Menu';
const path = require('path');
const fs = require('fs');

const app = express();

// this imports and statically serves the build folder
app.use(express.static('./build'));

const PORT = process.env.PORT || 4000;

/**
 * Render Menu component statically to a string server side.
 * Then read the static index.html file from the built client app, and inject the app's content in the div, and send that as the response to request
 */
app.get('/*', (req, res) => {
  const app = ReactDOMServer.renderToString(<Menu />);
  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    return res.send(
      data.replace('<div id="root"></div>', `<div id='root'>${app}</div>`)
    );
  });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
