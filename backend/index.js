import express  from "express";
import mysql from "mysql";
const app = express();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Bolinho123@",
    database:"sistema_estoque"
})

//permitir usar pacotes json nas routes
app.use(express.json())

//route padrao
app.get("/", (req,res) => {
    res.json("Sistema de requisições");
})

//route para ver todos os pc
app.get("/viewPc", (req,res)=>{
    const query = "SELECT * FROM maquinas"
    db.query(query, (err,data)=>{
        if(err){
            return res.json(err)
        }
        return res.json(data)
    })
})

//route para inserir pc
app.post("/insertPc", (req,res)=>{
    const query = "INSERT INTO maquinas (`idOperacao`, `Patrimonio`, `Tipo`, `Nome_ou_Hostname`, `Serial_Number`, `Descricao`, `Status`, `Setor_Origem`, `Setor_Destino`, `Colaborador`, `Localizacao`, `Data`, `Tecnico`) VALUES (?)"
    const values = [
        req.body.idOperacao,
        req.body.Patrimonio,
        req.body.Tipo,
        req.body.Nome_ou_Hostname,
        req.body.Serial_Number,
        req.body.Descricao,
        req.body.Status,
        req.body.Setor_Origem,
        req.body.Setor_Destino,
        req.body.Colaborador,
        req.body.Localizacao,
        req.body.Data,
        req.body.Tecnico,
    ]

    db.query(query,[values], (err, data)=>{
        if(err){
            return res.json(err)
        }
        return res.json(data)
    } )
})

//determina a porta que o app sera executado
app.listen(8800, ()=>{
    console.log("deu certo!");
})