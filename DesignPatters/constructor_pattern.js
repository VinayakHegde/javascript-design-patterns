function defineProperty(obj, prop, value){
	var desc = {
		value : value,
		writable : true,
		enumerable : true,
		configurable : true
	};

	Object.defineProperty(obj, prop, desc);
}

function propertyDescriptor(obj, prop){
	var propertyDesc = Object.getOwnPropertyDescriptor(obj, prop);

	console.log("Descriptor of the property", '"' + prop + "\"\n", propertyDesc);
}

function isPropertyEnumerable(obj, prop){
	var isEnumerable = obj.propertyIsEnumerable(prop);

	console.log("Is", '"' + property + "\" enumerable?\n", isEnumerable);
}

function propertyNames(obj){
	var propNames = Object.getOwnPropertyNames(obj);

	console.log("Properties of the object are :", propNames);
}

var person = new Object(Object.prototype); 
var country = "India";

Object.defineProperties(person, {
	"gender" : {
		value : "male",
		writable : true,
		enumerable : true,
		configurable : false
	},
	"name" : {
		value : "Vinnie",
		writable : true,
		enumerable : true,
		configurable : false
	},
	"dob" : {
		value : "05-Oct-1985",
		writable : true,
		enumerable : true,
		configurable : false
	},
	"country" : {
		enumerable : true,
		get : function () {
			return country;
		},
		set : function (newCountry) {
			country = newCountry;
		}
	}
});


var programmer = Object.create(person);

defineProperty(programmer, "langs", "JS, HTML, CSS");

