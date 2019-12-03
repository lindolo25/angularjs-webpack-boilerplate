'use strict';

peopleFactory.$inject = ['$q', '$log'];

export default peopleFactory;

function peopleFactory($q, $log) {

    const people = [{
        name: 'Steve Rogers',
        age: 31
    },
    {
        name: 'Tony Stark',
        age: 42
    },
    {
        name: 'Thor',
        age: 35
    },
    {
        name: 'Bruce Bennett',
        age: 45
    },
    {
        name: 'Natasha Romanoff',
        age: 29
    }];

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
        if (typeof id == "number" && id < people.length) {
            deferred.resolve(people[id]);
        }
        else {
            deferred.reject("Invalid ID.");
        }
        return deferred.promise;
    }
}