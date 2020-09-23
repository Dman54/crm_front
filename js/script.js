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
    $(this).find(".notice-text").addClass("active");
  }
});



$(function () {

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

  // $('.slider-wrapper').height($('.slides li img').height());
  // $('.slider-wrapper').css('height', $('.slider li img').height());

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
