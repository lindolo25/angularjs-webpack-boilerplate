import angular from "angular";
import HomeComponent from './home.component';

let Home = angular
    .module('app.home', [])
    .component('home.component', HomeComponent);

export default Home;