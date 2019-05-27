var counterPart = (function(){
	var counter = 0;
	function increaseCounter(){
		counter++;
	}
	function decreaseCounter() {
		counter--;
	}
	function resetCounter() {
		counter = 0;
	}
	function displayCounter() {
		console.log("Counter value is", counter);
	}
	return {
		increase : increaseCounter,
		decrease : decreaseCounter,
		reset : resetCounter,
		display : displayCounter
	}
}());

counterPart.display();
counterPart.increase();
counterPart.increase();
counterPart.display();
counterPart.reset();
counterPart.display();
counterPart.decrease();
counterPart.decrease();
counterPart.display();
counterPart.reset();
counterPart.display();