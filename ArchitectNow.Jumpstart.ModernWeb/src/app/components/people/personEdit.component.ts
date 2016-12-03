import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

import { PersonService } from "../../services/personService";
import { Person } from "../../models/person";
import { PersonResults } from "../../models/personResults";

@Component({
    template: require('./personEdit.component.html'),
    styles: [
        require('./personEdit.component.scss')
    ]
})
export class PersonEditComponent implements OnInit {

    person: Person;

    constructor(private _route: ActivatedRoute) {

    }

    ngOnInit() {
        this._route.params.subscribe((person : Person) => {
            this.person = person;
        });
    }
}