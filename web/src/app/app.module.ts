import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';

const ROUTES = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  }
];

//@NgModule=> consolidate features belong together
//takes meta data object describin how to compile and run module.
//1) define own components, directives, pipes
//2) make some of them public ( so external components can ue them)
@NgModule({
  declarations: [ //declare components  directives, pipes of belongs to current module. then Each know others
    AppComponent,
    PostsComponent
  ],
  imports: [                    //other modules which can be used in this module(set of components & services)
    BrowserModule,              //BrowserModule should be added in root module imports
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app

  ],
  providers: [PostsService], // inject services required by components(DI)
  bootstrap: [AppComponent]  ///the componentd that angular creates and insert into index.html, at first load
})
export class AppModule { }
