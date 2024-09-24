export const ApiPetsEndpoints = {
    add: {
        url: `/pet`,
        method: 'POST'
    },
    update: {
        url: `/pet`,
        method: 'PUT'
    },
    updateById: {
        url: (petId: number) => `/pet/${petId}`,
        method: 'POST'
    },
    delete: {
        url: (petId: number) => `/pet/${petId}`,
        method: 'DELETE'
    },
    findById: {
        url: (petId: number) => `/pet/${petId}`,
        method: 'GET'
    },
    findByStatus: {
        url: `/pet/findByStatus`,
        method: 'GET'
    },
    findByTags: {
        url: `/pet/findByTags`,
        method: 'GET'
    },
    uploadImage: {
        url: (petId: number) => `/pet/${petId}/uploadImage`,
        method: 'POST'
    }
}