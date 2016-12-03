import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ShellComponent } from "./components/shell/shell.component";
import { PeopleComponent } from "./components/people/people.component";
import { AboutComponent } from "./components/about/about.component";
import { PersonEditComponent } from "./components/people/personEdit.component";

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full' },
    {
        path: 'app', component: ShellComponent, children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'people', component: PeopleComponent },
            { path: 'about', component: AboutComponent },
            { path: 'personEdit', component: PersonEditComponent },
        ]}
];
