//Albert functions
//Выбранное меню становиться активной
function activeMenu() {
  $('.constructor-menu').click(function(){  
    //Toggle Class
    var parent = $(this).parent();
    $(parent).find(".active").removeClass("active");      
    $(parent).find(this).addClass("active");
    // return false;
  });
}
activeMenu();

//Выбранное свойство становиться активной
function activeBox() {
  $('.const-type-box').click(function(){  
    //Toggle Class
    var parent = $(this).parent();
    $(parent).find(".active").removeClass("active");      
    $(parent).find(this).addClass("active");
    $(parent).find(this).find("li.tile-color-single:first-child").addClass("active");

    var mainParent = parent.parent();
    var dataScroll = $(mainParent).attr("data-sidebar");

    if (dataScroll == "bathroom-sidebar") {
        $(".mainroom").css("display", "none");
        $(".bathroom").css("display", "block");
    } else {
        $(".bathroom").css("display", "none");
        $(".mainroom").css("display", "block");
    }

    mastadont();
    constructorPrice();
    return false;
  });
}
activeBox();

//Выбранный цвет становиться активным
function activeTileColor() {
  $('.tile-color-single').click(function(){  
    //Toggle Class
    var parent = $(this).parent();
    $(parent).find(".active").removeClass("active");      
    $(parent).find(this).addClass("active");
    mastadont();
    return false;
  });
}
activeTileColor();

//Функция получения активного свойства и передачи его аттрибутов в функцию для замены ссылок
function mastadont() {
	var activeItem = $(".constructor-area").find(".active");
	var imgBox = $(".main-content-img-box");
	for (var i = 0; i <= activeItem.length; i++) {
		var singleType = $(activeItem[i]).data("type");
		var singleImg = $(activeItem[i]).data("img");

    var sinkType = $(activeItem[i]).data("sink-type");
    var sinkImg = $(activeItem[i]).data("sink-img");

    if (sinkType) {
      changeLink(sinkImg, sinkType);
    }

		if (singleType) {
			changeLink(singleImg, singleType);
		}
	}
}
mastadont();

//Функция замены ссылок на картинки
function changeLink(link, type) {
	$("#" + type).attr("src", link);
}

//Выбор типа отделки стен
$(".const-type-box").click(function() {
  if ($(".wallpaper-show").hasClass( "active" )) {
  	$(".wall-wall").css("display", "none");
  	$(".wallpaper-wall").css("display", "block");
  	$(".wall-wall.active").prev().addClass("active");
  } else if ($(".wall-show").hasClass( "active" )) {
  	$(".wallpaper-wall").css("display", "none");
  	$(".wall-wall").css("display", "block");
  	$(".wallpaper-wall.active").next().addClass("active");
  } else {
  	$(".wall-wall").css("display", "none");
  	$(".wallpaper-wall").css("display", "block");
  	$(".wall-wall.active").prev().addClass("active");
  }
  mastadont();
});

//Выбор типа плитки в ванной
$(".const-type-box").click(function() {
  if ($(".big-tile-show").hasClass( "active" )) {
    $(".white-tile").css("display", "none");
    $(".grey-tile").css("display", "none");
    $("#tile-img").css("display", "none");
    $("#tile-grey-img").css("display", "none");
    $(".big-tile").css("display", "block");
    // $(".wall-wall.active").prev().addClass("active");
  } else if ($(".white-tile-show").hasClass( "active" )) {
    $(".big-tile").css("display", "none");
    $(".grey-tile").css("display", "none");
    $(".white-tile").css("display", "block");
    $("#tile-grey-img").css("display", "none");
    $("#tile-img").css("display", "block");
    // $(".wallpaper-wall.active").next().addClass("active");
  } else if ($(".grey-tile-show").hasClass( "active" )) {
    $(".big-tile").css("display", "none");
    $(".white-tile").css("display", "none");
    $(".grey-tile").css("display", "block");
    $("#tile-img").css("display", "none");
    $("#tile-grey-img").css("display", "block");
  }
  mastadont();
});

//Скроллинг сайдбара
$(".constructor-menu").click(function() {
	var dataScroll = $(this).attr("data-scroll");
	var defaultTop = $("#wall-type").position().top;
	var topus = $("#" + dataScroll).position().top;
	$(".textform-text-body").scrollTop( - defaultTop + topus);

  //Подставление нужного заголовка и описания
  var typeHeader = $(this).attr("data-const-title");
  var typeDescription = $(this).attr("data-const-desc");
  $(".item-desc-title").html(typeHeader);
  $(".item-desc-text").html(typeDescription);

  //Открытие нужного окна конструктора при клике по меню
  if (dataScroll == "tile-type" || dataScroll == "plumb-type") {
      $(".mainroom").css("display", "none");
      $(".bathroom").css("display", "block");
  } else {
      $(".bathroom").css("display", "none");
      $(".mainroom").css("display", "block");
  }
});

//Открытие нужного окна конструктора при клике по сайдбару
$(".sidebar-menu").click(function() {
  var dataScroll = $(this).attr("data-sidebar");

  if (dataScroll == "bathroom-sidebar") {
      $(".mainroom").css("display", "none");
      $(".bathroom").css("display", "block");
  } else {
      $(".bathroom").css("display", "none");
      $(".mainroom").css("display", "block");
  }
});
 
//Дополнительные опции конструктора
$(".fadeInBox").click(function(){
    $(".constructor-second-area").fadeIn("slow");
});

//Получение итоговой цены 
function constructorPrice() {

  var totalPrice = 0;
  var activeItem = $(".constructor-box").find(".active");
  for (var i = 0; i <= activeItem.length; i++) {
    var singlePrice = $(activeItem[i]).children().data("price");
    if (singlePrice) {
      totalPrice += singlePrice;
    }
  }
  $(".total-price__text__inner").html(totalPrice);
}

constructorPrice();

var quantPrice = 0;

function quantityPrice(item, radPrice, quantParent) {
    quantPrice = item * +radPrice;
    $(".sector-price__inner").html(quantPrice);
    $(quantParent).attr("data-price", quantPrice);
    console.log(quantPrice, quantParent);
}
