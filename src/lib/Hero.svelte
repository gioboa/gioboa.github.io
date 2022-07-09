<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	const SCROLL_TO_ABOUT = 'scrollToAbout';

	export let name = '';
	export let title = '';
	export let data = {
		minLenght: 6,
		greeting: `Hello 👋  nice to meet you...  `,
	};

	let maxChars = data.minLenght;
	let increment = true;
	let intervalRef;

	const dispatch = createEventDispatcher();
	const scrollToAbout = () => dispatch(SCROLL_TO_ABOUT);

	onMount(
		() =>
			(intervalRef = setInterval(() => {
				maxChars === data.greeting.length
					? (increment = false)
					: maxChars === data.minLenght
					? (increment = true)
					: (increment = increment);
				maxChars += increment ? 1 : -1;
			}, 200))
	);

	onDestroy(() => {
		if (!!intervalRef) {
			clearInterval(intervalRef);
		}
	});
</script>

<div class="flex flex-row justify-center items-start overflow-hidden">
	<div
		class="w-full md:w-1/2 mx-auto text-center lg:p-20 lg:pb-10 text-gray-500 dark:text-gray-200"
	>
		<h1
			class="text-4xl md:text-6xl text-gray-700 dark:text-gray-400 font-bold my-2"
		>
			{name}
		</h1>
		<h1 class="text-4xl md:text-2xl my-2">{title}</h1>
		<h1 class="text-4xl md:text-2xl my-2">
			{#each data.greeting as char, i}
				{#if i <= maxChars}
					{char}
				{/if}
			{/each}
		</h1>
		<div
			class="animate-bounce mx-auto mt-10 p-2 w-10 h-10 bg-white dark:bg-slate-800 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full"
			on:click={scrollToAbout}
		>
			<svg
				class="w-6 h-6 text-gray-700 dark:text-gray-400"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
			</svg>
		</div>
	</div>
</div>
