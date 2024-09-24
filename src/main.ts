import { ApiPetsRequests } from './api/pets/ApiPetsRequests'
import { IPet, PetStatus } from './types/IPet'

async function testRequest() {
    try {
        const result = await ApiPetsRequests.findByStatus({
            status: PetStatus.available
        })

        console.log(result)
    } catch (e) {
        console.error(e)
    }
}

async function simpleTestResponse() {
    try {
        const request = await fetch('https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'GET'
        })

        return await request.json() as Promise<IPet[]>
    } catch (e) {
        console.error(e)
    }
}

testRequest()
console.log('simpleTestResponse', await simpleTestResponse())
