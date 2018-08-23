
import {NgModule} from '@angular/core';
import {MzInputModule, MzNavbarModule} from 'ngx-materialize';

@NgModule({
  imports: [
    MzNavbarModule,
    MzInputModule
  ],
  exports: [
    MzNavbarModule,
    MzInputModule
  ]
})
export class MaterialModule {
}
