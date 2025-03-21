import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Login from './components/Login/Login'
// import Chat from './components/Chat/Chat'
import { SocketProvider } from './socketContext'
// import { MainProvider } from './mainContext'
import './App.css'
// import { ChakraProvider, Flex } from "@chakra-ui/react"
// import { UsersProvider } from './usersContext'
// import DefaultPage from './components/DefaultPage'

function App() {
    return (
        <SocketProvider>
            <Router>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/chat' component={Chat} />
                    <Route component={DefaultPage} />
                </Switch>
            </Router>
        </SocketProvider>
    );
}

export default App;
