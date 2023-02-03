const mysql = require('mysql')
const express = require('express')
const app = express()

const connection = mysql.createConnection({
    host : 'localhost',
    database : 'api_sistema_vehicular',
    user : 'root',
    password : ''
})

app.delete('/eliminarVehiculo', (req, res) => {
    const id = req.query.id
    const valor = req.query.valor
    if (id === 'placa' || id === 'motor' || id === 'chasis')
        var sql = `DELETE FROM vehiculo WHERE ${id} = "${valor}"`
    else throw "Id incorrecto."

    connection.query(sql, (error, results, fields) => {
        if (error) throw error
        res.send('Se ha eliminado correctamente.')
    })
})

app.listen(3000, function () {
    console.log('Conectado al puerto 3000')
})