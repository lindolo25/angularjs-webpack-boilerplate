export interface IGithubUser {
    avatarUrl: String;
    company: String;
    location: String;
    login: String;
    name: String;
}

export interface IGithubRepo {
    fork: Boolean;
    forks: Number;
    fullName: String;
    id: Number;
    license: String;
    name: String;
    private: Boolean;
    watchers: Number;
}