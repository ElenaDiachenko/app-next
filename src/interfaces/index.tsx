export interface DropdownProps {
	category: {
		id: string
		name: string
		slug: string
		subCategories?: SubCategory[]
	}
}
export interface SubCategory {
	id: string
	name: string
	slug: string
	categoryId: string
}
