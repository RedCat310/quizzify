import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/general.scss'
import 'https://kit.fontawesome.com/3034a52bcb.js'
import StartPage from './pages/startPage';
import Game from './pages/game';
import Account from './pages/account';
import Login from './pages/login';
import Create from './pages/create';
import Host from './pages/host';
import TransitionComponent from './components/transition';

const router = createBrowserRouter([
    {
        path: '/',
        element: <TransitionComponent>
            <StartPage></StartPage>
        </TransitionComponent>,
        // loader: startPageLoader,
    },
    {
        path: "/account/create",
        element: <TransitionComponent>
            <Create/>
        </TransitionComponent>,
    },
    {
        path: "/account/login",
        element: <TransitionComponent>
            <Login/>
        </TransitionComponent>,
    },
    {
        path: "/account",
        element: <TransitionComponent>
            <Account/>
        </TransitionComponent>,
    },
    {
        path: "/account/host",
        element: <TransitionComponent>
            <Host/>
        </TransitionComponent>,
    },
    {
        path: "/:id",
        element: <TransitionComponent>
            <Game/>
        </TransitionComponent>,
    },
])

function App(){

    return (<RouterProvider router={router} />);
}

export default App;