import { combineActions } from "../utils";

import pricesActions from "./pricesActions";
import walletsActions from './walletsActions';

export default combineActions(pricesActions, walletsActions);
