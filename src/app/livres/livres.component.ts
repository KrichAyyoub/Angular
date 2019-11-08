import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.scss']
})
export class LivresComponent implements OnInit {


  listelivres : any[];
  constructor() { }

  ngOnInit() {

  this.listelivres = [
      {titre : 'krich' , prix : 20 , auteur : 'krich'},
      {titre : 'krich' , prix : 20 , auteur : 'krich'},
      {titre : 'krich' , prix : 20 , auteur : 'krich'}
  ];

  }
}
