import { Request, Response } from "express"
import { AulaService } from "../services/serviceAula"

const service = new AulaService()

export default class AulaController {
  async create(request: Request, response: Response) {
    const { data_aula, status_aula, fk_turma, fk_unidade } = request.body

    const result = await service.create({
      data_aula,
      status_aula,
      fk_turma,
      fk_unidade,
    })

    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.json(result)
  }

  async readAll(request: Request, response: Response) {
    const result = await service.readAll()
    if (result.length < 1) {
      return response.json("Nenhuma aula cadastrada!")
    }
    return response.json(result)
  }

  async readOne(request: Request, response: Response) {
    const { id_aula } = request.params
    const result = await service.readOne({ id_aula })
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.json(result)
  }

  async update(request: Request, response: Response) {
    const { id_aula } = request.params
    const { data_aula, status_aula, fk_turma, fk_unidade } = request.body
    const result = await service.update({
      id_aula,
      data_aula,
      status_aula,
      fk_turma,
      fk_unidade,
    })
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.json(result)
  }

  async delete(request: Request, response: Response) {
    const { id_aula } = request.params
    const result = await service.delete({ id_aula })
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.status(300).json(result)
  }
}
