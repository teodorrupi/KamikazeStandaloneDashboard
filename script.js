//$(".overridden_a").hover
//(function(){
//    $(this)
//    },
//function(){
//$(this).css("background-color", "yellow");};
// 
// 
 
 $(".overridden_a").hover(
function() {
$( this ).css("background-color", "#333333");
}, function() {
$( this ).css("background-color", "#474747");
}
);