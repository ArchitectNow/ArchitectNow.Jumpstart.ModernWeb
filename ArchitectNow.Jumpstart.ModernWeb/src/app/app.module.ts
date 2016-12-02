import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core/src/metadata/ng_module";

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [

    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule {
}