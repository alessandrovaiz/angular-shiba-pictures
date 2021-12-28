import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShibaService {
  private readonly API = 'https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=15&urls=true&httpsUrls=true'

  constructor(private httpClient: HttpClient) { }

   fetch(){
    return this.httpClient.get<string[]>(
      this.API
    ).pipe(
      first(),
      tap(shiba => console.log(shiba))
    );
  }

}
