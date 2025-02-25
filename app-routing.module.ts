import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookcreateComponent } from './bookcreate/bookcreate.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { BookeditComponent } from './bookedit/bookedit.component';

const routes: Routes = [
  {path:"create",component:BookcreateComponent},
  {path:"list",component:BooklistComponent},
  {path:"details/:id",component:BookdetailsComponent},
  {path:"edit/:id",component:BookeditComponent},
  {path:"",component:BooklistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
