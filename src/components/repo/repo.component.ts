import { Component, Input } from '@angular/core';
import tempate from './repo.view.html';
import { IGithubRepo } from '../../interfaces/IGithub';

@Component({
    selector: 'github-repo',
    template: tempate
})
export class GithubRepo {

    @Input() repo: IGithubRepo;

    constructor() {}

}