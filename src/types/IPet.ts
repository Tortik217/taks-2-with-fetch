import {ITag} from "./ITag"
import {ICategory} from "./ICategory"

export enum PetStatus {
    available = 'available',
    pending = 'pending',
    sold = 'sold'
}

export interface IPet {
    id: number
    name: string
    category: ICategory
    photoUrls: string[]
    tags: ITag[]
    status: PetStatus
}