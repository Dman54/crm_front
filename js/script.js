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