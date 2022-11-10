import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '99cf6fe233msh0c2f5eeca1063cep1267bejsn89fd381d6107',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    } )
}