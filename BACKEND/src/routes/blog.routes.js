import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {createblog,getallblogs} from "../controllers/blog.controller.js";
const router = Router()


router.route("/createblog").post(verifyJWT, upload.single("image"),createblog)
router.route("/getallblogs").get(getallblogs)



export default router //can be imported by any name _eg RegisterUser