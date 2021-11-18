import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description-starships',
  templateUrl: './description-starships.page.html',
  styleUrls: ['./description-starships.page.scss'],
})
export class DescriptionStarshipsPage implements OnInit {

starships:any;  

  constructor(private miRoute3:ActivatedRoute, private miServ:SwapiService) { }

  ngOnInit() {
    this.miRoute3.paramMap.subscribe((params)=>{
      let id = params.get('id');
      console.log(id);
      this.starships = this.miServ.getSwapi(`starships/${id}`).subscribe(data=>{
        this.starships=data;
        console.log(data);
      });
    });



  }

}
