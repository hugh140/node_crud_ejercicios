const express = require('express')
const mysql = require('mysql')
const app = express()

const connection = mysql.createConnection({
    host : 'localhost',
    database : 'api_ejercicio_1',
    user : 'root',
    password : ''
})

connection.connect((error) => {
    if (error) throw error
    console.log('Se ha conectado a la base de datos correctamente.')
})

app.get('/buscarUsuario', (req, res) => {
    let usuarios = []
    const sql = 'SELECT * FROM usuarios WHERE cedula = "' + req.query.cedula + '"'

    connection.query(sql, (error, results, fields) => {
        if (error) throw error
        results.forEach(usuario => {
            usuarios.push(usuario)
        })
        res.json(usuarios)
    })
})

app.listen(3000, function () {
    console.log('Conexión realizada en el puerto 3000')
})