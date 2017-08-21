import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GitHubServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GitHubServiceProvider {

  githubInfo:any[] = []
  apiLink:any = "https://api.github.com/users/"

  constructor(public http: Http) {

  }

  cargarRepos(usuario:string){
      return new Promise((resolve, reject)=> {
        var link:string = this.apiLink + usuario + "/repos"
        this.http.get(link).map(res=>res.json()).subscribe(
          data => {
            this.githubInfo = data
            resolve(this.githubInfo)
          })
    })}

    buscarUsuario(usuario:string){
        return new Promise((resolve, reject)=> {
          var link:string = this.apiLink + usuario
          this.http.get(link).map(res=>res.json()).subscribe(
            data => {
              this.githubInfo = data
              resolve(this.githubInfo)
            })
    })}
}
