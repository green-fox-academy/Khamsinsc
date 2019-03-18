'use strict';

const routes = require('./routes');
const PORT = 8080;

routes.listen(PORT, () => {
  console.log('Server running on port %d', PORT);
});