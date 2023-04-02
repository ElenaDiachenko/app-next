export interface ICategory {
	category: {
		id?: string
		name: string
		slug: string
		subCategories: ISubCategory[]
	}
}
export interface ISubCategory {
	id: string
	name: string
	slug: string
	categoryId?: string
}
