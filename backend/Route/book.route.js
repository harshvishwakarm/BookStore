import express from 'express';
import { getbook } from '../controller/book.controller.js'; // Adjusted import path

const router = express.Router();

router.get('/', getbook);

export default router;
