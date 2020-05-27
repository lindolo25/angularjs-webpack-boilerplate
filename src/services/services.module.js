'use strict';

import angular from 'angular';
import { downgradeInjectable } from '@angular/upgrade/static';

import peopleFactory from './people.service';
import githubReposApiFactory from './githubReposApi.service';
import { GithubUsersApiService } from './githubUsersApi.service';

let services = angular.module('app.services', [])
	.factory('app.peopleService', peopleFactory)
	.factory('app.githubReposApiService', githubReposApiFactory)
	.factory('app.githubUsersApiService', downgradeInjectable(GithubUsersApiService));

export default services;