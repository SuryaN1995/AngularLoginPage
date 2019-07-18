import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GoogleSignInSuccess} from 'angular-google-signin';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private myClientId: string = '140259266440-mcm6vgcqv442ogjpob4n5e0h0p1pi8k5.apps.googleusercontent.com';
    constructor(private router: Router) { }
    username: string;
    password: string;
    
    ngOnInit() {


    }

    login(): void {

    }

    onGoogleSignInSuccess(event: GoogleSignInSuccess) {
        let googleUser: gapi.auth2.GoogleUser = event.googleUser;
        let id: string = googleUser.getId();
        let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
        console.log('ID: ' +
          profile
            .getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
      }
}