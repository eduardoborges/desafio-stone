import { combineActions } from "../utils";

import pricesActions from "./pricesActions";
import walletsActions from './walletsActions';
import transactionsActions from './transactionsActions';

export default combineActions(pricesActions, walletsActions, transactionsActions);
