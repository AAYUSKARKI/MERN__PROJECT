import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";
import createblog from "../controllers/blog.controller.js";
const router = Router()


router.route("/createblog").post(verifyJWT, upload.single("image"),createblog)


export default router //can be imported by any name _eg RegisterUser