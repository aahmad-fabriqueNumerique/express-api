Créer un dossier
npm init (npm init -y)
npm install express
npm install --save-dev nodemon
package.json => scripts: "start" : "nodemon index.js"
package.json => "type": "module"


npm install uuid
==================

Créer un index.js
    - instancier express()
    - app.listen(port)
    - app.get('/')
    - app.use('/user', module user.js)

créer user.js
    - instancier express.Router()
    - router.get(/)
    - router.post(/)
    - router.getID('/:id')
    - router.delete('/:id')
    - router.patch('/:id')
    - exporter le module avec export default nomModule

créer userCtrl.js
    - maintenir le code dans le temps sans problème
    - exporter les fonctions/méthodes
    - les importer dans user.js (destructuration) => {getID, supprimerUser ....}

Utiliser Postman pour faire des tests

==================

{
        prenom: "Mélanie",
        nom: "Clémentine",
        age: 55
    },
    {
        prenom: "Sandy",
        nom: "Kiwi",
        age: 35
    }