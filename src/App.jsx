import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/general.scss'
import 'https://kit.fontawesome.com/3034a52bcb.js'
import StartPage from './pages/startPage';
import Game from './pages/game';
import Account from './pages/account';
import Login from './pages/login';
import Create from './pages/create';
import Host from './pages/host';
import AppBar from './components/AppBar';
import HostPage from './pages/hostPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>
        <AppBar create="" account="" host="" despawn={true}></AppBar>
            <StartPage/>
    </div>,
        // loader: startPageLoader,
    },
    {
        path: "/account/create",
        element: <div>
            <AppBar create="tag-active" account="" host="" despawn={false}></AppBar>
                <Create/>
        </div>,
    },
    {
        path: "/account/login",
        element: <div>
        <AppBar create="" account="" host="" despawn={true}></AppBar>
            <Login/>
    </div>,
    },
    {
        path: "/account",
        element: <div>
            <AppBar create="" account="tag-active" host="" despawn={false}></AppBar>
                <Account/>
        </div>,
    },
    {
        path: "/account/host",
        element: <div>
            <AppBar create="" account="" host="tag-active" despawn={false}></AppBar>
                <Host/>
        </div>,
    },
    {
        path: "/account/host/:id",
        element: <HostPage/>,
    },
    {
        path: "/:id",
        element: <div>
        <AppBar create="" account="" host="" despawn={true}></AppBar>
            <Game/>
        </div>,
        future: {
            v7_fetcherPersist: true,
          },
    },
])

function App(){

    return (<RouterProvider router={router} future={{
        v7_relativeSplatPath: true,
      }} />);
}

export default App;