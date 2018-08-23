
import {RouterModule, Routes} from '@angular/router';
import {FormularioPostulanteComponent} from './formulario-postulante/formulario-postulante.component';
import {InicioComponent} from './inicio/inicio.component';
import {ModuleWithProviders} from '@angular/core';
import {BuscarComponenteComponent} from './buscar-componente/buscar-componente.component';

const appRoutes: Routes = [
  {path: 'formulario', component: FormularioPostulanteComponent},
  {path: 'buscar', component: BuscarComponenteComponent},
  {path: '', component: InicioComponent},
  {path: '**', component: InicioComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
