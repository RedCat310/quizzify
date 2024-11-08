import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/general.scss'
import StartPage from './pages/startPage';
import Game from './pages/game';

const router = createBrowserRouter([
    {
        path: '/',
        element: <StartPage/>,
        // loader: startPageLoader,
    },
    {
        path: "/game/:id",
        element: <Game/>,
    }
])

function App(){

    return (<RouterProvider router={router} />);
}

export default App;