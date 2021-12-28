import { Component, OnInit } from '@angular/core';
import { ShibaService } from '../services/shiba.service';

@Component({
  selector: 'app-shiba',
  templateUrl: './shiba.component.html',
  styleUrls: ['./shiba.component.css']
})
export class ShibaComponent implements OnInit {

  shibaPictures$: any;
  //shibaPictures$: Observable<string[]>;
  constructor(
    private shibaService: ShibaService,
  ) {
    this.getShibas();
  }

  ngOnInit(): void {
  }

  getShibas() {
    this.shibaPictures$ = undefined

    this.shibaService.fetch().subscribe((data: string[]) => {
      this.shibaPictures$ = data
    }, error => {
      this.onError(error)
    })
  }



  onError(errorMsg: string) {
    console.log(errorMsg);
  }

}
