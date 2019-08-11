var ids = new Array();
var demoP = document.getElementById("ytembed");
$.get('yt.txt', function(data) {
    var ids = data.split('\n');
    console.log(ids);
    ids.reverse()
    $.each(ids,
        function(index, item) {
            var itemid = item.toString().split("=");
            console.log(itemid[1]);
            $("#ytembed").append('<iframe width="840" height="472" src="https://www.youtube.com/embed/' + itemid[1] + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <br /><br />')


        });
    

    

});
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}