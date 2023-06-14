import { Request, Response } from "express"
import { CursoService } from "../services/serviceCurso"

const service = new CursoService()

export default class CursoController {
  async create(request: Request, response: Response) {
    const { descricao_curso, carga_horaria_curso, modalidade, eixo } =
      request.body

    const result = await service.create({
      descricao_curso,
      carga_horaria_curso,
      modalidade,
      eixo,
    })

    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }
    return response.status(200).json(result)
  }

  async readAll(request: Request, response: Response) {
    const result = await service.readAll()
    if (result.length < 1) {
      return response.status(400).json("Nenhum curso cadastrado!")
    }
    return response.status(200).json(result)
  }

  async readOne(request: Request, response: Response) {
    const { id_curso } = request.params
    const result = await service.readOne({ id_curso })
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.json(result)
  }

  async readByEixo(request: Request, response: Response) {
    const { eixo } = request.body
    const result = await service.readByEixo({ eixo })
    if (result instanceof Error) {
      return response.status(418).json(result.message)
    }
    return response.json(result)
  }

  async readByModalidade(request: Request, response: Response) {
    const { modalidade } = request.body
    const result = await service.readByModalidade({ modalidade })
    if (result instanceof Error) {
      return response.status(418).json(result.message)
    }
    return response.json(result)
  }

  async update(request: Request, response: Response) {
    const { id_curso } = request.params
    const { descricao_curso, carga_horaria_curso, modalidade, eixo } =
      request.body
    const result = await service.update({
      id_curso,
      descricao_curso,
      carga_horaria_curso,
      modalidade,
      eixo,
    })
    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }
    return response.json(result)
  }

  async delete(request: Request, response: Response) {
    const { id_curso } = request.params
    const result = await service.delete({ id_curso })
    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }
    return response.status(300).json(result)
  }
}
