import Express from "express";
import * as productController from "../../controller/products";
import categoriesController from "./categories";
import categoryController from "./category";
import topSellingController from "../../controller/topSelling";
export const router = Express.Router();

router.use(Express.json());
router.use("/category", categoryController);
router.use("/categories", categoriesController);
router.use("/topselling", topSellingController);

router.get("/", productController.index);
router.get("/:id", productController.show);
router.post("/", productController.insert);
router.put("/:id", productController.update);
router.delete("/:id", productController.remove);

export default router;
