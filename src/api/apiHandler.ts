import axios from 'axios';

export interface Post {
    userId: number;
    id: number;
    title: string;
    description: string;
    image:any;
    price:number;
}

const API_URL = "https://fakestoreapiserver.reactbd.com/products";

export const fetchPostByUser = async (userId: number): Promise<Post[]> => {
    try {
        const response = await axios.get<Post[]>(`${API_URL}`, {
            // params: { userId }
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(`Fetching posts failed: ${error.message}`);
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
}