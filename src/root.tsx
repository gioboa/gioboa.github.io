import { $, component$, useSignal, useVisibleTask$ } from '@qwik.dev/core';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import "./global.css";


export default component$(() => {
	const themeSig = useSignal<'light' | 'dark'>('light');
	const aboutSig = useSignal<Element>();
	const shellSig = useSignal<Element>();
	const name = 'Giorgio Boa';
	const title = 'Full stack developer';

	const changeTheme = $(() => {
		themeSig.value === 'dark'
			? (themeSig.value = 'light')
			: (themeSig.value = 'dark');
		document.body.className = themeSig.value === 'dark' ? 'dark' : '';
	});

	useVisibleTask$(() => {
		window.scrollTo(0, 0);

		let ticking = false;
		const updateScrollOffset = () => {
			if (shellSig.value) {
				const scrollY = window.scrollY;
				shellSig.value.setAttribute('style', [
					`--scroll-offset:${scrollY.toFixed(1)}px`,
					`--scroll-tilt:${(scrollY * 0.02).toFixed(2)}deg`,
					`--scroll-glow:${Math.min(scrollY * 0.0008, 0.22).toFixed(3)}`
				].join(';'));
			}
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				ticking = true;
				window.requestAnimationFrame(updateScrollOffset);
			}
		};

		const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-visible');
						observer.unobserve(entry.target);
					}
				}
			},
			{ threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
		);

		for (const node of nodes) {
			observer.observe(node);
		}

		updateScrollOffset();
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => {
			observer.disconnect();
			window.removeEventListener('scroll', onScroll);
		};
	});

	const scrollToAbout = $(() => {
		if (aboutSig.value) {
			aboutSig.value.scrollIntoView({
				behavior: 'smooth',
			});
		}
	});

	return (
		<div ref={shellSig} class={`${themeSig.value} app-shell`}>
			<div class='app-bg'>
				<div class='app-bg__orb app-bg__orb--one' />
				<div class='app-bg__orb app-bg__orb--two' />
				<div class='app-bg__grid' />
			</div>
			<Navbar
				theme={themeSig.value}
				changeTheme={changeTheme}
			/>
			<main>
				<Hero name={name} title={title} scrollToAbout={scrollToAbout} />
				<div ref={aboutSig}>
					<About />
				</div>
			</main>
			<footer class='page-footer'>
				<div class='page-footer__inner'>© Giorgio Boa {new Date().getFullYear()}</div>
			</footer>
		</div>
	);
});
