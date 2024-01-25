import { bootstrap } from './server';

bootstrap().catch(() => {
  console.log('Server running on port: ' + process.env.PORT);
});
