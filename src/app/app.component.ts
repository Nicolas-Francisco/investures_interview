import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public isLoad:boolean= false;

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    // this.propertys = <Property[]>await this.propertyProvider.getAll(0,1,this.lat,this.lng).toPromise();
    // this.region = <Region[]> await this.regionProvider.getAll().toPromise();
    // this.isLoad = true;
  }
}
