import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';

const baseUrl = 'https://www.eclatly.com'

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<footer className="border-t py-20 dark:border-neutral-800 ">
			<Container className="px-5">
				{PUBLICATION_LOGO ? (
					<div className="mb-20 flex w-full flex-row justify-center">
						<Link
							href={baseUrl}
							aria-label={`${publication.title} home page`}
							className="flex flex-row items-center gap-5"
						>
							<img className="block w-40" src={PUBLICATION_LOGO} alt={publication.title} />
						</Link>
					</div>
				) : (
					<p className="mb-20 text-center text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-4xl">
						{publication.title}
					</p>
				)}
				<div className="grid w-full grid-cols-3 gap-5 md:grid-cols-6 lg:grid-cols-5">
					<div className="col-span-1 grid grid-cols-4 gap-5 md:col-span-4 lg:col-span-3">
						<div className="col-span-full md:col-span-2 lg:col-span-1">
							<p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">
								Product
							</p>
							<ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
								<li>
									<a href={`${baseUrl}/#features`} className="hover:underline">
										Features
									</a>
								</li>
								<li>
									<a href={`${baseUrl}/#pricing`} className="hover:underline">
										Pricing
									</a>
								</li>
								<li>
									<a href={`${baseUrl}/#faqs`} className="hover:underline">
										FAQ
									</a>
								</li>
							</ul>
						</div>
						<div className="col-span-full md:col-span-2 lg:col-span-1">
							<p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">Your Account</p>
							<ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
								<li>
									<a href={`${baseUrl}/create-account`} className="hover:underline">
										Sign Up
									</a>
								</li>
								<li>
									<a href={`${baseUrl}/app`} className="hover:underline">
										Sign In
									</a>
								</li>
							</ul>
						</div>
						<div className="col-span-full md:col-span-2 lg:col-span-1">
							<p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">Eclatly</p>
							<ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
								<li>
									<a href={`${baseUrl}/about-us`} className="hover:underline">
										About us
									</a>
								</li>
								<li>
									<a href={`${baseUrl}/contact-us`} className="hover:underline">
										Contact us
									</a>
								</li>
								<li>
									<a href={`https://blog.eclatly.com/`} className="hover:underline">
										Blog
									</a>
								</li>
							</ul>
						</div>
						<div className="col-span-1">
							<p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">Terms</p>
							<ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
								<li>
									<a href={`${baseUrl}/privacy-policy`} className="hover:underline">
										Privacy policy
									</a>
								</li>
								<li>
									<a href={`${baseUrl}/user-agreement`} className="hover:underline">
										User agreement
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-span-2 flex flex-col items-end gap-5 text-right text-slate-600 dark:text-neutral-300 md:text-left">
						<SocialLinks />
						<p>&copy; 2023 - {new Date().getFullYear()} <br /> Eclatly Eclatly - Kids Learn French. <br /> All rights reserved.</p>
						{false && <p>
							<a href="#" className="hover:underline">
								Privacy Policy
							</a>{' '}
							·{' '}
							<a href="#" className="hover:underline">
								Terms
							</a>
						</p>}
					</div>
				</div>
			</Container>
		</footer>
	);
};
