'use strict';

import people from './people.json';

peopleFactory.$inject = ['$q'];

export default peopleFactory;

function peopleFactory($q) {

	return {
		findAll,
		findById
	};

	function findAll() {

		let deferred = $q.defer();
		deferred.resolve(people);
		return deferred.promise;
	}

	function findById(id) {

		let deferred = $q.defer();
		if (typeof id == 'number' && id < people.length) {
			deferred.resolve(people[id]);
		}
		else {
			deferred.reject('Invalid ID.');
		}
		return deferred.promise;
	}
}