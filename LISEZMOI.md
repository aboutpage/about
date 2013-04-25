# Ma page _à propos_

A l'origine, je voulais profiter des pages [GitHub] [github] pour publier et tenir à jour
facilement mon CV. Comme je ne dispose pas d'un hébergement dédié, c'était une solution intéressante.

Puis, je me suis dit que ce mécanisme pouvait servir à d'autres et j'ai essayé de voir comment faire pour disposer
facilement d'une tribune en ligne. De fil en aiguille, j'en suis arrivé à la conclusion qu'il devait être possible de
publier son CV par l'intermédiaire de [GitHub] [github] sans passer par git mais uniquement en utilisant
l'interface graphique.

Si ce projet vous intéresse, n'hésitez pas à le forker pour publier votre propre page _à propos_.

## Publier rapidement sa page

Voici la marche à suivre pour parvenir à vos fins :

1. commencez par forker ce projet pour obtenir votre propre dépôt. Cette simple action va publier une page à l'adresse
http://username.github.io/about qui contiendra le texte que vous êtes en train de lire.
2. tout en restant dans la branche principale (la branche __gh_pages__), vous pouvez créer un nouveau fichier au format
markdown que vous appelerez comme bon vous semble (about.md, resume.md, cv.md ...). L'éditeur de [GitHub] [github]
vous permettra de mettre en forme votre document.
3. quand votre document est créé, il vous suffit de modifier la configuration par défaut pour que le contenu de votre
fichier apparaisse sur l'espace web de votre projet. Voici une configuration minimale qui vous permettra de voir
rapidement le résultat (je suppose dans cet exemple que le fichier que vous avez ajouté se nomme __resume.md__). Ce
code doit remplacer le contenu du fichier __config.json__ :
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
4. Voilà, votre page est prête ! Elle est accessible directement à l'adresse http://username.github.io/about.
Vous pouvez tenir à jour cette page simplement avec l'éditeur en ligne de [GitHub] [github].

## Profiter pleinement des options disponibles
Plusieurs options sont disponibles pour agrémenter la page _à propos_. Elles sont contenues dans le fichier
de configuration __config.json__
### Afficher son avatar
Vous pouvez décider d'afficher votre avatar :
```json
"avatarSize": 210
```
La valeur donnée correspond à la largeur de l'image de votre avatar. Vous
pouvez supprimer cette ligne si vous ne souhaitez pas que votre avatar apparaisse sur la page.
### Choisir son thème
Plusieurs thèmes sont disponibles (n'hésitez pas à me proposer de nouveaux thèmes si vous vous sentez l'âme
créatrice). Vous pouvez choisir le thème par défaut :
```json
"theme": "colored"
```
Mais vous pouvez également activer la barre d'outils qui vous permettra facilement de changer de thème pour les
essayer un par un :
```json
"isToolbarEnabled": true
```
### Activer les traductions
La page _à propos_ vous permet d'écrire votre page dans plusieurs langues. Si au moins 2 langues sont définies, un
ou plusieurs drapeaux seront affichés pour permettre d'afficher le contenu des fichiers de chacune des langues. Si une
seule langue est définie, vous ne verrez pas de drapeau.
La configuration des traductions ressemble à ça :
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
Chaque entrée comporte 3 informations :

  * le nom du fichier image à utiliser pour afficher le drapeau de la langue (vous pouvez aller jeter un oeil dans
  le dossier img/flags pour avoir une idée du nombre de drapeaux disponibles)
  * le label qui apparaîtra lors du survol du drapeau avec la souris (la balise title du lien)
  * le fichier au format markdown qui doit être lu (c'est le paramètre le plus important)

Pour que les drapeaux s'affichent, il faut que la liste des langues contiennent au moins 2 éléments. La page _à propos_
affichera toujours le premier élément lors de son premier chargement.

## Profiter des nouvelles fonctionnalités de la page _à propos_
Toujours en utilisant uniquement l'interface de [GitHub] [github], il est possible de mettre à jour son référentiel à partir
du référentiel de aboutpage pour profiter des nouvelles fonctionnalités et autres améliorations.

Le protocole à suivre est le suivant :

  * se rendre sur la page de son projet, par exemple https://github.com/fmagnan/about
  * cliquer sur le menu _pull request_ qui amène sur la page https://github.com/fmagnan/about/pull/new/gh-pages
  * là, plutôt que de proposer une pull request au projet [aboutpage] [aboutpage], on va inverser les rôles pour
  que notre référentiel recoive les nouveautés du référentiel [aboutpage] [aboutpage]
  * il faut donc sélectionner à gauche son référentiel et à droite le référentiel [aboutpage] [aboutpage]
  * lancer la pull request

## Crédits

  * icônes provenant de [Mark James] [famfamfam]
  * menu déroulant issu du travail de [Cory LaViska] [dropdown]
  * thèmes récupérés par-ci par-là (je n'ai pas trouvé les auteurs)

[github]: https://github.com
[famfamfam]: http://www.famfamfam.com
[dropdown]: http://labs.abeautifulsite.net/jquery-dropdown/
[aboutpage]: https://github.com/aboutpage/about