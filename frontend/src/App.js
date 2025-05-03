import { BrowserRouter as Router, Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';

// import Layout from './components/Layout';
import Home from './pages/Home';
import NoRoutePage from './pages/NoRoutePage';
import Room from './pages/Room';
import Lobby from './pages/Lobby';
import Game from './pages/Game';

import { SocketProvider } from './contexts/socketContext';
import { UserIdProvider } from './contexts/userIdContext';


const App = () => {
  return (
    <Provider store={store}>
      <UserIdProvider>
        <SocketProvider>
          <Router>
            <Routes>
              <Route path="/" >
                <Route index element={<Home />} />
                <Route path=":roomId" element={<Room />} >
                  <Route path="lobby" element={<Lobby />} />
                  <Route path="play" element={<Game />} />
                </Route>
                <Route path="*" element={<NoRoutePage />} />
              </Route>
            </Routes>
          </Router>
        </SocketProvider>
      </UserIdProvider>
    </Provider>
  );
};

export default App;
