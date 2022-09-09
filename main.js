$("body").append(GM_getResourceText("HTML"));
$("#header").parent().append("<div class=\"sidebar-listener-wrapper\"></div>");
$(".sidebar-listener-wrapper").append("<div class=\"sidebar-listener\"></div>");
// put header in sidebar
$("#header").appendTo(".sidebar-listener");

$("#left-side").css("display", "block");
$(".sidebar-listener").css("height", "fit-content");

$("#footer").append(`
<a class="educationify-footer-logo" href="https://github.com/Nebula-Developer">
    <img class="educationify-footer-img" src="https://avatars.githubusercontent.com/u/96085977?s=400&u=245b84712093f0f36a8e76ee8a2a14eda5ecbfc2&v=4" alt="NebulaDev">
    NebulaDev
</a>
`);

// make it the first child
$(".educationify-footer-logo").prependTo("#footer");