import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GitHubServiceProvider } from "../../providers/git-hub-service/git-hub-service";

import { HomePage } from "../home/home";
/**
 * Generated class for the MiPerfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-mi-perfil',
  templateUrl: 'mi-perfil.html',
  providers: [GitHubServiceProvider],
})
export class MiPerfilPage {

  username:string = ""
  userInfo:any
  repos:any = HomePage
  exist:boolean = false

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private _ghService: GitHubServiceProvider) {
  }

  buscarUsuario(){
    this._ghService.buscarUsuario(this.username).then( (response) => {
      this.exist = true
      this.userInfo = response
    }).catch( (err) => {
      this.exist = false
    })
  }

}
