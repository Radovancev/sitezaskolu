import { AboutComponent } from './app/about/about.component';
import { MoviesComponent } from './app/movies/movies.component';
import { PortfolioComponent } from './app/portfolio/portfolio.component';
import { Routes } from '@angular/router';
import { SinglemovieComponent } from './app/singlemovie/singlemovie.component';


export const appRoutes: Routes = [
        {
          path: '',
          component: MoviesComponent
        },
        {
          path: 'portfolio',
          component: PortfolioComponent
        },
        {
          path: 'movies',
          component: MoviesComponent
        },
        {
          path: 'about',
          component: AboutComponent
        },
        {
          path: 'movie/:id',
          component: SinglemovieComponent
        }
      
];