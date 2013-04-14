$.getParamFromUrl = function(name){
    var results = new RegExp('[\\?&amp;]' + name + '=([^&amp;#]*)').exec(window.location.href);
    return (results && results[1]) || null;
}

isFileExists = function(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

updateResume = function(url) {
    $.get(url, function(content) {
        var converter = new Markdown.Converter();
        $('.resume').html(converter.makeHtml(content));
    });
}
$(document).ready(function() {

    selectedTheme=$.getParamFromUrl('theme');
    if(selectedTheme){
        $(".switchable").attr("href",'css/'+selectedTheme);
        $('body').addClass('without-menu');
    }
    else if($.cookie("css")) {
        $(".switchable").attr("href",$.cookie("css"));
    }
    $.get('resume.md', function(content) {
        var converter = new Markdown.Converter();
        $('.resume').html(converter.makeHtml(content));
    });

    updateResume('resume.md');

    $(".css-switcher li a").click(function() {
        newCss='css/'+$(this).attr('rel');
        $(".switchable").attr("href",newCss);
        $.cookie("css",newCss, {expires: 365, path: '/'});
        return false;
    });

    $('#dropdown-language ul').delegate('a', 'click', function () {
        updateResume($(this).attr('rel'));
        return false;
    });

    $(".export2pdf").click(function() {
        var pdf = new jsPDF('p', 'in', 'letter')
            , source = $('.resume')[0]
            , specialElementHandlers = {
                '#bypassme': function(element, renderer){
                    return true
                }
            }

        pdf.fromHTML(
            source // HTML string or DOM elem ref.
            , 0.5 // x coord
            , 0.5 // y coord
            , {
                'width':7.5 // max width of content on PDF
                , 'elementHandlers': specialElementHandlers
            }
        );

        pdf.save('resume.pdf');
        return false;
    });
    var displayLanguages=false;
    var availableLanguages=['en'];
    for(i=0;i<availableLanguages.length;i++){
        languageCode=availableLanguages[i];
        languageFile='resume_'+languageCode+'.md';
        if(isFileExists(languageFile)){
            $("#dropdown-language ul").append('<li><a rel="'+languageFile+'">'+languageCode+'</a></li>');
            displayLanguages=true;
        }
    }
    if(displayLanguages){
        $('.language-menu').show();
    }
});

