import { BsCashCoin } from 'react-icons/bs'
import { FaUserTie } from 'react-icons/fa'
import { GiCoins } from 'react-icons/gi'
import { TbFileCertificate, TbFileDollar } from 'react-icons/tb'

export const aboutNav = [
	{ id: '1', name: 'About Guru', slug: 'about-guru' },
	{ id: '2', name: 'How Guru Works', slug: 'how-guru-works' },
	{ id: '3', name: 'Why Guru', slug: 'why-guru' },
	{ id: '4', name: 'Pricing', slug: 'pricing' },
	{ id: '5', name: 'Blog', slug: 'blog' }
]

export const solutionsNav = [
	{ id: '1', name: 'Pricing', slug: 'pricing' },
	{ id: '2', name: 'Agency', slug: 'agency' },
	{ id: '3', name: 'Purchase Orders', slug: 'purchase-orders' },
	{ id: '4', name: 'Agreements', slug: 'agreements' },
	{ id: '5', name: 'SafePay', slug: 'safePay' }
]

export const menuLink = [
	{ name: 'Find Freelancers', slug: 'find-freelancers', subCategories: [] },
	{ name: 'Find Jobs', slug: 'find-jobs', subCategories: [] },
	{ name: 'About', slug: 'about', subCategories: aboutNav },
	{ name: 'Solutions', slug: 'solutions', subCategories: solutionsNav }
]

const stats = [
	{ title: '800,00', desc: 'Employers Worldwide', icon: FaUserTie },
	{ title: '1 Million', desc: 'Paid Invoices', icon: TbFileDollar },
	{ title: '$250 Million', desc: 'Paid to Freelancers', icon: BsCashCoin },
	{ title: '99%', desc: 'Customer Satisfaction Rate', icon: TbFileCertificate }
]

const howWork = [
	{
		title: 'Post a Job',
		desc: 'Create your free job posting and start receiving Quotes within hours.',
		icon: FaUserTie
	},
	{
		title: 'Hire Freelancers',
		desc: 'Compare the Quotes you receive and hire the best freelance professionals for the job.',
		icon: FaUserTie
	},
	{
		title: 'Get Work Done',
		desc: ' Decide on how and when payments will be made and use WorkRooms to collaborate, communicate and track work.',
		icon: FaUserTie
	},
	{
		title: 'Make Secure Payments',
		desc: 'Choose from multiple payment methods with SafePay payment protection.',
		icon: FaUserTie
	}
]
const workWayList = [
	{
		title: 'Fixed Price',
		desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam saepe quam eligendi maiores! Deserunt ipsam debitis iste facere.'
	},
	{
		title: 'Hourly',
		desc: 'Tempora rerum quae dolorem veniam maiores praesentium veritatis error, dolor quas nisi'
	},
	{
		title: 'Task-Based',
		desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam saepe quam eligendi maiores! Deserunt ipsam debitis iste facere.'
	},
	{
		title: 'Recurring Payment',
		desc: 'Tempora rerum quae dolorem veniam maiores praesentium veritatis error, dolor quas nisi'
	}
]

const heroSkills = [
	'Data Entry',
	'Graphic Design ',
	'Logo Design',
	'Ethical Hacking ',
	'WordPress'
]

export const constants = { heroSkills, menuLink, stats, howWork, workWayList }
