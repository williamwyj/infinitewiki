import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import aircraftsReducer from '../features/aircrafts/aircraftsSlice';
import researchAgreementReducer from '../features/researchAgreement/researchAgreementSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    aircrafts: aircraftsReducer,
    researchAgreement: researchAgreementReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
