import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = '00db48b5e72e42c39f8473efe6f844ac';
  constructor(private httpClient: HttpClient) { }

    public getNews()
    {
      return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
    }
      
}