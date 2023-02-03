const mysql = require('mysql')
const express = require('express')
const app = express()

const connection = mysql.createConnection({
    host : 'localhost',
    database : 'api_ejercicio_1',
    user : 'root',
    password : ''
})

app.delete('/eliminarUsuario', (req, res) => {
    const cedula = req.query.cedula
    const sql = `DELETE FROM usuarios WHERE cedula = "${cedula}"`

    connection.query(sql, (error, results, fields) => {
        if (error) throw error
        res.send('Se ha eliminado correctamente.')
    })
})

app.listen(3000, function () {
    console.log('Conectado al puerto 3000')
})