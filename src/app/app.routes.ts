import { Routes } from '@angular/router';
import { ListaPostsComponent } from './pages/lista-posts/lista-posts.component';
import { FormularioComponent } from './pages/formulario/formulario.component';

export const routes: Routes = [
  { path: 'posts', component: ListaPostsComponent },
  { path: 'new', component: FormularioComponent }
];
