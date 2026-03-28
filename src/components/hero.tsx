import { component$ } from '@qwik.dev/core';

export default component$<{
	title: string;
	name: string;
	scrollToAbout: () => void;
}>(({ title, name, scrollToAbout }) => {
	return (
		<section id='top' class='hero-section'>
			<div class='hero-shell'>
				<div class='hero-copy reveal-up' data-reveal>
		<h2 class='hero-copy__title'>{name}</h2>
					<p class='hero-copy__subtitle'>{title}</p>
					<p class='hero-copy__body'>
						I build products, care about front-end craft, and keep pushing for
						clearer, faster, better experiences.
					</p>

					<div class='hero-copy__meta'>
						<div class='hero-stat'>
							<span class='hero-stat__value'>2006</span>
							<span class='hero-stat__label'>Started building apps</span>
						</div>
						<div class='hero-stat'>
							<span class='hero-stat__value'>2012</span>
							<span class='hero-stat__label'>JavaScript clicked</span>
						</div>
					</div>

					<div class='hero-copy__actions'>
						<button class='hero-button hero-button--primary' onClick$={scrollToAbout}>
							Explore profile
						</button>
						<a
							class='hero-button hero-button--ghost'
							href='https://mentorcruise.com/mentor/giorgioboa/'
						>
							Free mentoring
						</a>
					</div>
				</div>
				<div class='hero-overlay-box reveal-right' data-reveal>
					<img src='/profile_450x450.webp' alt='Giorgio Boa' class='hero-overlay-box__img' />
				</div>
			</div>
		</section>
	);
});
