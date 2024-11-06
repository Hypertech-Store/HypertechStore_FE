import instance from "./instance";

export const getAllProducts = async () => {
    const res = await instance.get('/san-pham/allProduct');
    return res;
};

export const getVariantProductById = async (productId) => {
    const res = await instance.get(`/san-pham/${productId}/bien-the`);
    return res;
};