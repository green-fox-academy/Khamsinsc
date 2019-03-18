'use strict';

const routes = require('./route');
const PORT = 8080;

routes.listen(PORT, () => {
  console.log('Server running on port %d', PORT);
});