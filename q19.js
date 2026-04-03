"use strict";
class Institute {
}
class School extends Institute {
    institution;
    constructor(institution) {
        super();
        this.institution = institution;
    }
    getInstitutionType() {
        console.log(`institution is ${this.institution}`);
    }
}
const s = new School("school");
s.getInstitutionType();
