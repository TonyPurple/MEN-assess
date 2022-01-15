var express = require('express');
var router = express.Router();
const Todo = require('../data/todos')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Unit 2 Assessment',
        todos: Todo.getAll()
    });
});

router.post("/", function(req, res) {
    console.log(req.body.newtodo)
    let newObj = {
        todo: req.body.newtodo,
        done: false,
    }
    let newToDo = Todo.getAll()
    newToDo.push(newObj)


    res.render("index", {
        title: 'Unit 2 Assessment',
        todos: Todo.getAll()
    });
});

router.delete('/:id', function(req, res) {
    let id = req.params.id;
    let deleteToDo = Todo.getAll()
    deleteToDo.pop(id);
    res.redirect('/');
})


module.exports = router;