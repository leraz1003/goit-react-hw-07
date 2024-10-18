import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";
import { searchFilterReducer } from "./filtersSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, contactReducer),
    filters: searchFilterReducer,
  },
});

export let persistor = persistStore(store);
