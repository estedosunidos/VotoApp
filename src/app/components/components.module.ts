import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficaBarraHorizotalComponent } from './grafica-barra-horizotal/grafica-barra-horizotal.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLinkWithHref, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    GraficaBarraHorizotalComponent
  ],
  exports:[
    NavbarComponent,
    GraficaBarraHorizotalComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    RouterModule
  ]
})
export class ComponentsModule { }
