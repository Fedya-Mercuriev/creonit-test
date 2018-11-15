function CaloriesAndSteps () {
	this.caloriesElem = $('.js-calories-burnt'),
	this.distanceElem = $('.js-walk-distance'),
	this.calories = 0,
	this.distance = 0,
	this.calculateDistance = function() {
		this.distance += 1;
	},
	this.calculateCalories = function() {
		this.calories += 0.9;	
	},
	this.render = function() {
		setInterval($.proxy(function() {
			this.calculateDistance();
			this.calculateCalories();
			this.caloriesElem.html(this.calories.toFixed(1));
			this.distanceElem.html(this.distance);
		}, this), 1000)
	}
}

var calsAndMetrsTabloid = new CaloriesAndSteps();
calsAndMetrsTabloid.render();