'use strict';

import angular from 'angular';
// Modules
import homeModule from './home/home.module';
import contactModule from './contact/contact.module';
// States
import contactConfig from './contact/contact.stateconfig';
import homeConfig from './home/home.stateconfig';
import peopleConfig from './people/people.stateconfig';
import personConfig from './people/person/person.stateconfig';

let modulesConfig = angular.module('app.modules', [ 
	homeModule.name,
	contactModule.name
])
	.config(homeConfig)
	.config(contactConfig)
	.config(peopleConfig)
	.config(personConfig);

export default modulesConfig;