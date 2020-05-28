import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IGithubUser } from '../interfaces/IGithub';

@Injectable()
export class GithubUsersApiService {

    private url = 'https://api.github.com/users';

    constructor (private http: HttpClient) {
        console.log('error');
    }

    getUser (username: string): Promise<IGithubUser> {
        return this.http
            .get(`${this.url}/${username}`)
            .toPromise()
            .then(this._formatUser);
    }

    private _formatUser(user: any) : IGithubUser {
        return <IGithubUser> {
            avatarUrl: user.avatar_url,
            company: user.company,
            location: user.location,
            login: user.login,
            name: user.name
        }
    }
}