const router = require('express').Router(); 

const candidateController = require('../controllers/candidateController');




//candidate route................//
router.post('/candidateSignUp',candidateController.candidateSignUp);
router.post('/assignScore',candidateController.assignScore);
router.get('/listCandidate',candidateController.listCandidate);



module.exports = router;