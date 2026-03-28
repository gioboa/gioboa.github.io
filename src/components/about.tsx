import { component$ } from '@qwik.dev/core';

export default component$(() => {
	return (
		<section id='about-me' class='about-section'>
			<div class='about-shell'>
				<div class='about-card reveal-up' data-reveal>
					<div class='about-card__media reveal-left' data-reveal>
						<div class='about-card__media-frame about-card__media-frame--alt'>
							<img
								class='about-card__logos'
								src='./logos.png'
								alt='Open source developer logos'
								width='752'
								height='571'
							/>
						</div>
						<div class='about-card__mini-stats'>
							<div>
								<span>Focus</span>
								<strong>Front-end ecosystem</strong>
							</div>
							<div>
								<span>Energy</span>
								<strong>Ambitious every day</strong>
							</div>
						</div>
					</div>

					<div class='about-card__content reveal-right' data-reveal>
						<p class='about-card__eyebrow'>About me</p>
						<h2 class='about-card__title'>Building, learning, sharing.</h2>
						<div class='about-card__text'>
							<p>
								I'm a full stack developer and the front-end ecosystem is my
								passion. I started to develop application in 2006 and in 2012 I
								fall in love with JavaScript.
							</p>
							<p>
								I'm active in open source ecosystem, I love learn and study new
								things. I also really enjoy public speaking and sharing my
								experiences.
							</p>
							<p>
								I'm very ambitious and I try to improve myself every day 🚀
							</p>
						</div>

						<div class='about-mentoring'>
							<p class='about-mentoring__eyebrow'>👇 I'm giving FREE mentoring</p>
							<p class='about-mentoring__text'>
								In all these years I learned a lot from communities and open
								source ❤️ Now I want to give something back in my spare time 💪
							</p>
							<a
								class='about-mentoring__banner'
								href='https://mentorcruise.com/mentor/giorgioboa/'
							>
								<img
									src='https://cdn.mentorcruise.com/img/banner/sky-sm.svg'
									width='240'
									height='240'
									alt='MentorCruise'
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
});
