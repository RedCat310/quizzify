import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/general.scss'
import 'https://kit.fontawesome.com/3034a52bcb.js'
import StartPage from './pages/startPage';
import Game from './pages/game';
import Account from './pages/account';
import Login from './pages/login';
import Create from './pages/create';
import Host from './pages/host';

const router = createBrowserRouter([
    {
        path: '/',
        element: <StartPage/>,
        // loader: startPageLoader,
    },
    {
        path: "/account/create",
        element: <Create/>,
    },
    {
        path: "/account/login",
        element: <Login/>,
    },
    {
        path: "/account",
        element: <Account/>,
    },
    {
        path: "/account/host",
        element: <Host/>,
    },
    {
        path: "/:id",
        element: <Game/>,
    },
])

function App(){

    return (<RouterProvider router={router} />);
}

export default App;