import { NgHybridStateDeclaration } from '@uirouter/angular-hybrid';

export const carsState: NgHybridStateDeclaration = {
    name: 'cars.**',
    url: '/cars',
    loadChildren: () => import(/* webpackChunkName: "cars.module" */ './cars.module').then(m => m.CarsModule),
};