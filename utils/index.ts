import axios, { AxiosResponse } from 'axios'

interface AllCarsService {
	getAllCars: () => Promise<AxiosResponse<any>>
}

const headers = {
	'X-RapidAPI-Key': '59fd558017mshb0f2a8084574345p1a46ffjsn8ee143532812',
	'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
}

export const allCarsService: AllCarsService = {
	getAllCars: async () => {
		const response = await axios.get(
			'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
			{
				headers,
				params: {
					model: 'corolla',
				},
			}
		)
		return response.data
	},
}
