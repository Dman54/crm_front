$(".fa-bars").on("click", function (e) {
  $(".topmenu").toggleClass("active");
  $("body").toggleClass("menu-open");
});
$("#sidebar-overlay1").on("click", function () {
  $(".topmenu").removeClass('active');
  $("body").removeClass('menu-open');
});
$(".hostel-buttons .get-call").on("click", function (e) {
  $(".modal-popup").addClass('active');
  $("body").addClass('modal-open');
});
$("#closeicon2_added, #sidebar-overlay2").on("click", function () {
  $(".modal-popup").removeClass('active');
  $("body").removeClass('modal-open');
});
$("#add-reservation-form").submit(function (e) {
  $(this).find("[jq-required]").removeClass("empty-error");
  $(this).find(".empty-error-text").remove();
  let isError = false;
  $(this).find("[jq-required]").each(function (index) {
    if (!$(this).val()) {
      $(this).addClass("empty-error");
      $(this).after("<div class='empty-error-text'>" + $(this).attr("error-text") + "</div>");
      isError = true;
    }
  });
  if (isError) {
    e.preventDefault();
  }
  if (!isError) {
    e.preventDefault();
    $(this).find(".notice-text").addClass("active");
  }
});

// crm_front_object.html
// $(function () {
$(window).on("load", function () {
  $(".object-room").each(function() {
    let rightHeight = $(this).find(".object-room-facilities").height();
    if ($(window).width() > 800) {
      let leftHeight = $(this).find(".object-room-left").height();
      if (rightHeight > leftHeight) {
        $(this).find(".object-room-facilities").height(leftHeight - 24);
        $(this).find(".show_more_facilities").addClass("active");
        $(this).find(".object-room-facilities").addClass("active");
      }
    } else {
      if (rightHeight > 140) {
        $(this).find(".show_more_facilities").addClass("active");
        $(this).find(".object-room-facilities").addClass("active");
        $(this).find(".object-room-facilities-wrapper").height(162);
      } else {
        $(this).find(".object-room-facilities-wrapper").height($(this).find(".object-room-facilities").height());
      }
    }
  });
  $(".show_more_facilities").on("click", function() {
    if ($(this).hasClass("showing")) {
      $(this).parent().removeClass("active");
      $(this).prev().height($(this).parent().height() - 24);
      $(this).removeClass("showing");
      $(this).css('top','unset');
    } else {
      $(this).parent().addClass("active");
      $(this).prev().height('auto');
      $(this).addClass("showing");
      $(this).css('top',($(this).prev().height()));
    }
  });

  // slider
  let liCount = $('.slides li').length;
  let curIndex = 1;
  $('.slider-all-number').text(liCount);
  $('.slider-cur-number').text(curIndex);
  if (liCount == 1) {
    $('.slider-prev').addClass('disabled');
    $('.slider-next').addClass('disabled');
  }
  if (curIndex == 1) {
    $('.slider-prev').addClass('disabled');
  }
  if (curIndex == liCount) {
    $('.slider-next').addClass('disabled');
  }
  $('.slider-wrapper').height($('.slides li img').eq(curIndex - 1).height());

  function move() {
    $('.slider-next').removeClass('disabled');
    $('.slider-prev').removeClass('disabled');
    $('.slider-wrapper ul').css({ "-webkit-transform": "translateX(" + -(curIndex - 1) * 100 + "%" });
    $('.slider-wrapper ul').css({ "transform": "translateX(" + -(curIndex - 1) * 100 + "%" });
    $('.slider-dot').removeClass('active');
    $('.slider-dot').eq(curIndex - 1).addClass('active');
    $('.slider-cur-number').text(curIndex);
    $('.slides li').removeClass('active');
    $('.slides li').eq(curIndex - 1).addClass('active');
    $('.slider-wrapper').height($('.slides li img').eq(curIndex - 1).height());
  }
  function moveLeft() {
    curIndex++;
    move();
    if (curIndex == liCount) {
      $('.slider-next').addClass('disabled');
    }
  }
  function moveRight() {
    curIndex--;
    move();
    if (curIndex == 1) {
      $('.slider-prev').addClass('disabled');
    }
  }

  $('.slider-prev').click(function () {
    moveRight();
  });
  $('.slider-next').click(function () {
    moveLeft();
  });
});
$("#calc-form").submit(function (e) {
  $(this).find("[jq-required]").removeClass("empty-error");
  $(this).find(".empty-error-text").remove();
  let isError = false;
  $(this).find("[jq-required]").each(function (index) {
    if (!$(this).val()) {
      $(this).addClass("empty-error");
      $(this).after("<div class='empty-error-text'>" + $(this).attr("error-text") + "</div>");
      isError = true;
    }
  });
  if (isError) {
    e.preventDefault();
  }
  if (!isError) {
    e.preventDefault();
    // $("#calc-places-value").val();
    // $(".answer-date-begin").text($("#calc-date-in").val());
    // $(".answer-date-end").text($("#calc-date-out").val());
    // $(".answer-date-duration").text("("+1+"суток)");
    // $(".calc-answer-row").each(function (index) {
    //   $(".answer-place-number")
    //   $(".answer-room-price")
    // });
    $(".calc-answer").addClass("active");
  }
});
$(".table-pricetypes-show-more").on("click", function () {
  $(this).toggleClass("active");
  $(this).closest(".table-pricetypes-row").find(".table-pricetypes-all").toggleClass("active");
});
$(".block-toggle").on("click", function () {
  $(".block-toggle").removeClass("active");
  $(".block-toggled").removeClass("active");
  $(this).addClass("active");
  $(".block-toggled").eq($(".block-toggle").index($(this))).addClass('active');
});
// // crm_front_object.html