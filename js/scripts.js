$(document).ready(function(){
  $("select").change(function(){
    const value = $("select").val();
    $(".animal").addClass("hidden");
    if (value === "lizard") {
      $("#about-lizard").removeClass("hidden");
    } else if (value === "panda") {
      $("#about-panda").removeClass("hidden");
    } else {
      $("#about-tiger").removeClass("hidden");
    }
  });
});