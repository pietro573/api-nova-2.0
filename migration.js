const db = require("./db")


async function criar_estrutura(){

try{

 await db.pool.query(
    `
    DROP TABLE IF EXISTS cliente
    CREATE TABLE cliente
    CREATE TABLE cliente(

 id INT PRIMARY KEY AUTO_INCREMENT,  
 nome VARCHAR (100) NOT NULL,  
 cpf CHAR (14) UNIQUE,   
 email VARCHAR (200) NOT NULL UNIQUE,  
 senha VARCHAR(255) NOT NULL,  
 celular CHAR(11)
 PRIMARY KEY (id),
 UNIQUE KEY (cpf),
 UNIQUE KEY (email)
 )

    `
 )

} 
catch (error){

    console.log(error)
}
}