import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { Trip } from 'src/app/models/trip';
import { TripDataService } from 'src/app/services/trip-data.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {

  @Input('trip') trip: any;

  constructor(
    private router: Router,
    private tripService: TripDataService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  private editTrip(trip: Trip): void {
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(['edit-trip']);
  }

  private deleteTrip(trip: Trip): void {
    this.tripService.deleteTrip(trip.code);
    window.location.reload();
  }

}
