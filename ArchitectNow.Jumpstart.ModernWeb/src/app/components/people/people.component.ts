import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { PersonService } from "../../services/personService";
import { Person } from "../../models/person";
import { PersonResults } from "../../models/personResults";


@Component({
    template: require('./people.component.html'),
    styles: [
        require('./people.component.scss')
    ]

})
export class PeopleComponent implements OnInit {

    searchFilter: string = "";
    results: PersonResults;
    errMsg: string = "";
    isLoading: boolean = false;

    constructor (private _peopleService: PersonService, private _router: Router) {

    }

    ngOnInit() {
        this.search();
    }

    search() {
        this.isLoading = true;
        this._peopleService.getPeople(this.searchFilter).subscribe(data => {
            //Success
            this.results = data;
        },
        err => {
            //Error
            this.errMsg = err;
        }, () => {
            //Finally
            this.isLoading=false;
        })
    }

    nextPage() {
        this.isLoading = true;
        this._peopleService.getPage(this.results.next).subscribe(data => {
            //Success
            this.results = data;
        },
        err => {
            //Error
            this.errMsg = err;
        }, () => {
            //Finally
            this.isLoading=false;
        })
    }

    previousPage() {
        this.isLoading = true;
        this._peopleService.getPage(this.results.previous).subscribe(data => {
            //Success
            this.results = data;
        },
        err => {
            //Error
            this.errMsg = err;
        }, () => {
            //Finally
            this.isLoading=false;
        })
    }

    previousEnabled() : boolean {
        if (!this.results || !this.results.previous)
        {
            return false;
        }

        return true;
    }

    nextEnabled() : boolean {
        if (!this.results || !this.results.next)
        {
            return false;
        }

        return true;
    }

    editPerson(person: Person) {
        this._router.navigate(["/app/personEdit",person]);
    }
}