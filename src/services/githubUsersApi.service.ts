import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class GithubUsersApiService {

    url = 'https://api.github.com/users';

    constructor (private http: HttpClient) {
        console.log('error');
    }

    getUser (username: string): Promise<any> {
        return this.http.get(`${this.url}/${username}`)
            .toPromise()
            .then(res => {
                return res;
            });
    }
}