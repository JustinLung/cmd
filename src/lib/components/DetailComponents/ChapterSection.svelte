<script>
	export let chapterTitle;
	export let chapterNumber;
	export let chapterUID;
</script>

<section class="chapter" id={chapterUID}>
	<span>{chapterNumber}</span>
	<h2>{chapterTitle}</h2>
	<div>
		<slot />
	</div>
</section>

<style>
	section {
		padding: 1rem;
		max-width: 75rem;
		margin: 0 auto;
	}

	section h2 {
		padding: 0.5rem 0;
		margin-bottom: 1rem;
		font-size: 1.3rem;
		border: 2px solid var(--color-black);
		max-width: 30rem;
	}

	section span {
		margin-bottom: 1rem;
		font-size: 1.3rem;
		max-width: 30rem;
		border: 2px solid var(--color-black);
		background-color: var(--color-cmd-yellow);
	}

	div {
		display: grid;
		grid-gap: 1rem;
	}

	@media (min-width: 45rem) {
		section {
			padding: 2rem 3rem;
		}
	}

	@media (min-width: 60rem) {
		section {
			padding: 2rem 5rem;
		}

		div {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 1rem;
		}
	}
</style>
