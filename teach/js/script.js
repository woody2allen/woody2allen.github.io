(function(window, document) {

function progress(value, radValue) {

const canvas1 = document.querySelector(value),
    width = canvas1.width,
    height = canvas1.height;

var ctx = canvas1.getContext('2d');
ctx.lineWidth = 3;
ctx.strokeStyle = '#c834a7';

var x = width / 2,
    y = height / 2,
    radius = radValue,
    circum = Math.PI * 2,
    start = Math.PI * 1,
    finish = 50,
    curr = 0,
    a, l;

function animate(draw_to) {
  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  ctx.arc(x, y, radius, start, draw_to, false);
  ctx.stroke();

  curr++;
  if (curr < finish + 1) {
    requestAnimationFrame(function () {
      animate(circum * curr / 100 + start);
    });
  }
}

animate();

};

$(".input__variant").mask("9", {placeholder: "" });
$(".result__variant").mask("9?9", {placeholder: "" });

function Move() {
	var firstNum = 7;
	var secondNum = 4;
	var result = firstNum + secondNum;

	$('.first__number').text(firstNum);
	$('.second__number').text(secondNum);

	showFirstInput = function() {
		setTimeout(function() {
			$('.first__variant').addClass("visible");
		}, 1000);
	}

	showSecondInput = function() {
		setTimeout(function() {
			$('.second__variant').addClass("visible");
		}, 1000);
	}

	showFirstCanvas = function() {
		progress("#canvas1", 135);
	}

	showSecondCanvas = function() {
		progress("#canvas2", 78);
	}

	testInput = function(a, b) {
		if (a == b) {
			return true
		} else {
			return false
		}
	}

	firstInputReady = function() {
		$('.first__variant').on('input keyup', function () {
		    var value = $(this).val();
		    if (testInput(value, firstNum)) {
		    	$(".first__number").removeClass("wrong__number");
		    	$('.first__number--input').addClass("visible");
		    	$('.first__number--input').text(value);
		    	$(this).addClass("hidden");
		    	showSecondCanvas();
		    	showSecondInput();
		    } else if(value.length == 0) {
		    	$(this).removeClass("wrong");
		    	$(".first__number").removeClass("wrong__number");
		    }
		    else {
		    	$(this).addClass("wrong");
		    	$(".first__number").addClass("wrong__number");
		    }
		    
		});
	}
	firstInputReady();

	secondInputReady = function() {
		$('.second__variant').on('input keyup', function () {
		    var value = $(this).val();
		    if (testInput(value, secondNum)) {
		    	$(".second__number").removeClass("wrong__number");
		    	$('.second__number--input').addClass("visible");
		    	$('.second__number--input').text(value);
		    	$(this).addClass("hidden");
		    	$('.result__number').addClass("hidden");
		    	$('.input__span').addClass("visible-span");
		    } else if(value.length == 0) {
		    	$(this).removeClass("wrong");
		    	$(".second__number").removeClass("wrong__number");
		    }
		    else {
		    	$(this).addClass("wrong");
		    	$(".second__number").addClass("wrong__number");
		    }
		    
		});
	}
	secondInputReady();

	resultInputReady = function() {
		$('.result__variant').on('input keyup', function () {
		    var value = $(this).val();
		    if (testInput(value, result)) {
		    	$(".result__variant").removeClass("wrong__number");
		    	$('.result__number').removeClass("hidden");
		    	$('.result__number').text(value);
		    	$(this).addClass("hidden");
		    } else if(value.length == 0) {
		    	$(this).removeClass("wrong");
		    }
		    else {
		    	$(this).addClass("wrong");
		    }
		    
		});
	}
	resultInputReady();

	showFirstCanvas();
	showFirstInput();			
}

Move();
 
})(window, document);



