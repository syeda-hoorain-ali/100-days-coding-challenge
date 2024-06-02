import { NextFunction, Request, Response } from "express"

export type Middleware = (req: Request<any>, res: Response<any>, next: NextFunction) => void;