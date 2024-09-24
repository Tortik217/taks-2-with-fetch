import { ApiPetsEndpoints } from './ApiPetsEndpoints'
import { IPet, PetStatus } from '../../types/IPet'
import { fetcher } from '../utils/fetcher.ts'

export async function findByStatus(params: {
    status: PetStatus
}, init?: RequestInit): Promise<IPet[]> {

    const queryString = new URLSearchParams({
        status: params.status
    }).toString()

    return await fetcher(ApiPetsEndpoints.findByStatus.url + `?${queryString}`, {
        ...init,
        method: ApiPetsEndpoints.findByStatus.method
    })
}

export async function findById(params: {
    id: number
}, init?: RequestInit): Promise<IPet[]> {
    return await fetcher(ApiPetsEndpoints.findById.url(params.id), {
        ...init,
        method: ApiPetsEndpoints.findById.method
    })
}

export async function findByTags(params: {
    tags: string[]
}, init?: RequestInit): Promise<IPet[]> {

    const searchParams = new URLSearchParams()
    params.tags?.forEach(param => searchParams.append('tags[]', param))
    const queryString = searchParams.toString()

    return await fetcher(ApiPetsEndpoints.findByTags.url + `?${queryString}`, {
        ...init,
        method: ApiPetsEndpoints.findByTags.method
    })
}

export const ApiPetsRequests = {
    findByStatus,
    findByTags,
    findById
}