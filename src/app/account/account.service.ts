import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Details } from '../details'
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { Http, Response} from '@angular/http';

@Injectable()
export class GithubService {
  constructor(private _http:HttpClient) { }
//   getDetails(){
//     return this._http.get("")
//     .map(result => result);
// }
apiUrl=environment.apiUrl;
token=environment.apikey;
userName='';
  details:Details;
searchUser(){
return this._http.get(this.apiUrl+this.userName +"?access_token="+this.token)
.map(result => result);
}
}
