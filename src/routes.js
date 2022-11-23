import {CHAT_ROUTE, LOGIN_ROUTE} from './utils/consts';
import Login from './pages/Login'
import Messenger from './pages/Messenger'

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]
export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Messenger
    }
]