import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import Cursos from '../pages/Student';

function Routes(props) {
	return (
		<BrowserRouter basename='/hackaton-shawee'>
			<Switch>
				<Route path='/' exact={true} component={Home} />
				<Route path='/about' exact={true} component={About} />
				<Route path='/estudante' exact={true} component={Cursos} />
				<Route path='*' component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
