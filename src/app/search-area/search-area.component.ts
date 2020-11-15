import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.css']
})
export class SearchAreaComponent implements OnInit {

  githubUserQuery:string;

  constructor() { }
@Output() search = new EventEmitter<any>();

  ngOnInit(): void {
  }

  clicked(){
    this.search.emit(this.githubUserQuery);
  }

}
