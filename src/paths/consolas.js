var router = require('express').Router();
const consolas = require('../ejemplo.json');




router.get('/get/consolas', (require, response) => {
    response.json(consolas);

});

router.post('/consolas/agregada', (require, response) => {
    const { id, titulo } = require.body;
    if (titulo) {
        const id = consolas.length + 1;
        const newconsolas = { id, ...require.body };
        console.log(newconsolas);
        consolas.push(newconsolas);
        response.status(201).json({ "ok": 'consola agregado' });

    } else {
        response.status(500).json({ "error": 'error del servidor' });
    }
});

router.delete('/elimina/consola/:id', (require, response) => {
    const { id } = require.params;

    for (var i = 0; i < consolas.length; i++) {
        if (consolas[i].id == id) {
            consolas.splice(i, id);
            response.status(200).json({ "mensaje": 'consolas fue eliminado' });
        }
        else {
            response.status(404).json({ "error": 'No existe' });
        }

    }

});




router.get('/llama/consolas/:id', (require, response) => {

    const { id } = require.params;

    for (var i = 0; i < consolas.length; i++) {
        if (consolas[i].id == id) {


            
            response.json(consolas[i]);
        }

    }



});

router.put('/actualizar/consola/:id', (req, res) => {
    let { id } = req.params;
    const { titulo } = req.body;

    for (var i = 0; i < consolas.length; i++) {
        if (consolas[i].id == id) {
            consolas[i].titulo = titulo;
            console.log(consolas[i].titulo);
            res.status(200).json("asasd");
            res.end();
        }
    };
});




module.exports = router;