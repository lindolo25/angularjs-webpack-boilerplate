export default ['$http', githubReposApiFactory];

function githubReposApiFactory($http) {

	const url = 'https://api.github.com/users';

	return {
		getRepos
	};

	function getRepos(username) {
		return $http.get(`${url}/${username}/repos`)
			.then(res => res.data);
	}
}