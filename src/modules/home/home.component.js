import homeTemplate from './home.view.html';

let HomeComponent = {
    bindings: { },
    template: homeTemplate,
    controller: HomeController
}

HomeController.$inject = ['$log'];

export default HomeComponent;

function HomeController ($log) {

    let ctrl = this;
    ctrl.title = "title from Home Component"
    ctrl.$onInit = function () {
        $log.log('log from Home Component');
    }
}