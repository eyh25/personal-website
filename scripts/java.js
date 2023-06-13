if ($(window).width() <= 600) {
  if (!$("#navlinks").hasClass("hidden")) {
    $("#navlinks").addClass("hidden");
  }
  $("#hamburger").click(function () {
    if ($("#navlinks").hasClass("hidden")) {
      $("#navlinks").removeClass("hidden");
    } else {
      $("#navlinks").addClass("hidden");
    }
  });
}
