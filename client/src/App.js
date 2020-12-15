import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { createUploadLink } from 'apollo-upload-client'
import { Provider } from 'react-redux'

// import Components

import Navigation from './components/Navigation/Navigation'
import Home from './pages/Home/Home'
import CreatrDash from './pages/CreatrDash/CreatrDash'
import CreatrProf from './pages/CreatrProf/CreatrProf'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import About from './pages/About/About'
import store from './utils/store'
// console.log("Redux store in App.js: ", store.getState());

const token = localStorage.getItem('id_token')

// ApolloClient will help us get data from components once we pass it through with ApolloProvider
const client = new ApolloClient({
  // The createUploadLink function will create an ApolloLink that works like the HttpLink, but additionally it supports file uploads
	link  : createUploadLink({
		// uri: 'http://localhost:3001/graphql',
    uri     : '/graphql',
    // set headers to include token
		headers : {
			authorization : token ? `Bearer ${token}` : ''
		}
	}),
	cache : new InMemoryCache()
})

function App() {
	return (
    // ApolloProvider is a special type of React component that we use to provide data to all of the other components via useQuery and useMutation
		<ApolloProvider client={client}>
			<Router>
				<div>
          {/* Redux global state */}
					<Provider store={store}>
						<Navigation />
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/creator/:id' component={CreatrDash} />
							<Route exact path='/profile/:id' component={CreatrProf} />
							<Route exact path='/signup' component={Signup} />
							<Route exact path='/login' component={Login} />
							<Route exact path='/about' component={About} />
						</Switch>
					</Provider>
				</div>
			</Router>
		</ApolloProvider>
	)
}

export default App
