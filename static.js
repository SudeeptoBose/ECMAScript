// Objects are able to call methods that aren't static
// Once a static method is declared, it cannot be called by the object
// Only the class is able to access the static method

class Intern{

	static greeting(){
		console.log("Greetings!");
	}
}



var Sudeepto = new Intern();

// This line will create an error since its an object trying to access static method
// Sudeepto.greeting(); 
// Uncomment the above line to view error
// If you remove static keyword then object can access method but the class can't

Intern.greeting();
