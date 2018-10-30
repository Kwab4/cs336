// Exercise 2.1 - Encapsulation
// Person object prototype
function Person(name, birthdate, friends, greeting) {
	this.name = name;
	this.birthdate = birthdate;
	this.friendsList = friends;
	this.greeting = greeting;
}

// Name change
Person.prototype.changeName = function(newName) {
	this.name = newName;
}

// Age accessor
Person.prototype.computeAge = function() {
	var today = new Date();
	var birthdate = new Date(this.birthdate);
	var currentAge = today.getFullYear() - birthdate.getFullYear();
	var ageByMonth = today.getMonth() - birthdate.getMonth();
	if (ageByMonth < 0 || ageByMonth === 0 && today.getDate() < birthDate.getDate()) {
		currentAge--;
	}
	return "Age: " + currentAge;
}

// Add a new friend
Person.prototype.addFriend = function(friendName) {
	this.friendsList.push(friendName);
}

// Print a greeting
Person.prototype.printGreeting = function() {
	return this.greeting;
}

// implementation
var frens = ["Megan", "Derek",  "Lauren"];
var p1 = new Person("Joshua wilson", "1996/11/15", frens, "What's up, dawg?");
console.log(p1);
p1.changeName("Toussaint");
console.log(p1);
console.log(p1.computeAge());
p1.addFriend("Lauren");
console.log(p1);
console.log(p1.printGreeting());


// Exercise 2.2 - Inheritance and Polymorphism
// Student sub-class
function Student(name, birthdate, friends, greeting, major) {
	Person.call(this, name, birthdate, friends, greeting);
	this.major = major;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.printGreeting = function() {
	return this.greeting;
}

var frens2 = ["Ama", "Efua", "Pricislla"];
var s1 = new Student("Jose Njietes", "1996/04/20", frens2, "Hello, I am a Calvin student.", "Computer Science");
console.log(s1);
console.log(s1.printGreeting())
console.log(s1.computeAge());
s1.addFriend("Maydi");
console.log(s1);
console.log(s1 instanceof Person);
