import { Component } from '@angular/core';

@Component({
  selector: 'pkmn-loader',
  template: `
    <div class="box">
      <div class="container">
        <span class="circle"></span>
        <span class="circle"></span>
        <span class="circle"></span>
        <span class="circle"></span>
      </div>
    </div>
  `,
  styleUrls: ['./loading.scss']

})
export class LoaderComponent {}
