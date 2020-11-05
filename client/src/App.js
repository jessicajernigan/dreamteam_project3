import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import {ApolloClient, InMemoryCache} from 'apollo-boost';
import { createUploadLink } from "apollo-upload-client";
import { Provider } from 'react-redux';

// import Components

import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import CreatrDash from './pages/CreatrDash/CreatrDash';
import CreatrProf from './pages/CreatrProf/CreatrProf';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import store from './utils/store';
// console.log("Redux store in App.js: ", store.getState());

const token = localStorage.getItem('id_token');

// https://courses.bootcampspot.com/courses/161/pages/21-dot-1-3-set-up-the-project?module_item_id=58149

// With MERN-stack applications, we need to work with two servers while we're in development. We'll run a back-end server to host our database and API, and we need a separate server for React development.

// Why do we use a server for React development?

// We need to use webpack to transpile our JSX and components into browser-ready code. Create React App sets this up for us.

// https://courses.bootcampspot.com/courses/161/pages/21-dot-3-4-install-and-set-up-apollo-client?module_item_id=58219

// https://courses.bootcampspot.com/courses/161/pages/21-dot-3-6-set-up-full-stack-structure-with-client-side-react-app?module_item_id=58225

const client = new ApolloClient({
  link: createUploadLink({
    // uri: 'http://localhost:3001/graphql',
    uri: '/graphql',
    headers: {
      authorization : token ? `Bearer ${token}` : ''
    }
  }),
  cache: new InMemoryCache()
})

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
							<Route exact path="/signup" component={Signup} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/about" component={About} />
						</Switch>
					</Provider>
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;
