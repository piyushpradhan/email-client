import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { Store } from "@reduxjs/toolkit";
import { logger, thunk } from "./middleware";
import { rootReducer } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

const rootPersistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store: Store = configureStore({
  reducer: persistedReducer,
  middleware: [logger, thunk],
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
