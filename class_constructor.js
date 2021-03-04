// Constructors are called when an object of a class is created
// Constructors can have parameters or have no parameters

class Intern{


	constructor(a,b){
		this.firstNumber = a;
		this.secondNumber = b;
	}

	add(){
		let result = this.firstNumber + this.secondNumber;
		console.log(result);
	}
}

// Create new object and call method

var Sudeepto = new Intern(10,15);
Sudeepto.add();