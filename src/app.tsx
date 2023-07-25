import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';

export const App = component$(() => {
	const themeSig = useSignal<'light' | 'dark'>('light');
	const aboutSig = useSignal<Element>();
	const name = 'Giorgio Boa';
	const title = 'Full stack developer';

	const changeTheme = $(() => {
		themeSig.value === 'dark'
			? (themeSig.value = 'light')
			: (themeSig.value = 'dark');
	});

	useVisibleTask$(() => {
		window.scrollTo(0, 0);
	});

	const scrollToAbout = $(() => {
		if (aboutSig.value) {
			aboutSig.value.scrollIntoView({
				behavior: 'smooth',
			});
		}
	});

	return (
		<div class={`${themeSig.value} ${themeSig.value === 'dark' ? 'bg-slate-800' : 'bg-slate-200'}`}>
			<Navbar
				theme={themeSig.value}
				name={name}
				title={title}
				changeTheme={changeTheme}
			/>
			<Hero name={name} title={title} scrollToAbout={scrollToAbout} />
			<div ref={aboutSig}>
				<About />
			</div>
			<div class='grid grid-cols-1 border-solid border-t-2 border-gray-500 dark:border-gray-300 text-center'>
				<div class='text-l font-bold pt-[30px] pb-[25px] text-gray-700 dark:text-gray-400'>
					© Giorgio Boa {new Date().getFullYear()}
				</div>
			</div>
		</div>
	);
});
