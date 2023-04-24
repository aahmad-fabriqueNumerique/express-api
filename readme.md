#### Etapes:

1. npm init (npm init -y)
2. npm install express
3. npm install uuid
4. npm install --save-dev nodemon
5. Utiliser Postman pour faire des tests
6. Modifications package.json
    - package.json => scripts: "start" : "nodemon index.js"
    - package.json => "type": "module"


-----------

#### Fichiers à créer

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

-----------

```json
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
    ```