var Person = {
		welcome: function(){
			console.log("Welcome " +this.name+"!");
		}, 
		isAdult: function(){
			if (this.age > 17) {
				return true;
			}
		}
	};


	var ann = Object.create(Person);
	ann.name = "Anuoluwapo";
	ann.age = 29;

	ann.welcome();
	if(ann.isAdult()){console.log(ann.name + " can definitely take acohol");}
console.log("=======================================");

	var teeDollar = Object.create(Person);
	teeDollar.name = "Taiye Taiwo";
	teeDollar.age = 27;

	teeDollar.welcome();
	if (teeDollar.isAdult()) {console.log(teeDollar.name+" is " + teeDollar.age+ "years old. She can have sex with any guys of are choice");}
console.log("=======================================");

	var kuttih = Object.create(Person);
	kuttih.name = "Kelvin Uttih";
	kuttih.age = 30;

	kuttih.welcome();
	if (kuttih.isAdult()) {console.log(kuttih.name + " can take beer");}


	function Square(id, size) {
		this.id = id;
		this.size = size;
		this.el = null;
		this.bigger = function(size) {
			if (this.el) {
				this.size += size;
				this.el.style.width = this.size + "px";
				this.el.style.height = this.size + "px";
				return this;
			}
		};
		this.color = function(color) {
			if (this.el) {
				this.el.style.backgroundColor = color;
				return this;
			}
		};
		this.display = function() {
			this.el = document.createElement("div");
			this.el.setAttribute("id", this.id);
			this.el.setAttribute("class", "square");
			this.el.style.width = this.size + "px";
			this.el.style.height = this.size + "px";
			this.el.innerHTML = "<p>" + this.id + "</p>";
			console.log(this.id + " has size " + this.size +
			", and is a " + this.constructor.name);
			document.getElementById("squares").appendChild(this.el);
			return this;
		};
	}
		window.onload = function() {
			var mySquare = new Square("mySquare", 100);
			mySquare.display().color("green");
			mySquare.el.onclick = function() {
				mySquare.bigger(50).color("red");
			};
		};
