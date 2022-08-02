var slider = tns({
  container: '.my-slider',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  mouseDrag: true,
  nav: false,
  loop: true,
  center: true,
  gutter: 1
});

//show more
$("#close-1").click(function(){
  $(".text-1").css({"display":"none"});
});
$(".btn-show-1").click(function(){
    $(".text-1").css({"display":"block"}).addClass("active");
});

$("#close-2").click(function(){
  $(".text-2").css({"display":"none"});
});
$(".btn-show-2").click(function(){
    $(".text-2").css({"display":"block"}).addClass("active");
});

$("#close-3").click(function(){
  $(".text-3").removeClass("active");
});
$(".btn-show-3").click(function(){
    $(".text-3").css({"display":"block"}).addClass("active");
});

$("#close-4").click(function(){
  $(".text-4").css({"display":"none"});
});
$(".btn-show-4").click(function(){
    $(".text-4").css({"display":"block"}).addClass("active");
});

$("#close-5").click(function(){
  $(".text-5").css({"display":"none"});
});
$(".btn-show-5").click(function(){
    $(".text-5").css({"display":"block"}).addClass("active");
});

$("#humidifiers-close-1").click(function(){
  $(".humidifiers-text-1").css({"display":"none"});
});
$(".humidifiers-btn-show-1").click(function(){
    $(".humidifiers-text-1").css({"display":"block"}).addClass("active");
});

$("#air-close-1").click(function(){
  $(".air-text-1").css({"display":"none"});
});
$(".air-btn-show-1").click(function(){
    $(".air-text-1").css({"display":"block"}).addClass("active");
});

//mobile menu
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dot')) {

    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}