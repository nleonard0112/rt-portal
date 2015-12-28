import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import AddTeam from './components/AddTeam';
import About from './components/About';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Team from './components/Team';
import AllTeams from './components/AllTeams';
import Event from './components/Event';
import AllEvents from './components/AllEvents';
import Refugee from './components/Refugee';
import AllRefugees from './components/AllRefugees';
import Dashboard from './components/Dashboard';
import NewTeamForm from './components/NewTeamForm';

export default (
  	<Route component={App}>
	    <Route path='/' component={Home} />
	    <Route path='/add_team' component={AddTeam} />
	    <Route path='/about' component={About} />
	    <Route path='/login' component={LogIn} />
	    <Route path='/signup' component={SignUp} />
	    <Route path='/team' component={Team} />
	    <Route path='/all_teams' component={AllTeams} />
	    <Route path='/event' component={Event} />
	    <Route path='/all_events' component={AllEvents} />
	    <Route path='/refugee' component={Refugee} />
	    <Route path='/all_refugees' component={AllRefugees} />
	    <Route path='/dashboard' component={Dashboard} />
	    <Route path='/new_team' component={NewTeamForm} />
 	</Route>
);







