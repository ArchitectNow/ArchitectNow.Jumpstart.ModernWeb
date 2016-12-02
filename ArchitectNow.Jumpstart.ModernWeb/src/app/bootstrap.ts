import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";

//Initialize Angular 2 and give it the first module we'll use
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch((err: any) => console.error(err));  

 
