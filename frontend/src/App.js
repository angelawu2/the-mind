import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from './components/Login/Login'
// import Chat from './components/Chat/Chat'
import { SocketProvider } from "./contexts/socketContext";
// import { MainProvider } from './mainContext'
import "./App.css";
// import { ChakraProvider, Flex } from "@chakra-ui/react"
// import { UsersProvider } from './usersContext'
import NoRoutePage from './components/NoRoutePage'

const App = () => {
    return (
        <SocketProvider>
            <Router>
                <Routes>
                    <Route exact path='/' element={<NoRoutePage />} />
                    <Route path='/chat' element={<NoRoutePage />} />
                    <Route element={<NoRoutePage />} />
                </Routes>
            </Router>
        </SocketProvider>
    );
}

export default App;
