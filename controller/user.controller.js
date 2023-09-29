const express = require("express");
const router = express.Router();



const User = require("../model/user.model");
const {generateCrudMethods}=require('../seervices/index')
const userCrud =generateCrudMethods(User)
const {validateDbId,notFound}=require("../middlewares/index")


//retrive all users from the database
router.get("/", (req, res,next ) => {
    userCrud.getAll()
    .then((data) => res.send(data))
    .catch((err) => next(err));
});
//retrive user from the database by ID
router.get("/:id", validateDbId,(req, res) => {
    userCrud.getById(req.params.id)
    .then((data) => {
      if (data) res.send(data);
      else
      notFound(req,res)
    })
    .catch(err => next(err));
});
//add user to the database
router.post("/", (req, res,next) => {
    userCrud.create(req.body)
    .then((data) => res.status(201).json(data))
    .catch(err => next(err));
});
router.put('/:id',validateDbId,(req,res)=>{
    userCrud.update(req.params.id,req.body)
    .then((data) => {
        if (data) res.send(data);
        else
        notFound(req,res)
      })
  
      .catch(err => next(err));
  });

router.delete('/:id',validateDbId,(req,res,next)=>{
    userCrud.delete(req.params.id)
    .then((data) => {
        if (data){
        console.log("user deleted");
         res.send(data);
        }
        else
        notFound(req,res)
      })
  
      .catch(err => next(err));
  });

module.exports = router;
