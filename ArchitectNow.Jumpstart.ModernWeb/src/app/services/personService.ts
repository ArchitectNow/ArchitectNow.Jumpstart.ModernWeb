import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { NgRedux, DevToolsExtension } from "ng2-redux";
import { IAppState } from "../store/IAppState";

import { Person } from "../models/person";
import { PersonResults } from "../models/personResults";
import { PersonSearchReducerActions } from "../store/reducers/PersonSearchReducer";

@Injectable()
export class PersonService {
    readonly rootUrl: string = "http://swapi.co/api/";

    constructor(private _http: Http,
                private _ngRedux: NgRedux<IAppState>) {

    }

    private buildUrl(searchFilter: string) : string {
        if (!searchFilter)
        {
            return this.rootUrl + "people";
        }

        return this.rootUrl + "people/?search=" + searchFilter;
    }

    getPeople(filter: string = ""): Observable<PersonResults> {
        return this._http.get(this.buildUrl(filter)).map(this.extractData)
            .catch(this.handleError);
    }

    getPage(url: string) : Observable<PersonResults> {
        return this._http.get(url).map(this.extractData)
            .catch(this.handleError);
    }

    setLastResults(results: PersonResults) {
        this._ngRedux.dispatch({ type: PersonSearchReducerActions.UpdateResults, payload: results });
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
        errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}