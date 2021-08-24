
import {createWrapper, Context, MakeStore} from 'next-redux-wrapper';
import {createStore, applyMiddleware, AnyAction} from 'redux';
import {reducer, RootState} from "./reducers";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";



const makeStore:MakeStore<RootState> = (context: Context) => createStore(reducer, applyMiddleware(thunk));

// export an assembled wrapper

export const wrapper = createWrapper<RootState>(makeStore, {debug: true});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>