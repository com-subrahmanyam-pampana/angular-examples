import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';  // Import HttpClient
import { catchError } from 'rxjs';  // Import catchError for error handling
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [HttpClientModule,FormsModule,CommonModule]  // Add HttpClientModule to imports array
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';  // Variable to hold error message

  constructor(private router: Router, private http: HttpClient) {}

  onLogin() {

  
    const loginData = {
      username: this.username,
      password: this.password
    };
    alert(loginData.password +loginData.username);

    // Make the POST request to the login API
    this.http.post('http://localhost:3004/login', loginData)
      
      .subscribe({
        next: (response) => {
          // On success, navigate to the movies page
          this.router.navigate(['/home']);
        },
        error: (error) => {
          
          // Handle the error case (e.g., invalid credentials)
          console.error('Login failed', error);
        }
      });
  }
}
