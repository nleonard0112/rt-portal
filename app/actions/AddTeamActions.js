import alt from '../alt';
import ApiUtils from '../utils/apiUtils';
import LogInStore from '../stores/LogInStore';
import RouterContainer from '../services/RouterContainer';
import LogInActions from '../actions/LogInActions';
import jwt_decode from 'jwt-decode';
import {LOGIN_USER, LOGOUT_USER} from '../constants/ActionTypes';

class AddTeamActions {

	constructor() {
		this.generateActions(
			'addTeamSuccess',
			'addTeamFail',
			'updateTeamName',
			'invalidTeamName',
			'invalidTeamNameLength',
			'updateTeamType',
			'invalidTeamType',
			'updateColor',
			'invalidColor',
			'updateGoal',
			'invalidGoal',
			'updateAbout',
			'invalidAbout',
			'invalidAboutLength',
			'updateUsername',
			'invalidUsername',
			'invalidUsernameSpace',
			'updateAddress1',
			'invalidAddress1',
			'updateAddress2',
			'updateCity',
			'invalidCity',
			'updateState',
			'invalidState',
			'updateZipcode',
			'invalidZipcode',
			'updateCountry',
			'invalidCountry',
			'displayErrorMessage'
		);
	}

	addTeam(team) {
		ApiUtils.addTeam(team)
			.done((data) => {
				if(data.type === 'success') {
					console.log("action is receiving " + data.message + " message from server");
					this.actions.addTeamSuccess(data);
					this.actions.displayErrorMessage(data.message);
					localStorage.setItem('jwt', data.token);	
					let user = jwt_decode(data.token);	
					window.location.href = "/" + user.username;

				} 
			})
			.fail((jqXhr) => {
				this.actions.addTeamFail(jqXhr.responseJSON.message);
				console.log("Error message from server: " + jqXhr.responseJSON.message);
			});

	}
}

export default alt.createActions(AddTeamActions);
