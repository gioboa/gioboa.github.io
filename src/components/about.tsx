import { component$ } from '@qwik.dev/core';

export default component$(() => {
	return (
		<div id='about-me' class='bg-white dark:bg-gray-800 md:p-20'>
			<div class='grid grid-cols-1 md:rounded-md md:border-solid md:border-2 md:border-gray-500 dark:border-gray-300'>
				<img
					class='pt-10 mx-auto'
					src='./profile_450x450.webp'
					alt='Giorgio Boa profile picture'
          width='300'
          height='300'
				/>
				<div>
					<div class='text-2xl md:text-4xl font-bold py-[30px] text-center text-gray-700 dark:text-gray-100'>
						About Me
					</div>
					<div class='px-20 text-xl text-gray-700 dark:text-gray-100'>
						I'm a full stack developer and the front-end ecosystem is my
						passion. I started to develop application in 2006 and in 2012 I fall
						in love with JavaScript
						<br />
						<br />
						I'm active in open source ecosystem, I love learn and study new
						things
						<br />
						I also really enjoy public speaking and sharing my experiences
						<br />
						I'm very ambitious and I try to improve myself every day 🚀
						<br />
						<br />
						👇 I'm giving FREE mentoring
						<br />
						In all these years I learned a lot from communities and open source
						❤️
						<br />
						Now I want to give something back in my spare time 💪
						<br />
						<br />
						<a href='https://mentorcruise.com/mentor/giorgioboa/'>
							<img
								src='https://cdn.mentorcruise.com/img/banner/sky-sm.svg'
								width='240'
								height='240'
								alt='MentorCruise'
							/>
						</a>
						<br />
					</div>
				</div>
			</div>
		</div>
	);
});
