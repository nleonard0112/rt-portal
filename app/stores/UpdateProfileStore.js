import alt from '../alt';
import UpdateProfileActions from '../actions/UpdateProfileActions';

class UpdateProfileStore {
	constructor() {

    this.bindActions(UpdateProfileActions);
    this.user = {};
    
    this.helpBlock = {

        first_name: '',
        last_name: '',
        username: '',
        email: '',
        goal:''
     };
    this.validationState = {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      goal:''
   };

    this.errorMessage = [];
    this.errorMessageState = '';
    
  }

  onUpdateFirstName(event) {
  	this.first_name = event.target.value;
    if (this.first_name !== '') {
      this.validationState.first_name = 'has-success';
    }
  }

  onInvalidFirstName() {
    this.validationState.first_name = 'has-error';
    this.helpBlock.first_name = "First Name can't be blank!";
    return
  }

  onUpdateLastName(event) {
    this.last_name = event.target.value;
    if (this.last_name !== '') {
      this.validationState.last_name = 'has-success';
    }
  }

  onInvalidLastName() {
    this.validationState.last_name = 'has-error';
    this.helpBlock.last_name = "Last Name can't be blank!";
  }

  onUpdateUsername(event) {
    this.username = event.target.value;

  }

  onInvalidUsername() {
    this.validationState.username = 'has-error';
    this.helpBlock.username = "Username is invalid or already taken";
  }

  onInvalidUsernameSpace() {
    this.validationState.username = 'has-error';
    this.helpBlock.username = "Username must not contain spaces";
  }

  onUpdateEmail(event) {
    this.email = event.target.value;

  }

  onInvalidEmail() {
    this.validationState.email = 'has-error';
    this.helpBlock.email = 'Please enter an email address';
  }

  onUpdateGoal(event) {
    this.goal = event.target.value;
  }

  onInvalidGoal() {
    this.validationState.goal = 'has-error';
    this.helpBlock.goal = 'Please enter goal amount';
  }

  onUpdatePassword(event) {
  	this.password = event.target.value;
  }

  onInvalidPassword() {
    this.validationState.password = 'has-error';
    this.helpBlock.password = "Password can't be blank!";
  }

   onInvalidPasswordLength() {
    this.validationState.password_length = 'has-error';
    this.helpBlock.password_length = "Password needs to have at least 6 characters!";
  }

  onUpdatePasswordConf(event) {
    this.password_conf = event.target.value;
  }

  onInvalidPasswordConf() {
    this.validationState.password_conf = 'has-error';
    this.helpBlock.password_conf = "Password confirmation needed!";
  }

  onUnmatchPasswords() {
    this.validationState.matching_passwords = 'has-error';
    this.helpBlock.matching_passwords = "Passwords are not matching!";
  }

  onUpdateAbout(event) {
    this.about = event.target.value;
  }

  onUpdateSuccess(data) {

    this.errorMessage = data.message;
    if (data.message == 'success') {
      this.errorMessageState = 'alert alert-success text-center';

      //redirect to All Teams Page or User Dashboard
      // window.location.href = '/new_team';


    } else {
      this.errorMessageState = 'alert alert-danger';
    }   
 
  }

  onUpdateFail(error) {
    console.log(error);
    
    for (var i in error.responseJSON.message.errors) {
      this.errorMessage.push(error.responseJSON.message.errors[i].message);
    }
    this.errorMessageState = 'alert alert-danger';
  }
  
}

export default alt.createStore(UpdateProfileStore);