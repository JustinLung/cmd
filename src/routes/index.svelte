<script>
	import Hero from '$lib/components/IndexComponents/Hero.svelte';
	import Introduction from '$lib/components/IndexComponents/Introduction.svelte';
	import Seperator from '$lib/components/Seperator.svelte';
	import Standard from '$lib/components/IndexComponents/Standard.svelte';
	import StandardChapter from '$lib/components/IndexComponents/StandardChapter.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import StandardSection from '$lib/components/IndexComponents/StandardSection.svelte';

	export let page;
	export let standards;
</script>

<PageTransition>
	<main>
		<Hero heroTitle={page.data.title} />
		<Introduction introduction={page.data?.introduction} introductionTitle="Mid Term" />
		<StandardSection>
			{#each standards as standard}
				<Standard
					standardUID={`/${standard?.uid}`}
					standardTitle={`${standard?.data.standardnumber}.0 ${standard.data?.title}`}
				>
					<Seperator />
					{#each standard.data?.chapters as chapter, i}
						<StandardChapter
							chapterTitle={`${standard?.data.standardnumber}.${i + 1} ${chapter.data?.title}`}
						/>
					{/each}
				</Standard>
			{/each}
		</StandardSection>
	</main>
</PageTransition>
