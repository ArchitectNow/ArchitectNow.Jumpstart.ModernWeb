import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { Person } from "../../models/person";

@Component({
    selector: 'person-row',
    template: require('./personRow.component.html'),
    styles: [
        require('./personRow.component.scss')
    ],
})
export class PersonRowComponent implements OnInit {

    @Input()
    person: Person;

    @Output() 
    onEdit = new EventEmitter<Person>();

    ngOnInit() {

    }

    editPerson() {
        this.onEdit.emit(this.person);
    }
}
