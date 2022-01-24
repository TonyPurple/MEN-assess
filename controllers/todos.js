var Todo = require('../data/todos');

function deleteTodo(req, res) {
    Todo.deleteOne(req.params.id);
    res.redirect('/');
}

function create(req, res) {
    Todo.create(req.body);
    res.redirect('/')
};

function index(req, res) {
    res.render('index', {
        title: 'Unit 2 Assessment',
        todos: Todo.getAll(),
    });
}

module.exports = {
    index,
    create,
    delete: deleteTodo,
};