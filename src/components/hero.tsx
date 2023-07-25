import {
	component$,
	useComputed$,
	useSignal,
	useVisibleTask$,
} from '@builder.io/qwik';

export default component$<{
	title: string;
	name: string;
	scrollToAbout: () => void;
}>(({ title, name, scrollToAbout }) => {
	const data = { minLenght: 8, greeting: `Hello 👋 nice to meet you...  ` };
	const maxCharsSig = useSignal(data.minLenght);
	const subTitleSig = useComputed$(() =>
		data.greeting.substring(0, maxCharsSig.value)
	);

	useVisibleTask$(({ cleanup }) => {
		let increment = true;
		const intervalRef = setInterval(() => {
			maxCharsSig.value === data.greeting.length
				? (increment = false)
				: maxCharsSig.value === data.minLenght
				? (increment = true)
				: (increment = increment);
			maxCharsSig.value += increment ? 1 : -1;
		}, 200);
		cleanup(() => {
			if (!!intervalRef) {
				clearInterval(intervalRef);
			}
		});
	});

	return (
		<div class='flex flex-row justify-center items-start overflow-hidden'>
			<div class='w-full md:w-1/2 mx-auto text-center lg:p-20 pb-10 lg:pb-10 text-gray-500 dark:text-gray-200'>
				<h1 class='pt-10 lg:pt-0 text-4xl md:text-6xl text-gray-700 dark:text-gray-400 font-bold'>
					{name}
				</h1>
				<h1 class='text-l md:text-2xl pt-2'>{title}</h1>
				<h1 class='text-l md:text-2xl pt-2'>{subTitleSig.value}</h1>
				<div
					class='animate-bounce mx-auto mt-10 p-2 w-10 h-10 bg-white dark:bg-slate-800 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full'
					onClick$={scrollToAbout}
				>
					<svg
						class='w-6 h-6 text-gray-700 dark:text-gray-400'
						fill='none'
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path d='M19 14l-7 7m0 0l-7-7m7 7V3' />
					</svg>
				</div>
			</div>
		</div>
	);
});
