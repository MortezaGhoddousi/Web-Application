
const {database, getData, deleteData} = require('../database');

module.exports = function(app){
    app.get('/todo', async function(req, res){
        const data = await getData();
        res.render('todo', {todos: data});
    })

    app.post('/todo', async function(req, res){
        console.log(req.body);
        const data = await getData();
        data.push(req.body)
        database(req.body);
        res.send('data recieved!');
    })

    app.delete('/todo', function(req, res){
        console.log(req.body);
        deleteData(req.body.item).then(function(){
            res.send('data deleted!');
        })
        .catch(function(){
            res.status(500).send('there are some issues!');
        })
    })
}