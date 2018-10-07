import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { FeedPage }  from '../pages/feed/feed';
import { CommentsPage } from '../pages/comments/comments';
import { Camera } from '@ionic-native/camera';
import { Firebase } from '@ionic-native/firebase'

import firebase from 'firebase';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ComponentsModule } from '../components/components.module';
import { GooglePlus } from '@ionic-native/google-plus'; // We'll install this in the next section


var config = {
  apiKey: "AIzaSyBM5QH4XHBHWgTabBZO3peGpZi3Z-0D_d8",
    authDomain: "exposureapp-9e773.firebaseapp.com",
    databaseURL: "https://exposureapp-9e773.firebaseio.com",
    projectId: "exposureapp-9e773",
    storageBucket: "exposureapp-9e773.appspot.com",
    messagingSenderId: "807189974100"
};





firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true
})

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    FeedPage,
    CommentsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config), // <-- firebase here
    AngularFireAuthModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    FeedPage,
    CommentsPage
  ],
  providers: [
    GooglePlus,
    StatusBar,
    SplashScreen,
    Camera,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
