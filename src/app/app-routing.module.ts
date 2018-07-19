import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BoardComponent } from './board/board.component';
import { AppComponent } from './app.component';

const routes: Routes = [
 { path: 'main', component: MainComponent},
 { path: '', component: AppComponent },
 { path: 'board', component: BoardComponent},
 { path: '', redirectTo: '/board', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
