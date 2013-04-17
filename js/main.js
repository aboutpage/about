applyTheme = function(name) {
    $(".switchable").attr("href",'css/themes/'+name+'.css');
}

getUsernameFromHost = function() {
    return document.location.hostname.split('.')[0];
}

handleAvatar = function(data) {
    if(!isSet(data.avatarSize)) {
        return false;
    }
    updateAvatar(getUsernameFromHost(),data.avatarSize);
}

handleFlags = function(data) {
    if(!isSet(data.languages)){
        return false;
    }
    translations=[];
    $.each(data.languages, function(index,value) {
        image='<img src="img/flags/'+value['flag']+'" alt="'+value['label']+'" />';
        anchor='<a rel="'+value['file']+'" title="'+value['label']+'">'+image+'</a>';
        translations.push(anchor);
    });
    if(translations.length>1) {
        $('.languages').append(translations.join("\n"));
    }
    defaultFile=data.languages[0]['file'];
    updateResume(defaultFile);
    $('.languages a[rel="'+defaultFile+'"]').hide();

    $('.languages').delegate('a', 'click', function () {
        updateResume($(this).attr('rel'));
        $('.languages a').toggle();
        return false;
    });
}

handleTheme = function(data) {
    if(!isSet(data.theme)) {
        return false;
    }
    applyTheme(data.theme);
}

handleToolbar = function(data) {
    if(!isSet(data.isToolbarEnabled)||data.isToolbarEnabled==false){
        return false;
    }
    $('body').addClass('with-toolbar');

    $('.css-switcher li a').click(function() {
        console.log('click on theme');
        applyTheme($(this).attr('rel'));
        return false;
    });
}

isArray = function(property) {
    return Object.prototype.toString.call( property ) === '[object Array]';
}

isSet = function(property) {
    return typeof(property)!='undefined';
}

updateAvatar = function(username,size) {
    $.getJSON('https://api.github.com/users/' + username,function(data) {
        $('.avatar').attr('src','https://secure.gravatar.com/avatar/'+data.gravatar_id+'?s='+size);
    });
}

updateResume = function(file) {
    $.get(file, function(content) {
        var converter = new Markdown.Converter();
        $('.resume').html(converter.makeHtml(content));
    });
}

$(document).ready(function() {
    $.getJSON('config.json', function(data) {
        handleTheme(data);
        handleToolbar(data);
        handleFlags(data);
        handleAvatar(data);
    });
});

