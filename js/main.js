updateResume = function(file) {
    $.get(file, function(content) {
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

updateAvatar = function(username,size) {
    $.getJSON('https://api.github.com/users/' + username,function(data) {
        $('.avatar').attr('src','https://secure.gravatar.com/avatar/'+data.gravatar_id+'?s='+size);
    });
}

getUsernameFromHost = function() {
    return document.location.hostname.split('.')[0];
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
            translations=[];
            $.each(data.languages, function(index,value) {
                image='<img src="img/flags/'+value['flag']+'" alt="'+value['label']+'" />';
                anchor='<a rel="'+value['file']+'" title="'+value['label']+'">'+image+'</a>';
                translations.push(anchor);
            });
            if(translations.length>1) {
                $('.languages').append(translations.join("\n"));
            }
            updateResume(data.languages[0]['file']);
        }
        if(isSet(data.avatarSize)) {
            updateAvatar(getUsernameFromHost(),data.avatarSize);
        }
    });

    $('.css-switcher li a').click(function() {
        applyTheme($(this).attr('rel'));
        return false;
    });

    $('.languages').delegate('a', 'click', function () {
        updateResume($(this).attr('rel'));
        return false;
    });

});

