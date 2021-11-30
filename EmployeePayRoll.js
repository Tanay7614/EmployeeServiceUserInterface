class Employee {
    _name;
    _profilePic;
    _gender;
    _depatment;
    _salary;
    _note;
    _start_date;
    get start_date() {
        return this._start_date;
    }
    set start_date(value) {
        this._start_date = value;
    }
    get note() {
        return this._note;
    }
    set note(value) {
        this._note = value;
    }
    get salary() {
        return this._salary;
    }
    set salary(value) {
        this._salary = value;
    }
    get depatment() {
        return this._depatment;
    }
    set depatment(value) {
        this._depatment = value;
    }
    get gender() {
        return this._gender;
    }
    set gender(value) {
        this._gender = value;
    }
    get profilePic() {
        return this._profilePic;
    }
    set profilePic(value) {
        this._profilePic = value;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (nameRegex.test(name))
            this._name = name;
        else throw "Name is incorrect";
    }
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.start_date ? "undefined" : this.start_date.toLocaleDateString("en-US", options);
        return 'Name = ' + this.name + ", Gender = " + this.gender + ", ProfilePic = " + this.profilePic +
            ", Department = " + this.depatment + ", Salary = " + this.salary + ", StartDate = " + empDate + ", Note = " + this.note;
    }
}