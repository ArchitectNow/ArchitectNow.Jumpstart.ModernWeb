import { Component } from "@angular/core";
import { NgRedux, DevToolsExtension } from "ng2-redux";

import { RootReducer } from "./store/reducers/RootReducer";
import { IAppState } from "./store/IAppState";

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    styles: [ require('./app.component.scss')]
})
export class AppComponent {

    constructor(private _ngRedux: NgRedux<IAppState>,
                 private _devTools: DevToolsExtension) {

        var initialStae = {} as IAppState;
        let enhancers = [];
        if (process.env.ENV === 'development' && this._devTools.isEnabled()) {
            enhancers = [...enhancers, this._devTools.enhancer()];
        }
        this._ngRedux.configureStore(RootReducer, initialStae, [], enhancers);
    }
}