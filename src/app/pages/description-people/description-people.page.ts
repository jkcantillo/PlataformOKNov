import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description-people',
  templateUrl: './description-people.page.html',
  styleUrls: ['./description-people.page.scss'],
})
export class DescriptionPeoplePage implements OnInit {

people:any;

  constructor(private miRouted:ActivatedRoute, private miPeopleSer:SwapiService) { }

  ngOnInit() {
    this.miRouted.paramMap.subscribe((params)=>{
      let id = params.get('id');
      console.log(id);
      this.people= this.miPeopleSer.getSwapi(`people/${id}`).subscribe(data=>{
        this.people=data;
        console.log(data);
      });
    });


   
  }

}
