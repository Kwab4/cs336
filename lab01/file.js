

// definition of person object
function Person(name, birthday) {
    this.name = name;
    this.birthday = birthday;
    this.friends = [];
    this.greeting = 'Hello I am a.... Student....';
}

//change name prototype 
Person.prototype.change_name = function (new_name) {
    this.name = new_name;
}

// prints the greeting 
Person.prototype.print_greeting = function () {
    console.log(this.greeting);
}

// gets the age 
Person.prototype.get_age = function () {
    var today = new Date();
    var birthDate = new Date(this.birthday);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// adds a friend -- we all need them
Person.prototype.add_friend = function (person_object) {
    this.friends.push(person_object);
}

// three people 
var Kafui = new Person("Kafui ", "1995-12-02");
var Tony = new Person('Tony', '1858-07-15'); //this is only a joke
var Alex = new Person('Alex', '1997-09-15');


Gavin.print_greeting();
console.log("Testing Ages \n");
console.log("Kafui Age " + Kafui.get_age());
console.log("Tony  Age " + Tony.get_age());
console.log("Alex  Age" + Alex.get_age());


Gavin.add_friend(Jordan);

// creates student object 
function Student(name, birthday, subject) {
    Person.call(this, name, birthday);
    this.subject = subject;
    this.greeting = "Hi, I'm a Data Analsyt, I think...";
}

Student.prototype = Object.create(Person.prototype);

// returns the right information
var Gavin_the_student = new Student("Kafui ", "1995-12-02", 'CS');
Gavin_the_student.add_friend(Jordan); // friends can be added for students 

console.log(Gavin_the_student.get_age()); // gets the age 
console.log(Gavin_the_student.greeting); // returns the right greeting

console.log(Gavin_the_student.name);

//changing name 
Gavin_the_student.change_name('Jose');

// This confirms the name changer works 
console.log("Name change from Kafui  to: " + Kafui_the_student.name);