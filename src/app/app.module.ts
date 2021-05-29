import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importar RouterModule
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { Menu1Component } from './componentes/menu1/menu1.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { BodyComponent } from './componentes/body/body.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { P001Component } from './proyectos/p001/p001.component';
import { HomepageComponent } from './homepage/homepage.component';

//Path de Rutas
const appRoutes: Routes = [

{ path: '', component: HomepageComponent},
{ path: 'p001', component: P001Component},
{ path: '', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    Menu1Component,
    PortadaComponent,
    BodyComponent,
    FooterComponent,
    ContactoComponent,
    P001Component,
    HomepageComponent,
    

   
  ],
  imports: [
    BrowserModule,
    
    //importando el path
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
