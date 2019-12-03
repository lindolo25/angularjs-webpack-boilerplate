import greetingTemplate from "./greeting.view.html";

(function () {

    "use strict";

    let greetingComponent = {
        templateUrl: greetingTemplate,
        controller: greetingController
    }

    angular
        .module("ClickyGame")
        .component('greeting', greetingComponent);

    greetingController.$inject = ["$scope", "appName"];

    function greetingController($scope, appName)
    {
        $scope.greeting = "Hello World!";
        console.log(appName);
    }

})();