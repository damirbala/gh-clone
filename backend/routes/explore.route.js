import express from 'express';
import { explorePopularRepos } from '../controllers/explore.controller.js';

const router = express.Router();

router.get("/repos/:language", explorePopularRepos);

//TODO => GET likes (who liked our profile)
//TODO => POST like a profile

export default router;