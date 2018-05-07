import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SayLightComponent } from './say-light/say-light.component';
import { SayDynamicBoldComponent } from './say-dynamic-bold/say-dynamic-bold.component';
import { RouterModule, Routes } from '@angular/router';

const MyRoutes : Routes = [
  {path : 'saylight', component : SayLightComponent},
  {path : 'saydynamicbold/:name', component : SayDynamicBoldComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SayLightComponent,
    SayDynamicBoldComponent
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot(
      MyRoutes,
      { enableTracing: true } // <-- debugging purposes only
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
