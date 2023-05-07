import { EmploymentType, Technologies, Assets, type SkillsParams } from './utils';
import type {
	CareerParams,
	HomeParams,
	NavBarParams,
	PersonalProjectsParams,
	ResumePageParams
} from './utils';

export const PortfolioTitle = 'Daniel P White Portfolio';

export const NavBar: NavBarParams = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills'
};

export const Home: HomeParams = {
	title: 'Home Page',
	name: 'Daniel',
	lastName: 'WHITE',
	description:
		'Results-driven software developer with an expertise in problem solving and automation. Experience developing software solutions using Python, C++, Unreal Engine, Flask, and Docker. Skilled in DevOps, web and desktop application development, CI/CD pipelines, and Agile methodologies. Strong background in managing cross-platform builds and automated system testing in complex environments. Adept at learning new technologies and frameworks (currently learning Kubernetes and SvelteKit). Bachelors of Science in Computer Science from Florida State University. Active Secret Clearance granted January 2022. Former aircraft engine specialist in the United States Air Force.',
	links: {
		github: 'https://github.com/danielpwhite',
		linkedin: 'https://www.linkedin.com/in/daniel-white-205805134/',
		twitter: 'https://twitter.com/',
		stackoverflow: 'https://stackoverflow.com/users/21308307/danielpwhite',
		email: 'daniel.p.white@hotmail.com'
	},
	skills: [Technologies.Python, Technologies.JavaScript, Technologies.TypeScript, Technologies.HTML, Technologies.CSS, Technologies.Svelte, Technologies.PostgreSQL, Technologies.Redis]
};

export const PersonalProjects: PersonalProjectsParams = {
	title: 'Personal Projects',
	items: [
		{
			color: '#5e95e3',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
			links: [{ to: 'https://github.com/danielpwhite/Web-App-Deployed', label: 'GitHub' }],
			logo: Assets.Unknown,
			name: 'Web-App-Deployed',
			period: {
				from: new Date()
			},
			technologies: [Technologies.Python, Technologies.JavaScript, Technologies.Redis],
			type: 'Web Application and Deployment'
		},
		{
			color: '#ff3e00',
			description:
				'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
			links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
			logo: Assets.Svelte,
			name: 'Slick Portfolio',
			period: {
				from: new Date()
			},
			technologies: [Technologies.Svelte, Technologies.TypeScript],
			type: 'Website Template'
		}
	]
};

export const ProfessionalCareerParams: CareerParams = {
	title: 'Professional Experience',
	items: [
		{
			company: { logo: Assets.Unknown, name: 'Home' },
			description: 'Software Development and DevOps for a flight combat modeling software.',
			employmentType: EmploymentType.FullTime,
			industry: 'Software Development',
			location: 'Eglin AFB, FL',
			period: { from: new Date() },
			skills: [Technologies.Python, Technologies.HTML, Technologies.CSS],
			title: 'Software Developer I'
		}
	]
};

export const MySkillsParams: SkillsParams = {
	skills: [
		{
			technology: Technologies.JavaScript,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.'
		},
		{
			technology: Technologies.TypeScript,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.'
		},
		{
			technology: Technologies.Svelte,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.'
		},
		{
			technology: Technologies.Sass,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.'
		},
		{
			technology: Technologies.CSS,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.'
		}
	],
	title: 'My Skills'
};

export const ResumeParams: ResumePageParams = {
	title: 'Resumé',
	cv: 'https://github.com/danielpwhite/personal-portfolio/blob/master/static/DanielPWhiteResumeCurrent.pdf'
};
