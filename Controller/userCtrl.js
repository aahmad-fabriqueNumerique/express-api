import { v4 as uuidv4 } from 'uuid';
let users = []

export const getUser = (req, res) => {
    console.log(users);
    res.send(users)
};


export const creerUser = (req, res) => {
    console.log('Bonjour je vais ajouter un utilisateur')
    const user = req.body;

    const id = uuidv4();
    const userID = {...user, id: id }

    users.push(userID)

    res.send(`Nouvel utilisateur ajouté avec le nom ${user.nom}, le prenom: ${user.prenom}, l'age: ${user.age}`)
};

export const getUserID = (req, res) => {

    const { id } = req.params;
    const findUser = users.find((user) => user.id === id);

    res.send(findUser);
};

export const supprimerUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id)
    res.send(`utilisateur de l'ID ${id} a été suprrimé`);
};

export const modifyUser = (req, res) => {
    const { id } = req.params
    const modifierUser = users.find((user) => user.id === id)

    const { nom, prenom, age } = req.body;
    if (nom) modifierUser.nom = nom
    if (prenom) modifierUser.prenom = prenom
    if (age) modifierUser.age = age

    res.send(`l'utilisateur de l'ID ${id} a été bien modifié`);

}