'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
// Modules
import homeModule from './home/home.module';
import contactModule from './contact/contact.module';
import githugModule from './github/github.module';
// States
import contactConfig from './contact/contact.stateconfig';
import homeConfig from './home/home.stateconfig';
import peopleConfig from './people/people.stateconfig';
import personConfig from './people/person/person.stateconfig';
import githubConfig from './github/github.stateconfig';

let modulesConfig = angular.module('app.modules', [ 
	homeModule.name,
	contactModule.name,
	githugModule.name,
	uiRouter,
])
	.config(homeConfig)
	.config(contactConfig)
	.config(peopleConfig)
	.config(personConfig)
	.config(githubConfig);

export default modulesConfig;