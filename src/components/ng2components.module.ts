import { NgModule } from "@angular/core";
import { GithubProfile } from './profile/profile.component';

const components = [ GithubProfile ]

@NgModule({
    declarations: components,
    entryComponents: components
})
export class ComponentsModule {}