if (window.top != window.self) // Prevent duplicate execution
    return;

function fetch_web_data(url) {
    $.get(url, function(data) {
        return data;
    });
}

function seperate_php(data) {
    return data.substring(0, data.indexOf("<!-- PHP_SEGMENT_END -->"));
}

async function fetch_local_file(url) {
    return await new Promise((resolve, reject) => {
        $.ajax({
            type: "POST",
            url: "http://localhost:1212?read",
            data: {data: url},
            success: function(data) {
                resolve(seperate_php(data));
            }
        })
    });
}

async function add_css(css) {
    document.body.innerHTML += "<style>" + css + "</style>";
}

fetch_local_file("main.css").then((data) => {
    add_css(data);
});

function print_s(str, css) {
    console.log("%c" + str, css);
}

async function send_to_local_webserver(data, method) {
    return await new Promise((resolve, reject) => {
        $.ajax({
            type: "POST",
            url: "http://localhost:1212?" + method,
            data: {data: data},
            // Get echo response
            success: function(data) {
                resolve(seperate_php(data));
            }
        });
    });
}

async function get_local_php(method) {
    return await new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: "http://localhost:1212?" + method,
            // Get echo response
            success: function(data) {
                resolve(seperate_php(data));
            }
        });
    });
}

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

$(".educationify-footer-logo").prependTo("#footer");

var data = get_local_php("get_data").then((data) => {
    console.log(data);
});

print_s("---------------------", "color: #00ffff; font-size: 20px;");
print_s("Educationify loaded!", "color: #aae1fd; font-size: 20px;");
print_s("---------------------", "color: #00ffff; font-size: 20px;");