// import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';
// import { pokemonApi } from './api/pokemonApi';

// export const store = configureStore({
// 	reducer: {
// 		[pokemonApi.reducerPath]: pokemonApi.reducer,
// 	},
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware().concat(pokemonApi.middleware),
// });

// setupListeners(store.dispatch);

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;

// export { useGetPokemonByNameQuery } from './api/pokemonApi';
// export default store;