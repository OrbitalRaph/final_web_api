# final_web_api

Type de base de données: MongoDB (noSQL).<br/>

Procédure de création de la base de données:
- Créer une collection "personnage" dans la bd mongodb de votre choix.
- Importer le fichier dev/donnees_initales.json dans la collection.

Procédure d’installation de l’API sur un poste local:
- créer un fichier .env à la racine du projet.
- insérer la ligne suivante en remplaceant <url> par l'url de votre base de donnée mongodb : MONGODB_URI=mongodb:<url> (exemple : MONGODB_URI=mongodb://localhost:27017/mabd)
- dans un terminal, aller à la racine du projet.
- npm install
- npm start

URL de l’API publiée : https://final-web-api-personnages-genshin.onrender.com/api-docs
