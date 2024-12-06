import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { CommonModule } from '@angular/common';  // For ngIf and ngFor
import { HttpClientModule } from '@angular/common/http';  // For HttpClient

@Component({
  selector: 'app-subscription',
  standalone: true,
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
  imports: [HttpClientModule, CommonModule]  // Import necessary modules
})
export class SubscriptionComponent {
  subscriptionPlans = [];  // Array to store subscription plans
  errorMessage: string = '';  // For displaying errors
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchSubscriptionPlans();  // Fetch the plans when the component initializes
  }

  // Method to fetch subscription plans
  fetchSubscriptionPlans() {
    this.http.get('http://localhost:3004/subscription-plans')
      .pipe(
        catchError(error => {
          this.errorMessage = 'Failed to load subscription plans.';
          console.error('Error fetching subscription plans:', error);
          throw error;
        })
      )
      .subscribe((response: any) => {
        this.subscriptionPlans = response.plans;  // Access the 'plans' property
      });
  }
}
