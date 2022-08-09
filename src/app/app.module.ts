import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { MenuComponent } from './components/menu/menu.component';
import { BarrainicioComponent } from './components/barrainicio/barrainicio.component';
import { HeaderComponent } from './components/header/header.component';
import { FotodeperfilComponent } from './components/fotodeperfil/fotodeperfil.component';
import { DatosComponent } from './components/datos/datos.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SoftwareComponent } from './components/software/software.component';
import { IdiomasComponent } from './components/idiomas/idiomas.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienciaComponent,
    MenuComponent,
    BarrainicioComponent,
    HeaderComponent,
    FotodeperfilComponent,
    DatosComponent,
    EducacionComponent,
    SkillsComponent,
    SoftwareComponent,
    IdiomasComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
