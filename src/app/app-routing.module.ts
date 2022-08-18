import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { IdiomasComponent } from './components/idiomas/idiomas.component';
const routes: Routes = [
  {path:'experiencia',component: ExperienciaComponent},
  {path:'proyectos',component: ProyectosComponent},
  {path:'educacion',component:EducacionComponent},
  {path: 'skills',component: SkillsComponent},
  {path: 'idiomas', component: IdiomasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
