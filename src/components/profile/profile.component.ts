import { Component, Input } from '@angular/core';
import { IGithubUser } from '../../interfaces/IGithub';
import tempate from './profile.view.html';

@Component({
    selector: 'github-profile',
    template: tempate
})
export class GithubProfile {

    @Input() user: IGithubUser;

    constructor () {}
}