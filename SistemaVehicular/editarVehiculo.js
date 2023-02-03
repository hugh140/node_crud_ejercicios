const express = require('express')
const mysql = require('mysql')
const app = express()

const connection = mysql.createConnection({
    host : 'localhost',
    database : 'api_sistema_vehicular',
    user : 'root',
    password : ''
})

connection.connect((error) => {
    if (error) throw error
    console.log('Se ha conectado a la base de datos correctamente.')
})

app.put('/editarVehiculo', (req, res) => {
    const placa = req.query.placa
    const atributo = req.query.atributo
    const valor = req.query.valor
    
    const sql = `UPDATE vehiculo SET ${atributo} = "${valor}"
        WHERE placa = "${placa}"`

    connection.query(sql, (error, results, fields) => {
        if (error) throw error
        res.send('Se ha registrado correctamente.')
    })
})

app.listen(3000, function () {
    console.log('Conexión realizada en el puerto 3000')
})