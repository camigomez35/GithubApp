import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { GitHubServiceProvider } from "../../providers/git-hub-service/git-hub-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GitHubServiceProvider]
})
export class HomePage {

  repos:any
  user:any

  constructor(public navCtrl: NavController, private _ghService: GitHubServiceProvider,
              public navParams: NavParams) {
      this.user = this.navParams.get('user');
      this.callInfo()
  }

  callInfo(){
    this._ghService.cargarRepos(this.user).then( (response) => {
      this.repos = response
    })
  }
}
