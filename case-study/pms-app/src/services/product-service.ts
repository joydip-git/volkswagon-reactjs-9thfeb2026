import axios, { type AxiosResponse } from "axios";
import { PRODUCT_API_URL } from "../config/constants";
import type { ApiResponse } from "../models/api-response";
import type { Product } from "../models/product";

export function getProducts():
    Promise<AxiosResponse<ApiResponse<Product[]>>> {
    return axios.get<ApiResponse<Product[]>>(PRODUCT_API_URL)
}