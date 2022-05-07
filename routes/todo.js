import express from 'express';
import { getAll, saveTodo, getTodo, updateTodo, deleteTodo } from '../controllers/todo.js';

const router = express.Router();


router.get('/getAll', getAll)
router.post('/saveTodo', saveTodo);
router.get('/getTodo', getTodo)
router.put('/updateTodo', updateTodo);
router.delete('/deleteTodo', deleteTodo);


export default router;