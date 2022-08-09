import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component'
const routes: Routes = [
  {path:'experiencia',component: ExperienciaComponent},
  {path:'proyectos',component: ProyectosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
