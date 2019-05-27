var counterPart = (function(){
	var counter = 0;

	return {
		reset : function(){
			counter = 0;
			this.display();
		},

		increase : function(){
			counter ++;
			this.display();
		},

		decrease : function(){
			counter --;
			this.display();
		},

		display : function(){
			console.log("Counter value is", counter);
		}
	}
}());

counterPart.display();
counterPart.increase();
counterPart.increase();
counterPart.reset();
counterPart.decrease();
counterPart.decrease();
counterPart.reset();

