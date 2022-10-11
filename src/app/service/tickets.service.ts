import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Ticket } from '../models/req-tickets';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  constructor(private http: HttpClient) { }

  getTickets() {
    return this.http.get<Ticket[]>(`${environment.api}api/Ticket`);
  }
}
