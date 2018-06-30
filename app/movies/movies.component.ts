
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  tmp  : any;
  movies: any;
  constructor(ms: MovieService) {
    ms.getMovies().subscribe(data =>  {
      this.tmp = data.json() 
      this.movies = this.tmp.results
      console.table(this.movies)
    })
  
  }

}
