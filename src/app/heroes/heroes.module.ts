import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListComponent } from './list/list.component';
import { HeroComponent } from './hero/hero.component';




@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,


  ],
  exports: [HeroComponent,ListComponent],
  // cuando se utiliza ngif o else o switch hay que importar
  // el CommonModule, sino lanzará un error y no funcionará
  // la logica
  imports: [CommonModule]

})
export class HeroesModule { }
