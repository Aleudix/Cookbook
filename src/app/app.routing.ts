import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./Account/Login-component";
import {RegisterComponent} from "./Account/Register-component";
import {HomeComponent} from "./Home-component";
import {RecipesComponent} from "./Recipies/Recipes-component";

const routes: Routes = [
    {path: "", redirectTo: "/login", pathMatch: "full"},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {
        path: "home", component: HomeComponent,
        children: [
            {path: "page1", component: RecipesComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
