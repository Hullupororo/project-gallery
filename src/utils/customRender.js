import React from 'react';
import { renderToString } from 'react-dom/server';

import Layout1 from '../mycomp/Layout1';



const customRender = (filePath, initState, cb) => {
  const layout = React.createElement(Layout1, { initState });
  const html = renderToString(layout, initState);
  return cb(null, `<!doctype html>${html}`);
};

export default customRender;
