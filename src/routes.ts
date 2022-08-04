import { FindAllTradeController } from './modules/users/transactions/FindAllTradeController';
import { CreateTradeController } from './modules/trades/useCases/createTrade/CreateTradeController';
import { AuthenticateUserController } from './modules/account/authenticateClient/AuthenticateUserController';
import { Router } from 'express';
import { CreateClientController } from './modules/users/useCases/createClient/CreateClientController';
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';
import { TradeController } from './modules/users/transactions/TradeController';
import { BinanceController } from './modules/websocket/BinanceController';

const routes = Router();

const createClientController = new CreateClientController();
const authenticateUserController = new AuthenticateUserController();
const tradeController = new CreateTradeController();
const findAlTradeController = new FindAllTradeController();
const binanceController = new BinanceController();
const trade = new TradeController();

routes.post('/client/authenticate', authenticateUserController.handle);
routes.post('/client', createClientController.handle);
routes.get('/client/trades', ensureAuthenticateClient, findAlTradeController.handle);
routes.post('/trade', ensureAuthenticateClient, tradeController.handle);
routes.put('/deposit/trade/:id', ensureAuthenticateClient, trade.handle);
routes.get('/websocket', binanceController.handle);

export { routes };