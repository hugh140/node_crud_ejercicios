const mysql = require('mysql')
const express = require('express')
const app = express()

const connection = mysql.createConnection({
    host : 'localhost',
    database : 'api_ejercicio_1',
    user : 'root',
    password : ''
})

app.post('/agregarUsuario', (req, res) => {
    const nombre = req.query.nombre
    const telefono = req.query.telefono
    const email = req.query.email
    const cedula = req.query.cedula
    const sql = `INSERT INTO usuarios VALUES 
        ("", "${nombre}","${telefono}","${email}","${cedula}")`

    connection.query(sql, (error, results, fields) => {
        if (error) throw error
        res.send('Se ha registrado correctamente.')
    })
})

app.listen(3000, function () {
    console.log('Conectado al puerto 3000')
})