import { Request, Response } from "express";
import {
  selectProductsLimited,
  getTopSellingProducts,
} from "../../services/products";

const topSellingController = async (request: Request, response: Response) => {
  try {
    const limit = String(request.query.limit || "");

    const products = limit
      ? await selectProductsLimited(parseInt(limit))
      : await getTopSellingProducts();
    response.send(products);
  } catch (error) {
    response.send(error);
  }
};

export default topSellingController;
