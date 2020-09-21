$(".fa-bars").on("click", function (e) {
  $(".navbar-nav_added").toggleClass("active");
  $("body").toggleClass("modal-open");
  $("#closeicon_added").toggleClass("active");
});
$(".hostel-buttons .get-call").on("click", function (e) {
  $(".modal-popup").addClass('active');
  $('body').addClass('modal-open');
});
$("#closeicon2_added, #sidebar-overlay2").on('click', function () {
  $(".modal-popup").removeClass('active');
  $('body').removeClass('modal-open');
});