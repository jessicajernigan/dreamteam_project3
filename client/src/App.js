import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { Provider } from 'react-redux';

// import Components

import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import CreatorDashBoard from './pages/CreatorDashboard/CreatorDashboard';
import CreatorProfile from './pages/CreatorProfile/CreatorProfile';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Uploader from './components/Uploader/Uploader';


import store from './utils/store';
// console.log(store.getState());

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
							<Route exact path="/creator" component={CreatorDashBoard} />
							<Route exact path="/profile" component={CreatorProfile} />
							<Route exact path="/signup" component={Signup} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/upload" component={Uploader} />
						</Switch>
					</Provider>      
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;
