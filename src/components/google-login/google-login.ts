import { Component } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs/Observable';

import { GooglePlus } from '@ionic-native/google-plus';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the GoogleLoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'google-login',
  templateUrl: 'google-login.html'
})
export class GoogleLoginComponent {

  user: Observable<firebase.User>;


  constructor(private afAuth: AngularFireAuth,
    private gplus: GooglePlus,
    private platform: Platform) {

      this.user = this.afAuth.authState;
  }
googleLogin(){
  if (this.platform.is('cordova')) {
    this.nativeGoogleLogin();

  }
}
async nativeGoogleLogin(): Promise<firebase.User> {
  try {
    const gplusUser = await this.gplus.login({
      'webClient': '807189974100-36lf8k85hfr79gfb9q35diibr1ev9tlm.apps.googleusercontent.com',
      'offline': true,
      'scopes': 'profile email'
    })
    return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken))

  } catch(err) {
    console.log(err)
  }

}


  }






