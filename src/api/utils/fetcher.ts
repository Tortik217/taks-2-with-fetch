import {configGlobal} from "../../config"

export const fetcher = async (
    url: string,
    config: RequestInit = {}
) => {
    try {
        const res = await fetch(configGlobal.baseApiUrl + url, {
            ...config,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: config?.method ?? 'GET'
        })

        return await res.json()
    } catch (error) {
        console.error('Failed to fetch:', error)
        throw error
    }
}
