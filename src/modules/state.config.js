'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactConfig from './contact/contact.stateconfig';
import homeConfig from './home/home.stateconfig';
import peopleConfig from './people/people.stateconfig';
import personConfig from './people/person/person.stateconfig';

let modulesConfig = angular.module('app.stateConfig', [uiRouter])
	.config(homeConfig)
	.config(contactConfig)
	.config(peopleConfig)
	.config(personConfig);

export default modulesConfig;