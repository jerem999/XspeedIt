# XspeedIt

XspeedIt est une société d'import / export ayant robotisé toute sa chaîne d'emballage de colis.
Elle souhaite trouver un algorithme permettant à ses robots d'optimiser le nombre de cartons d'emballage utilisés.

Les articles à emballer sont de taille variable, représentée par un entier compris entre 1 et 9.
Chaque carton a une capacité de contenance de 10.
Ainsi, un carton peut par exemple contenir un article de taille 3, un article de taille 1, et un article de taille 6.

La chaîne d'articles à emballer est représentée par une suite de chiffres, chacun représentant un article par sa taille.
Après traitement par le robot d'emballage, la chaîne est séparée par des "/" pour représenter les articles contenus dans un carton.

Implémenter une application qui permettrait de maximiser le nombre d'articles par carton :
- node.js (backend)
- express (framework)
- ejs (balisage HTML avec JavaScript)
- jest (test unitaire)
L'ordre des cartons et des articles n'a pas d'importance.


# Utilisation

- git clone du projet
- aller dans le dossier XspeedIt
- npm install (installation des packages)
- npm start (lancement du projet)
- http://localhost:8080/ (dans le navigateur)

