import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: any[];
  constructor(private http: Http) { }

  getMovies(){
    return this.http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=09589e5cfce97835555c3e63099f2438&language=en-US&page=1");
  }

  getMovie(id){
    console.log(id);
    return this.http.get("https://api.themoviedb.org/3/movie/" + id +"?api_key=09589e5cfce97835555c3e63099f2438&language=en-US");

  }
}
