import express from "express";
import { creerUser, getUser, getUserID, supprimerUser, modifyUser } from '../Controller/userCtrl.js'


const router = express.Router();

router.get('/', getUser);

router.post('/', creerUser);

router.get('/:id', getUserID)

router.delete('/:id', supprimerUser)

router.patch('/:id', modifyUser)

export default router;