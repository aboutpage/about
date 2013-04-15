isFileExists = function(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

updateResume = function(language) {
    $.get('resume_'+language+'.md', function(content) {
        var converter = new Markdown.Converter();
        $('.resume').html(converter.makeHtml(content));
    });
}

applyTheme = function(name) {
    $(".switchable").attr("href",'css/themes/'+name+'.css');
}

isSet = function(property) {
    return typeof(property)!='undefined';
}

isArray = function(property) {
    return Object.prototype.toString.call( property ) === '[object Array]';
}

updatePhoto = function(username,size) {
    $.getJSON('https://api.github.com/users/' + username,function(data) {
        $('.avatar').attr('src','https://secure.gravatar.com/avatar/'+data.gravatar_id+'?s='+size);
    });
}

$(document).ready(function() {

    $.getJSON('config.json', function(data) {

        if(isSet(data.theme)) {
            applyTheme(data.theme);
        }
        if(isSet(data.isToolbarEnabled)&&data.isToolbarEnabled==true){
            $('body').addClass('with-toolbar');
        }
        if(isSet(data.languages)){
            $.each(data.languages, function(key, val) {
                flag='<img src="img/flags/'+key+'.png" alt="'+val+'" />';
                languageLink='<a rel="'+key+'">'+flag+'</a>';
                $('.languages').append(languageLink);
            });
        }
        if(isSet(data.defaultLanguage)){
            updateResume(data.defaultLanguage);
        }
        updatePhoto('fmagnan',210);
    });

    $(".css-switcher li a").click(function() {
        applyTheme($(this).attr('rel'));
        return false;
    });

    $('.languages').delegate('a', 'click', function () {
        updateResume($(this).attr('rel'));
        return false;
    });

});

