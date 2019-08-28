var express = require('express');
var router = express.Router();
var File = require ('../models/File.js');

var multer  = require('multer');
var upload = multer({ dest: './public/uploads/' });


/* GET home page. */
router.get('/all', function(req, res, next) {
    File.find()
        .then(files => res.json(files))
});


router.post('/new', upload.single("file"), function(req, res, next) {
    console.log("entro aqui!!")
    const file = new File({
        name : req.body.name,
        originalFileName:req.file.originalname,
        size: req.file.size,
        ext : req.file.mimetype,
        type : req.file.encoding,
        specs: req.body.specs,
        url: `/uploads/${req.file.filename}`
    })
    console.log(req.body.specs);
    file.save()
        .then(fileCreated => res.json(fileCreated))
});

router.get('/:id', function (req, res, next) {
    File.findById(req.params.id)
        .then(singleFile => res.json(singleFile))
});


// 
router.delete( '/delete/:id', function(req,res,next){
    File.findById(req.params.id)
    .then(file =>{
        
        res.status(200).json(file);
    })
    .catch(e=>res.status(500).send(e));
});




// import { UserDao } from '@daos';
// import { logger } from '@shared';
// import { Request, Response, Router, Express } from 'express';
// import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
// import { paramMissingError } from '@shared';
// import { ParamsDictionary } from 'express-serve-static-core';

// // Init shared
// const router = Router();
// const userDao = new UserDao();

// /******************************************************************************
//  *                      Get All Users - "GET /api/users/all"
//  ******************************************************************************/

// router.get('/all', async (req: Request, res: Response) => {
//     try {
//         const users = await userDao.getAll();
//         return res.status(OK).json({users});
//     } catch (err) {
//         logger.error(err.message, err);
//         return res.status(BAD_REQUEST).json({
//             error: err.message,
//         });
//     }
// });

// /******************************************************************************
//  *                       Add One - "POST /api/users/add"
//  ******************************************************************************/

// router.post('/add', async (req: Request, res: Response) => {
//     try {
//         const { user } = req.body;
//         if (!user) {
//             return res.status(BAD_REQUEST).json({
//                 error: paramMissingError,
//             });
//         }
//         await userDao.add(user);
//         return res.status(CREATED).end();
//     } catch (err) {
//         logger.error(err.message, err);
//         return res.status(BAD_REQUEST).json({
//             error: err.message,
//         });
//     }
// });

// /******************************************************************************
//  *                       Update - "PUT /api/users/update"
//  ******************************************************************************/

// router.put('/update', async (req: Request, res: Response) => {
//     try {
//         const { user } = req.body;
//         if (!user) {
//             return res.status(BAD_REQUEST).json({
//                 error: paramMissingError,
//             });
//         }
//         user.id = Number(user.id);
//         await userDao.update(user);
//         return res.status(OK).end();
//     } catch (err) {
//         logger.error(err.message, err);
//         return res.status(BAD_REQUEST).json({
//             error: err.message,
//         });
//     }
// });

// /******************************************************************************
//  *                    Delete - "DELETE /api/users/delete/:id"
//  ******************************************************************************/

// router.delete('/delete/:id', async (req: Request, res: Response) => {
//     try {
//         const { id } = req.params as ParamsDictionary;
//         await userDao.delete(Number(id));
//         return res.status(OK).end();
//     } catch (err) {
//         logger.error(err.message, err);
//         return res.status(BAD_REQUEST).json({
//             error: err.message,
//         });
//     }
// });

// /******************************************************************************
//  *                                     Export
//  ******************************************************************************/

// export default router;

module.exports = router;



