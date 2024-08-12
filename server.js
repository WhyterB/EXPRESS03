//criar uma query(consulta) simples
const express = require('express');
const mysql = require('mysql2');

const app = express();

app.listeb(3000, () => {
    console.log("Servidor em execução");
})

//criação da conexão com banco de dados
const connection =mysql.createConnection({
    host: 'localhost',
    user: 'user_bd_tasks',
    password: 'QLOP4TDcQGB2R97Djet&vXYHggatTSZE4',
    database: 'nodejs_tasks'
})

//testar conexão
connection.connect(error =>{
    if(error){
        console.log('Erro de conexão ao MySql:'+error.message)
        return
    }
    console.log('Conexão realizada com sucesso!!')
})
