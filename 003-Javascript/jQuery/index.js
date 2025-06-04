$("h1").css("color", "red");
$("button").css("color", "green");
$("h1").text("Bye");
$("button").html("<em>Test</em>").css("color", "blue");
// $("img").attr("src");
$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function() {
    $("h1").css("color", "purple");
});

$("button").click(function() {
    $("h1").css("color", "yellow");
});

$("input").keypress(function(event) { //putting body instead of input will detect keys everywhere
    $("h1").text(event.key);
});

$("h1").click(function() {
    $("h1").css("color", "green");
    setTimeout(function() {
        $("h1").css("color", "purple");
    }, 110);
});