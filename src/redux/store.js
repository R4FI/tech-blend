import buildSlice from "./fetures/build/buildSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    pcbuild: buildSlice,
  },
});

export default store;
