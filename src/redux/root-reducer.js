import { combineReducers } from "redux";
import nomineeReducer from "./nominated/nominated.reducer";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["nominee"],
};

const rootReducer = combineReducers({
  nominee: nomineeReducer,
});

export default persistReducer(persistConfig, rootReducer);
