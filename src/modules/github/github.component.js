// @ts-ignore
import template from './github.view.html';

export default {
	bindigns: {},
	template: template,
	controller: ['app.githubUsersApiService', 'app.githubReposApiService', githubController]
};

/**
 * @typedef {{
 * 		name: String;
 * }} GithubUser
 * 
 * @typedef {{
 * 		getRepos(username: String): Promise<Array<GithubRepo>>
 * }} GithubReposApiService
 * 
 * @typedef {{
 * 		getUser(username: String): Promise<GithubUser>
 * }} GithubUsersApiService
 * 
 * 
 * @ngDoc Controller
 * @name githubController
 * @param {GithubUsersApiService} usersService 
 * @param {GithubReposApiService} reposService 
 */
function githubController(usersService, reposService) {

	const ctrl = this;
	ctrl.username = '';

	ctrl.$onInit = function onInit() { };

	/**
	 * Handles Keypress event for input filed.
	 * @param {KeyboardEvent} e 
	 * @param {String} username 
	 */
	ctrl.handleKeyInput = function onKeyPress(e, username) {
		if(e.keyCode === 13 || e.code === 'Enter') {
			ctrl.findUser(username);
		}
	};

	ctrl.findUser = function findUser(username) {
		let user = usersService.getUser(username);
		let repos = reposService.getRepos(username);

		Promise.all([user, repos])
			.then(result => {
				ctrl.user = result[0];
				ctrl.repos = result[1];
			}).
			catch(error => console.log(error));
	};
}