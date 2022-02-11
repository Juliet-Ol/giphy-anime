import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../giphy-service/giphy.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
  gifs:any[] = [];

  search: string = '';

  constructor(private giphyService: GiphyService) { }

  ngOnInit(): void {
    this.giphyService.getTrendingGifs()
      .subscribe((response: any)=>{
        this.gifs = response.data;
        
      });
  }

  searchAction(){
    console.log(this.search)
    this.giphyService.searchGifs(this.search)
      .subscribe((response: any)=>{
        this.gifs = response.data;
      });
  }
}
