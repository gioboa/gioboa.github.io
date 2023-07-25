import { component$ } from '@builder.io/qwik';
import SocialLinks from './social-links';

export default component$<{
	theme: 'light' | 'dark';
	title: string;
	name: string;
	changeTheme: () => void;
}>(({ theme, name, title, changeTheme }) => {
	return (
		<div class='border-b-[1px] border-gray-500 dark:border-gray-100'>
			<div class='max-w-6xl mx-auto px-4 py-10 '>
				<div class='flex md:flex-row justify-between items-center'>
					<div class='flex flex-col'>
						<h1 class='font-semibold text-xl dark:text-gray-100'>{name}</h1>
						<p class='text-base font-light text-gray-500 dark:text-gray-300'>
							{title}
						</p>
					</div>

					<div class='space-x-4 flex flex-row items-center'>
						<SocialLinks />
						<button
							aria-label='Toggle Dark Mode'
							type='button'
							class='w-10 h-10 p-3 rounded focus:outline-none'
							onClick$={changeTheme}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								stroke='currentColor'
								class='w-4 h-4 text-yellow-500 dark:text-yellow-500'
							>
								<path
									stroke-linecap='round'
									strokel-linejoin='round'
									stroke-width={2}
									d={
										theme === 'dark'
											? 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
											: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
									}
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
});
