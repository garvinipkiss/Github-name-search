import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github/github.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class accountComponent implements OnInit {
  user:any=[];
  repos:any=[];
  username:string;
  constructor(private _githubService: GithubService) {
    this._githubService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    })
    this._githubService.getRepos().subscribe(repos => {
      //console.log(user);
      this.repos = repos;
    })
  }
  ngOnInit() {
  }
   searchUser(){
     this._githubService.updateUser(this.username);
     this._githubService.getUser().subscribe(user => {
       this.user = user;
     })
     //console.log('It works');
     this._githubService.getRepos().subscribe(repos => {
       //console.log(user);
       this.repos = repos;
     })

   }
}
