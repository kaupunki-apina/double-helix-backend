import app from './app';
const port = 3000

const server = app().listen(port);

console.log(`listening on http://localhost:${port}`)

const closeServer = (signal: any) => {
  console.log(signal + ' received');
  console.log('Closing http.Server...');
  server.close();
  process.exit();
}

// Handle signals gracefully. Heroku will send SIGTERM before idle.
process.on('SIGTERM', closeServer.bind(this, 'SIGTERM'));
process.on('SIGINT', closeServer.bind(this, 'SIGINT(Ctrl-C)'));
