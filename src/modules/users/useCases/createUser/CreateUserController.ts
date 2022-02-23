import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { email, name } = request.body;
    try {
      const user = this.createUserUseCase.execute({ name, email });
      return response.status(201).json(user).send();
    } catch {
      return response
        .status(400)
        .json({ error: "Email or password are wrong!" })
        .send();
    }
  }
}

export { CreateUserController };
