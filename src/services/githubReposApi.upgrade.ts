
import { InjectionToken } from '@angular/core';
import { IGithubRepo } from '../interfaces/IGithub';

export interface GithubReposApiService {
    getRepos(username: String): Promise<Array<IGithubRepo>>;
}

export const GithubReposApiToken = new InjectionToken<GithubReposApiService>('GithubReposApiService');

export const GithubReposApiProvider = {
	provide: GithubReposApiToken,
	useFactory: function factory(i) {
		return i.get('app.githubReposApiService');
	},
	deps: ['$injector']
};