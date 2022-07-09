<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { Route, Router } from 'svelte-routing';
	import About from './lib/About.svelte';
	import Hero from './lib/Hero.svelte';
	import Navbar from './lib/Navbar.svelte';

	let theme = 'light';
	let name = 'Giorgio Boa';
	let title = 'Full stack developer';
	let aboutRef;

	const changeTheme = () =>
		theme === 'dark' ? (theme = 'light') : (theme = 'dark');
	const scrollToAbout = () =>
		aboutRef.scrollIntoView({
			behavior: 'smooth',
		});
	onMount(() => {
		window.scrollTo(0, 0);
	});

	onDestroy(() => console.log('destroy'));
</script>

<div class="{theme} {theme === 'dark' ? 'bg-slate-800' : 'bg-slate-200'}">
	<Router>
		<Navbar {theme} {name} {title} on:changeTheme={changeTheme} />
		<Route path="*">
			<Hero {name} {title} on:scrollToAbout={scrollToAbout} />
			<div bind:this={aboutRef}>
				<About />
			</div>
		</Route>
		<!-- <Route path="/activity-timeline">
			<ExperienceList />
		</Route> -->
		<div
			class="grid grid-cols-1 border-solid border-t-2 border-gray-500 dark:border-gray-300 text-center"
		>
			<div
				class="text-2xl font-bold pt-[30px] pb-[25px] text-gray-700 dark:text-gray-400"
			>
				© Giorgio Boa {new Date().getFullYear()}
			</div>
		</div>
	</Router>
</div>
