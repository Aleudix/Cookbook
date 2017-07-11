import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {LoginComponent} from "./Account/Login-component";
import {RegisterComponent} from "./Account/Register-component";
import {HomeComponent} from "./Home-component";
import {RecipesComponent} from "./Recipies/Recipes-component";

import {AppRoutingModule} from "./app.routing";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        RecipesComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}