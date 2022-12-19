import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Trip } from 'src/app/models/trip';
import { User } from 'src/app/models/user';
import { AuthResponse } from 'src/app/models/authresponse';
import { BROWSER_STORAGE } from 'src/app/storage'; 

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(private http: HttpClient,
     @Inject(BROWSER_STORAGE) private storage: Storage) { }

  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}trips/`

  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    return this.http
      .get(`${this.apiBaseUrl}trips`)
      .toPromise()
      .then(response => response as Trip[])
      .catch(this.handleError);
  }

  public getTrip(tripCode: String): Promise<Trip> {
    console.log('Inside TripDataService#getTrip(tripCode)');
    return this.http
      .get(this.tripUrl + tripCode)
      .toPromise()
      .then(response => response as Trip[])
      .catch(this.handleError);
  }

  public addTrip(formData: Trip): Promise<Trip> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization' :  `Bearer ${this.storage.getItem('travlr-token')}`
      })
    };

    console.log('Inside TripDataService#addTrip');
    return this.http
      .post(this.tripUrl, formData, httpOptions)
      .toPromise()
      .then(response => response as Trip[])
      .catch(this.handleError);
  }

  public updateTrip(formData: Trip): Promise<Trip> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization' :  `Bearer ${this.storage.getItem('travlr-token')}`
      })
    };

    console.log('Inside TripDataService#updateTrip');
    return this.http
      .put(this.tripUrl + formData.code, formData, httpOptions)
      .toPromise()
      .then(response => response as Trip[])
      .catch(this.handleError);
  }
  
  public deleteTrip(tripCode: String): Promise<Trip> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization' :  `Bearer ${this.storage.getItem('travlr-token')}`
      })
    };

    console.log('Inside TripDataService#deleteTrip(tripCode)');
    return this.http
      .delete(this.tripUrl + tripCode, httpOptions)
      .toPromise()
      .then(response => response as Trip[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('There has been an error:', error);
    return Promise.reject(error.message || error);
  }

  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }
  
  private makeAuthApiCall(urlPath: string, user: User):
    Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then(response => response as AuthResponse)
      .catch(this.handleError);
  }
    
}
