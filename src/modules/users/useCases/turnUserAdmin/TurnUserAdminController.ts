import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    try {
      const admin = this.turnUserAdminUseCase.execute({ user_id });
      return response.json(admin).send();
    } catch {
      return response
        .status(404)
        .json({ error: "User does not exists" })
        .send();
    }
  }
}

export { TurnUserAdminController };
