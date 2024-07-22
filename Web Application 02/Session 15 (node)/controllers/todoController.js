
var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];
const database = require('../database');

module.exports = function(app){
    app.get('/todo', function(req, res){
        res.render('todo', {todos: data});
    })

    app.post('/todo', function(req, res){
        console.log(req.body);
        data.push(req.body)
        database(req.body);
        res.send('data recieved!');
    })

    app.delete('/todo', function(req, res){
        res.send('DELETE on /todo');
    })
}