import { appConfig } from './config/index';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import compression from 'compression';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import errorMiddleware from './middlewares/error.middleware';
import { stream } from './utils/logger';
import IndexRouter from './routes/index.router';
import rateLimit from 'express-rate-limit';
import httpLogger from './middlewares/http-log.middleware';

const { baseUrl, name: appName, version } = appConfig;

class App {
  public app: express.Application;
  private env: string;

  constructor() {
    this.app = express();
    this.env = process.env.NODE_ENV || 'development';

    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeSwagger();
  }

  private initRateLimit() {
    const limiter = rateLimit({
      windowMs: 30 * 1000, // 30 seconds
      max: 100,
    });

    this.app.use(limiter);
  }

  private initCors() {
    if (this.env === 'production') {
      this.app.use(morgan('combined', { stream }));
      this.app.use(cors({ origin: baseUrl, credentials: true }));
      return;
    } else if (this.env === 'development') {
      this.app.use(morgan('dev', { stream }));
      this.app.use(cors({ origin: true, credentials: true }));
      return;
    }
  }

  private initErrorHandling() {
    this.app.use(errorMiddleware);
  }

  private initializeMiddlewares() {
    this.initCors();
    this.initRateLimit();
    this.app.use(httpLogger);
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.initErrorHandling();
  }

  private initializeRoutes() {
    const indexRouter = new IndexRouter();
    this.app.use('/', indexRouter.router);
  }

  private initializeSwagger() {
    const description = `Docs for ${appName} REST API`;
    const title = appName;

    const options = {
      swaggerDefinition: {
        info: {
          title,
          version,
          description,
        },
      },
      apis: ['swagger.yaml'],
    };

    const specs = swaggerJSDoc(options);
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  }
}

export default App;