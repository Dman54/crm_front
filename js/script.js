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