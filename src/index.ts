import { AppDataSource } from "./databases/connections/datasourceDev"
import { ProdDataSource } from "./databases/connections/datasourceProd"
import rotas from "./routes/routes"

// ProdDataSource.initialize()

ProdDataSource.initialize()
.then()
    console.log("Database connected!")
    
const express = require("express")
const app = express()
app.use(express.json())
app.use(rotas)

app.listen(3333, () => console.log("O server esta ON na porta 3333."))
