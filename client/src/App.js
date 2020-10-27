import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { Provider } from 'react-redux';

// import Components

import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import CreatrDash from './pages/CreatrDash/CreatrDash';
import CreatrProf from './pages/CreatrProf/CreatrProf';
import CreatrProfTest from './pages/CreatrProfTest/CreatrProfTest';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';

import store from './utils/store';
// console.log("Redux store in App.js: ", store.getState());

const client = new ApolloClient({
	request : (operation) => {
		const token = localStorage.getItem('id_token');
		operation.setContext({
			headers : {
				authorization : token ? `Bearer ${token}` : ''
			}
		});
	},
	uri     : '/graphql'
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<div>
					<Provider store={store}>
						<Navigation />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/creator/:id" component={CreatrDash} />
							<Route exact path="/profile/:id" component={CreatrProf} />
							<Route exact path="/profileTest" component={CreatrProfTest} />
							<Route exact path="/signup" component={Signup} />
							<Route exact path="/login" component={Login} />
						</Switch>
					</Provider>
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;
