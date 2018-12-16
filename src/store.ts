import { combineReducers, Store, Reducer } from 'redux'
import {IAppStore} from './storeDefine';
import {countReducer} from './entry/reducers/index'
import { configureStore } from './services/store/configureStore';
import { createBrowserHistory } from 'history'
import { connectRouter } from 'connected-react-router'

export const  history = createBrowserHistory();

export type ICombineReducerObj<T>  = {
    [P in keyof T]: Reducer<T[P]>
}
export const rootStoreFactory = (): Store<IAppStore> => {
    const StoreShapeInitState = {} as IAppStore;
    const reducerObj: ICombineReducerObj<IAppStore> = {
        count: countReducer,
        router: connectRouter(history),
    };
    const rootReducer = combineReducers<IAppStore>(reducerObj);
    return configureStore(StoreShapeInitState, rootReducer) as  Store<IAppStore>;
};
