
import { InjectionToken } from '@angular/core';

export interface GithubReposApiService {
    getRepos(username: String): Promise<any>;
}

export const GithubReposApiToken = new InjectionToken<GithubReposApiService>('GithubReposApiService');

export const GithubReposApiProvider = {
	provide: GithubReposApiToken,
	useFactory: function factory(i) {
		return i.get('app.githubReposApiService');
	},
	deps: ['$injector']
};