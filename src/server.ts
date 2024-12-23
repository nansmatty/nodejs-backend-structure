import app from './app';
import { Config } from './config';
import logger from './config/logger';

const startServer = () => {
  const PORT = Config.PORT;

  try {
     
    app.listen(PORT, () => logger.info(`Listening on PORT ${PORT}`));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    process.exit(1);
  }
};

startServer();
