//learning json  
/* syntax
1. Json array
"employees":[
	{"firstName":"John","lastName":"Doe"}
	{"firstName":"Annah","lastName":"Smith"},
	{"firstName":"Peter","lastName":"Jones"}
]

2. Data
"school":"RVIBS"

3. Object
{"County":"Nakuru","leader":"Susan"}
*/

let data = '{"name":"Jamoh"}';
let value = JSON.parse(data);
console.log(JSON.parse(data));
JSON.parse(data);
console.log(value.name);

let theObject = {
   name : "Mshindi",
   lname : "Ogamba",
   age : 54,
   fullName : function (){return this.name + this.lname}
};
let intoJson = JSON.stringify(theObject);
console.log(intoJson);
//note that JSON.stringify() eliminates functions ???
console.log(theObject.fullName());
//that can be avoided by converting the function into a string first
theObject.fullName = theObject.fullName.toString();
intoJson = JSON.stringify(theObject);
console.log(intoJson);