import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

   

  constructor(private http:HttpClient) { 
    this.http = http;
  }

  getTrendingGifs() {
    return this.http.get(`http://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApiKey}&limit=50`);

  }

  searchGifs(search:string) {
    return this.http.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${environment.giphyApiKey}&limit=50`);

  }
}


