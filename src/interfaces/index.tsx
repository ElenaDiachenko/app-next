import { IconType } from 'react-icons'

export interface ICategory {
	category: {
		id?: string
		name: string
		slug: string
		users?: number
		icon?: string | any
		subCategories: ISubCategory[]
	}
}
export interface ISubCategory {
	id: string
	name: string
	slug: string
	categoryId?: string
}

export interface IStaticSectionData {
	title: string
	desc?: string
	icon: IconType
}
