function Button(text) {
	this.text = text || "Hello";
}

Button.prototype = {
	create: function() {
	var self = this;
	this.$element = $("<button>");
	this.$element.text(this.text);
	this.$element.click(function() {
		alert(self.text);
	});
	$(".container").append("<br>", this.$element);
	}
}

var btn1 = new Button("Hello!");
btn1.create();

var btn2 = new Button("Keep learning!");
btn2.create();

var btn3 = new Button();
btn3.create();