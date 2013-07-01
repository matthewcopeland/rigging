// 37 - left
// 38 - up
// 39 - right
// 40 - down

$(document).keydown(function(e){
    if (e.keyCode == 37) {
       $('.hero').removeClass('right');
       $('.hero').addClass('left');
    }
    if (e.keyCode == 39) {
       $('.hero').removeClass('left');
       $('.hero').addClass('right');
    }
});