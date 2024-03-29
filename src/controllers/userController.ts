import User from '../models/User'
import { Request, Response } from 'express'
class UserController {
  public async index (req: Request, res : Response): Promise<Response> {
    const user = await User.find()

    return res.json(user)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.json(user)
  }
}

export default new UserController()
