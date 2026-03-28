import {
	component$,
	useComputed$,
	useSignal,
	useVisibleTask$,
} from '@qwik.dev/core';
import SocialLinks from './social-links';

export default component$<{
	theme: 'light' | 'dark';
	changeTheme: () => void;
}>(({ theme, changeTheme }) => {
	const data = { minLenght: 8, greeting: `Hello 👋 nice to meet you...  ` };
	const maxCharsSig = useSignal(data.minLenght);
	const greetingSig = useComputed$(() =>
		data.greeting.substring(0, maxCharsSig.value)
	);

	useVisibleTask$(() => {
		let increment = true;
		const intervalRef = window.setInterval(() => {
			maxCharsSig.value === data.greeting.length
				? (increment = false)
				: maxCharsSig.value === data.minLenght
					? (increment = true)
					: increment;
			maxCharsSig.value += increment ? 1 : -1;
		}, 200);

		return () => window.clearInterval(intervalRef);
	});

	return (
		<header class='site-header'>
			<div class='site-header__inner'>
				<div class='site-brand'>
					<h1 class='site-brand__name'>{greetingSig.value}</h1>
				</div>

				<div class='site-header__actions'>
					<nav class='site-nav' aria-label='Primary'>
						<a href='#top'>Home</a>
						<a href='#about-me'>About</a>
						<a href='https://mentorcruise.com/mentor/giorgioboa/'>Mentoring</a>
					</nav>
					<div class='site-socials'>
						<SocialLinks />
					</div>
					<button
						aria-label='Toggle Dark Mode'
						type='button'
						class='theme-toggle'
						onClick$={changeTheme}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							stroke='currentColor'
							class='theme-toggle__icon'
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
		</header>
	);
});
