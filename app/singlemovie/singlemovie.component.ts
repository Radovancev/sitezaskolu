import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
@Component({
  selector: 'app-singlemovie',
  templateUrl: './singlemovie.component.html',
  styleUrls: ['./singlemovie.component.css'],
  animations: [
    trigger('MoviesBlock',[
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.3)'
      })),

      transition('small <=> large', animate('300ms ease-in',keyframes([
        style({opacity:0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity:1, transform: 'translateY(35px)', offset: .5}),
        style({opacity:1, transform: 'translateY(0)', offset: 1})
      ]))),
    ]),
  ]
})
export class SinglemovieComponent implements OnInit {
  
  state: string='small'
  
  private movieUrl='';
  private movie:any;
  constructor(private route: ActivatedRoute, private Service: MovieService) { }

  ngOnInit() {
    this.movieUrl = this.route.snapshot.params['id'];
    this.Service.getMovie(this.movieUrl).subscribe(data => {
      this.movie = data.json();
    });
  }

  animate(){
    this.state=(this.state === 'small' ? 'large': 'small');
  }

}


