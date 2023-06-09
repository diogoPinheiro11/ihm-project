import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

interface Movies {
    id: string;
    genre: string;
    rating: string;
    img: string;
    cast: string;
};

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  public dataMovies: Movies[] = [];

  constructor(private router: Router, private alerta: AlertController) {
  }
  
  ngOnInit() {
      fetch('./assets/data/movies.json')
      .then(res => res.json())
      .then(json => {
        this.dataMovies = json;
      });
  }

  goMovie(movie:Movies) {
    this.router.navigate(['/movie', movie.id]);
  }
}
