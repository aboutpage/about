$(document).ready(function() {

    if($.cookie("css")) {
        $(".switchable").attr("href",$.cookie("css"));
    }

    $.get('resume.md', function(content) {
        var converter = new Markdown.Converter();
        $('.content').html(converter.makeHtml(content));
    });

    $(".css-switcher li a").click(function() {
        newCss='css/'+$(this).attr('rel');
        $(".switchable").attr("href",newCss);
        $.cookie("css",newCss, {expires: 365, path: '/'});
        return false;
    });

});
