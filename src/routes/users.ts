import { Router } from "express";
import { ZodError } from "zod";
import { userSignupSchema } from "../utils/schema";

const userRouter = Router();

userRouter.post("/", (req, res) => {
  try {
    let { email, password, name } = userSignupSchema.parse(req.body);
    res.send({ email, password, name });
  } catch (e) {
    if (e instanceof ZodError) {
      res.status(400).json({
        msg: "Required fields are missing",
      });
    }
  }
});

export default userRouter;
