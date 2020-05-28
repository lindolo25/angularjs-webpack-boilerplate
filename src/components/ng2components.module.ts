import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { GithubProfile } from './profile/profile.component';
import { GithubRepo } from './repo/repo.component';

const components = [ GithubProfile, GithubRepo ]

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: components,
    entryComponents: components
})
export class ComponentsModule {}