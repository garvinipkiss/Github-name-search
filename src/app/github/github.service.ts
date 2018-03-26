import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import {User} from '../user'
import {Repos} from '../repos'
import {environment} from '../../environments/environment'
import 'rxjs'

@Injectable()
export class GithubService {
//  private apiUrl :string = environment.apiUrl;
  username:string;

  constructor(private _http: HttpClient){
    console.log('Github Service Ready...');
    this.username =  'garvinipkiss';

  }
  getUser(){
    return this._http.get("https://api.github.com/users/"+this.username)
    .map(result=>result)

  }
  getRepos(){
    return this._http.get("https://api.github.com/users/"+this.username+'/repos')
    .map(result=>result)
}
updateUser(username:string){
  this.username = username;
}
}
