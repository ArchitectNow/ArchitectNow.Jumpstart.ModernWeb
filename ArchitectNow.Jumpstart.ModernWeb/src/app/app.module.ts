import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core/src/metadata/ng_module";
import { APP_ROUTES } from "./app.routes";

import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { PeopleComponent } from "./components/people/people.component";
import { PersonRowComponent } from "./components/people/personRow.component";
import { PersonEditComponent } from "./components/people/personEdit.component";

import { ShellComponent } from "./components/shell/shell.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

import { PersonService } from "./services/personService";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        PeopleComponent,
        ShellComponent,
        SidebarComponent,
        PersonRowComponent,
        PersonEditComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(APP_ROUTES)
    ],
    providers: [
        PersonService
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule {
}
