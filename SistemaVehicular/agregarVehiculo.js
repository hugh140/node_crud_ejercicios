const mysql = require('mysql')
const express = require('express')
const app = express()

const connection = mysql.createConnection({
    host : 'localhost',
    database : 'api_sistema_vehicular',
    user : 'root',
    password : ''
})

app.post('/agregarVehiculo', (req, res) => {
    const marca = req.query.marca
    const modelo = req.query.modelo
    const motor = req.query.motor
    const chasis = req.query.chasis
    const placa = req.query.placa

    const nombre = req.query.nombre
    const cedula = req.query.cedula
    const email = req.query.email
    const celular = req.query.celular
    const sql = `INSERT INTO vehiculo VALUES 
        ("", "${placa}","${marca}","${modelo}","${motor}",
        "${chasis}","${nombre}","${cedula}","${email}",
        "${celular}")`

    connection.query(sql, (error, results, fields) => {
        if (error) throw error
        res.send('Se ha registrado correctamente.')
    })
})

app.listen(3000, function () {
    console.log('Conectado al puerto 3000')
})