import { NgHybridStateDeclaration } from '@uirouter/angular-hybrid';

export const carsState: NgHybridStateDeclaration = {
    name: 'cars.**',
    url: '/cars',
    loadChildren: () => import('./cars.module').then(m => m.CarsModule),
};