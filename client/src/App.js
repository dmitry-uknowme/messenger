import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import io from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Messenger from './components/Messenger/Messenger';
import Chat from './components/Chat/Chat';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';
const App = () => {
	return (
		<div className='app'>
			<Router>
				<Switch>
					<Route path='/chat/:id'>
						<Header />
						<Chat />
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/'>
						<Header />
						<Messenger />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;

// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const App = () => {
// 	const connectSocket = () => io('http://127.0.0.1:9000', {});

// 	const [response, setResponse] = useState('');

// 	useEffect(() => {
// 		const socket = socketIOClient(ENDPOINT);
// 		socket.on('FromAPI', (data) => {
// 			setResponse(data);
// 			console.log(response);
// 		});
// 	}, []);

// 	return (
// 		<p>
// 			It's <time dateTime={response}>{response}</time>
// 		</p>
// 	);
// };

// export default App;