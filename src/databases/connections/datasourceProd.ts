import { DataSource } from "typeorm"
import Curso from "../models/curso"
import Unidade from "../models/unidade"
import Turma from "../models/turma"
import Recesso from "../models/recesso"
import Aula from "../models/aula"

export const ProdDataSource = new DataSource({
  name: "default",
  type: "postgres",
  port: 5432,
  // Render
  //url: "postgres://dev:sigU3d2UV1p5kRvNCf6Y98U7GWymQ28x@dpg-cijk8munqql0l1sanu40-a.oregon-postgres.render.com/cronogramas_yg84",
  // ElephantSQL
  url: "postgres://uaqmckfn:5Vam23Hp6vvb0aXBUt7q7EQYeFLqSL94@tyke.db.elephantsql.com/uaqmckfn", 
  synchronize: true,
  logging: true,
  entities: [Curso, Unidade, Turma, Recesso, Aula]
}
)


