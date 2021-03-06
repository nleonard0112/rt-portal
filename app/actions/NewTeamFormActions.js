import alt from '../alt';
import ApiUtils from '../utils/apiUtils';

class NewTeamFormActions {

	constructor() {
		this.generateActions(
			'signUpSuccess',
			'signUpFail',
			'updateFirstName',
			'updateLastName',
			'updateEmail',
			'updatePassword',
			'updatePasswordConf',
			'invalidEmail',
			'invalidFirstName',
			'invalidLastName',
			'invalidPassword',
			'invalidPasswordLength',
			'invalidPasswordConf',
			'unmatchPasswords',
			'displayErrorMessage'
		);
	}

	NewTeamForm(userdata) {
		ApiUtils.newTeam(userdata)
			.done((data) => {
				if(data.message == 'success') {
					console.log('Success Message from server: ' + data.message);
					window.location.href = "/new_team";
					this.actions.signUpSuccess(data);
					this.actions.displayErrorMessage(data.message);
				} else {
					console.log('Error Message from server: ' + data.message);
					this.actions.signUpFail(data);
					this.actions.displayErrorMessage(data.error);
				}
		})
		.fail((jqXhr) => {
			this.actions.signUpFail(jqXhr);
			console.log('Error Message from server: ' + jqXhr.responseJSON.message.errors[0].message);
			this.actions.displayErrorMessage(jqXhr.responseJSON.message);
		});
		
	}
}

export default alt.createActions(NewTeamFormActions);