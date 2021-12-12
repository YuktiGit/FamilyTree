import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { MaternalComponent } from './maternal/maternal.component';
import { PaternalComponent } from './paternal/paternal.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  { path: 'details', component: DetailsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'paternals', component: PaternalComponent },
  { path: 'maternals', component: MaternalComponent },
  { path: '', redirectTo: '/details', pathMatch: 'full' },
  { path: '**', component: PhotosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
