/* global Module */

/* Magic Mirror 2
 * Module: MMM-Modulebar
 *
 * By Erik Pettersson
 * Based on the TouchNavigation Module by Brian Janssen
 *
 * MIT Licensed.
 */

//var request = require('request');

Module.register("CategoryChoiceAirport",{
	
	requiresVersion: "2.1.0",
	
    defaults: {
        // Allow the module to force modules to be shown (if hidden and locked by another module ex. profile-switcher).
        allowForce: false,
        // Determines if the border around the buttons should be shown.
        showBorder: false,
        // The minimum width for all the buttons.
        minWidth: "0px",
        // The minimum height for all the buttons.
        minHeight: "0px",
        // The location of the symbol relative to the text. Options: left, right, top or bottom
        picturePlacement: "left",
        // The direction of the bar. Options: row, column, row-reverse or column-reverse
        direction: "row",
		// The speed of the hide and show animation.
		animationSpeed: 500,
        // The default button 1. Add your buttons in the config.
        buttons: {
                    "1": {
	                  		module: "The1Airport",
												img:"https://image.flaticon.com/icons/svg/2077/2077099.svg",
												width:"50",
												height:"50",
												text:"제1여객터미널",
                          },
										"2": {
												module: "The2Airport",
												img:"https://image.flaticon.com/icons/svg/2077/2077099.svg",
												width:"50",
												height:"50",
												text:"제2여객터미널",
											},
            }
    },

    // Define required styles.
	getStyles: function(){
		return ["font-awesome.css", "ChoiceAirport.css"];
	},

    // Override dom generator.
    getDom: function() {
        var menu = document.createElement("span");
        menu.className = "modulebar-menu";
        menu.id = this.identifier + "_menu";
        menu.style.flexDirection = this.config.direction;
		// Sends each button to the "createButton" function be created.
		for (var num in this.config.buttons) {
			menu.appendChild(this.createButton(this, num, this.config.buttons[num], this.config.picturePlacement));
        }

        return menu;
    },

	// 버튼 생성
    createButton: function (self, num, data, placement) {
		// span Element 생성
		var item = document.createElement("span");
        // 모듈 id 설정
		item.id = self.identifier + "_button_" + num;
        // 모든 모듈 클래스 지정
		item.className = "modulebar-button";
		//최소의 넓이 높이 지정.
		item.style.minWidth = self.config.minWidth;
        item.style.minHeight = self.config.minHeight;
		// 매직미러에 로드된 모든 모듈들을 호출
		var modules = MM.getModules();
		// 클릭시
		item.addEventListener("click", function () {
			// 모든 모듈체크
			for (var i = 1; i < modules.length; i++) {
				// 현재 모듈 확인
				if (modules[i].name === data.module) {
					var idnr = modules[i].data.identifier.split("_");
					console.log("idnr : "+idnr+"idnum"+data.idnum);
					if (idnr[1] == data.idnum || data.idnum == null) {
						// 모듈이 숨겨져있는 상태일때
						if (modules[i].hidden) {
							// Showurl 설정 확인
							if (data.showUrl != null) {
								//Show url
								fetch(data.showUrl);
								console.log("Visiting show URL: "+data.showUrl);
							}
							//modules[i].show(self.config.animationSpeed, {force: self.config.allowForce});
							// Prints in the console what just happend (adding the ID). 
							console.log("sshowing "+modules[i].name+" ID: "+idnr[1]);
							//한 프레임에 두가지이상의 모듈이 뜨지 않게 하기.
							
							if (modules[i].name == 'The1Airport') {
								console.log("Hiding opend "+ modules[i].name+" ID: "+idnr[1]+"button number"+num);
								
								modules[41].hide(self.config.animationSpeed, {force: self.config.allowForce});
								modules[42].hide(self.config.animationSpeed, {force: self.config.allowForce});
								modules[43].hide(self.config.animationSpeed, {force: self.config.allowForce});
								modules[45].hide(self.config.animationSpeed, {force: self.config.allowForce});
								
								modules[i].show(self.config.animationSpeed, {force: self.config.allowForce});
								
							}
							else if (modules[i].name == 'The2Airport') {
								console.log("Hiding opend "+ modules[28].name+" ID: "+idnr[1]+"button number"+num);
								modules[38].hide(self.config.animationSpeed, {force: self.config.allowForce});
								modules[39].hide(self.config.animationSpeed, {force: self.config.allowForce});
								modules[40].hide(self.config.animationSpeed, {force: self.config.allowForce});
								modules[44].hide(self.config.animationSpeed, {force: self.config.allowForce});
								modules[i].show(self.config.animationSpeed, {force: self.config.allowForce});
								
							}
						}else{
							// 모듈이 켜있는 상태일때 
							modules[i].hide(self.config.animationSpeed, {force: self.config.allowForce});
							console.log("Hiding 1Airport"+modules[i].name+" ID: "+idnr[1]);
							// hideURL이 설정되 있을 때
							if (data.hideUrl != null) {
								fetch(data.hideUrl);
								console.log("Visiting hide URL: "+data.hideUrl);
							}
						}
					}
				}
			}
		});

		// 버튼 배열
        item.style.flexDirection = {
            "right"  : "row-reverse",
            "left"   : "row",
            "top"    : "column",
            "bottom" : "column-reverse"
        }[placement];
		// Sets the border around the symbol/picture/text to black.
        if (!self.config.showBorder) {
            item.style.borderColor = "black";
        }
		// Adds the Font-Awesome symbol if specified.
        if (data.symbol) {
            var symbol = document.createElement("span");
            symbol.className = "modulebar-picture fa fa-" + data.symbol;
			// Sets the size on the symbol if specified.
            if (data.size) {
                symbol.className += " fa-" + data.size;
                symbol.className += data.size == 1 ? "g" : "x";
            }
			// Align the symbol with a margin.
            if (data.text && placement === "left") {
                symbol.style.marginRight = "4px";
            }
			// Adds the symbol to the item.
            item.appendChild(symbol);

		// Adds a picture if specified.
		} else if (data.img) {
            var image = document.createElement("img");
            image.className = "modulebar-picture";
            image.src = data.img;
			// Sets the size of the picture if specified.
            if (data.width)  image.width  = data.width;
            if (data.height) image.height = data.height;
			// Align the picture with a margin.
            if (data.text && placement === "left") {
                image.style.marginRight = "4px";
            }
			// Adds the picture to the item.
            item.appendChild(image);
        }
		// Adds the text if specified.
        if (data.text) {
            var text = document.createElement("span");
            text.className = "modulebar-text";
            text.innerHTML = data.text;
			// Align the text with a margin.
            if ((data.symbol || data.img) && placement === "right") {
                text.style.marginRight = "4px";
            }
			// Adds the text to the item.
            item.appendChild(text);
        }
		// All done. :)
        return item;
	},
});	


