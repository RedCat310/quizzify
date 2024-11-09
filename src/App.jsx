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
import AppBar from './components/AppBar';

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
        element: <div>
            <AppBar create="tag-active" account="" host=""></AppBar>
            <TransitionComponent>
                <Create/>
            </TransitionComponent>
        </div>,
    },
    {
        path: "/account/login",
        element: <TransitionComponent>
            <Login/>
        </TransitionComponent>,
    },
    {
        path: "/account",
        element: <div>
            <AppBar create="" account="tag-active" host=""></AppBar>
            <TransitionComponent>
                <Account/>
            </TransitionComponent>
        </div>,
    },
    {
        path: "/account/host",
        element: <div>
            <AppBar create="" account="x" host="tag-active"></AppBar>
            <TransitionComponent>
                <Host/>
            </TransitionComponent>
        </div>,
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