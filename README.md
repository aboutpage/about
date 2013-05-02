# My _about_ page in github pages style

In the early days, I wanted to benefit [GitHub] [github] pages to publish and get up to date easily my resume. I don't
have personal web hosting and I thought it can be useful.

Then, I realized other users could be interested in such a way. So, I decided to try to make a project to facilitate
that. My goal is simple: let [GitHub] [github] members publish online a resume, an _about page_, a bio or whatever
they want, only using [GitHub] [github] application with their browser.

If you want to try it, simply fork it and that's it!

## Easy way to put his _about page_ online

  1. at the beginning, you have to fork this project and get your own repository. When the fork is finished, you can
  read this text at http://username.github.io/about (username is YOUR username on [GitHub] [github]).
  2. no __master__ branch is defined in this project. The main branch is the __gh-pages__ branch, which helps you to
  have content directly online. You can now create a new file to write your text. Be careful, the file must be in
  markdown format. You can use [GitHub flavored markdowwn] [gfm] if you want). Put whatever you want in the file name
  (about.md, resume.md, cv.md ...). You can edit the file directly with [GitHub] [github].
  3. when you're done, you can take a look at configuration file to choose your own options. Here it is a minimal
  configuration you can try for the first time to rapidly have a visual result (in my example, I supposed you've create
  a file named __resume.md__). The following code must replace __config.json__ content:
  ```json
  {
      "avatarSize": 210,
      "isToolbarEnabled": false,
      "languages":
      [
          {
              "flag": "gb.png",
              "label": "English",
              "file": "resume.md"
          }
      ],
      "theme": "foghorn"
  }```
  4. Voilà, your page is ready! You can see it at http://username.github.io/about.
  Then, when you want to modify it, use [GitHub] [github] online editor and each time you'll save your file, your page
  will be updated in the same time.

## Diving into all available options
Many options are available to customize your _about_ page. You can see them in __config.json__ file.

### Displaying his avatar
If you want to display your avatar, choose a width and use:
```json
"avatarSize": 210
```
The value is the width you want your avatar takes in page. Remember avatar is a square with width equal to height. If
you don't want to show your avatar, you can delete this line in __config.json__.

### Choose a theme
Several themes are available (want to add your theme, pull me a request, you're welcome!)
_about_ page will use defined theme:
```json
"theme": "colored"
```
If you don't know  all themes and want to try them all, you can enable the tool bar and switch between them:
```json
"isToolbarEnabled": true
```

### Making your _about_ page international

You know at least 2 languages? You can write the same page in many languages and flag icons will appear on page to
help visitors switch between languages. If only one language is defined, no flag will bother your visitors.

i18n configuration looks like that:
```json
{
    "flag": "fr.png",
    "label": "Français",
    "file": "LISEZMOI.md"
},
{
    "flag": "gb.png",
    "label": "English",
    "file": "README.md"
},
{
    "flag": "de.png",
    "label": "Deutsch",
    "file": "LESEN.md"
},
{
    "flag": "es.png",
    "label": "Espanol",
    "file": "LEAME.md"
}
```
Each entry has 3 data:

  * image file name to use to display flag (you can take a look to img/flags to know how many languages are available,
  you will find a lot of them).
  * label you want to display when mouse is over flag (the title attribute for anchor)
  * markdown file you want to read

The first element is used to display default _about_ page.

## Getting _aboutpage_ project updates 

When new release is available for _aboutpage_ project, you can update your repository using only [GitHub] [github]
application.

See below the way to do that:

  * go to your project page, for example https://github.com/fmagnan/about
  * click on _pull request_ menu to go to https://github.com/fmagnan/about/pull/new/gh-pages
  * then, instead of proposing a pull request to main repository, you request an update from main repository
  [aboutpage] [aboutpage]
  * on the left side, choose your repository and on the right side, put [aboutpage] [aboutpage] repository
  * merge request

## Credits

  * flag icons from [Mark James] [famfamfam]
  * dropdown made by [Cory LaViska] [dropdown]
  * themes found all over the web (I don't know authors)

[github]: https://github.com
[famfamfam]: http://www.famfamfam.com
[dropdown]: http://labs.abeautifulsite.net/jquery-dropdown/
[aboutpage]: https://github.com/aboutpage/about
[gfm]: http://github.github.com/github-flavored-markdown/
