import { Request, Response } from "express"
import { TurmaService } from "../services/serviceTurma"

const service = new TurmaService()

export default class CursoController {
  async create(request: Request, response: Response) {
    const { fk_curso, turno, data_inicio, horas_aula_dia } = request.body

    const result = await service.create({
      fk_curso,
      turno,
      data_inicio,
      horas_aula_dia,
    })

    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.json(result)
  }

  async readAll(request: Request, response: Response) {
    const result = await service.readAll()
    if (result.length < 1) {
      return response.json("Nenhuma turma cadastrada!")
    }
    return response.json(result)
  }

  async readOne(request: Request, response: Response) {
    const { id_turma } = request.params
    const result = await service.readOne({ id_turma })
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.json(result)
  }

  async readByTurno(request: Request, response: Response) {
    const { turno } = request.params
    const result = await service.readByTurno({ turno })
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.json(result)
  }

  async update(request: Request, response: Response) {
    const { id_turma } = request.params
    const { fk_curso, turno, data_inicio, data_fim, horas_aula_dia } =
      request.body
    const result = await service.update({
      id_turma,
      fk_curso,
      turno,
      data_inicio,
      data_fim,
      horas_aula_dia,
    })
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.json(result)
  }

  async delete(request: Request, response: Response) {
    const { id_turma } = request.params
    const result = await service.delete({ id_turma })
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.status(300).json(result)
  }
}
