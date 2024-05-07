import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {createblog,getallblogs,getsingleblog,updateblog,deleteblog,addComment} from "../controllers/blog.controller.js";
const router = Router()


router.route("/createblog").post(verifyJWT, upload.single("image"),createblog)
router.route("/getallblogs").get(getallblogs)
router.route("/getsingleblog/:id").get(getsingleblog)
router.route("/updateblog/:id").put(updateblog)
router.route("/deleteblog/:id").delete(deleteblog)
router.route("/addComment/:id").post(addComment)



export default router //can be imported by any name _eg RegisterUser