// Purpose - to access properties of objects without extra keywords

const personalInformation = {
    firstName: "Sudeepto",
    lastName: "Bose",
    state: "Dhaka",
    country: "Bangladesh"
}

// Each property can be accessed without using personalInformation. 

const { firstName, lastName, state, country} = personalInformation;

console.log(`${firstName} ${lastName} ${state} ${country}`);

// Each property can also be assigned a shorthand notation

const { firstName:fn, lastName:ln, state:st, country:ct} = personalInformation;

console.log(`${fn} ${ln} ${st} ${ct}`);
