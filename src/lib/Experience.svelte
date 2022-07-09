<script>
	export let direction = 'left';
	export let bgColorClass;
	export let darkBgColorClass;
	export let title;
	export let text;
	$: directionClass = direction === 'left' ? 'flex-row-reverse' : '';
</script>

<div class="mb-8 flex justify-between {directionClass} items-center w-full p-7">
	<div class="order-1 w-5/12" />
	<div
		class="z-20 flex items-center order-1 bg-gray-700 dark:bg-gray-100 w-8 h-8 rounded-full"
	/>
	<div
		class="order-1 {bgColorClass} {darkBgColorClass} rounded-lg w-5/12 px-6 py-4 hover:scale-105 transition duration-300"
	>
		<h3
			class="mb-3 font-bold text-gray-700 dark:text-gray-100 dark:text-gray-400 text-xl"
		>
			{title}
		</h3>
		<span
			class="text-sm font-medium leading-snug tracking-wide text-gray-700 dark:text-gray-100 text-opacity-100"
		>
			{text}
		</span>
	</div>
</div>
