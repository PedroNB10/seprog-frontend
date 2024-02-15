import 'server-only'

import axiosHeader from "../api/axiosHeader";
import { IHomepage } from "../interfaces/IHomepage";

export async function getData() {
    let res: IHomepage | null = null;
    let data = null;



    try {
        const response = await axiosHeader.get<IHomepage>('home?populate=*');
        const { data } = response.data;

    } catch (error) {
        throw new Error("Erro ao buscar dados da API");
    }
    console.log(data);


    return data;


}