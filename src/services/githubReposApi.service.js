export default ['$http', githubReposApiFactory];

function githubReposApiFactory($http) {

	const url = 'https://api.github.com/users';

	return {
		getRepos
	};

	function getRepos(username) {
		return $http.get(`${url}/${username}/repos`, { cache: true })
			.then(res => res.data.map(_formatRepo));
	}

	function _formatRepo(repo) {
		return {
			fork: repo.fork,
			forks: repo.forks,
			fullName: repo.full_name,
			id: repo.id,
			license: repo.license ? repo.license.name : '',
			name: repo.name,
			private: repo.private,
			watchers: repo.watchers
		};
	}
}