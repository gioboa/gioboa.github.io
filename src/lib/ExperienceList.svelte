<script>
	import Experience from './Experience.svelte';
	const list = [];
</script>

<div class="container mx-auto w-full h-full">
	<h1
		class="text-4xl md:text-6xl text-center mt-20 text-gray-700 dark:text-gray-400 font-bold my-2"
	>
		My public activity timeline
	</h1>
	<div class="relative wrap overflow-hidden my-10 h-full">
		<div
			class="border-[3px] absolute border-opacity-20 border-gray-700 dark:border-gray-400 h-full border"
			style="left: calc(50% - 1px)"
		/>
		{#each list as exp}
			<Experience {...exp} />
		{/each}
	</div>
</div>
