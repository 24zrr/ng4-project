import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  
    @Input() private rating:number = 0;

    private stars:boolean[]


    constructor() { }

    ngOnInit() {
        this.stars = []
        for(var i = 0 ;i < 5; i++){
            this.stars.push(Boolean(i > this.rating))
        }
    }
}
