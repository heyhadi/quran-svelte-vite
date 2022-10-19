<script lang="ts">
	import AyatCard from "../components/AyatCard.svelte";
	import ScrollTop from "../components/ScrollTop.svelte";
	import { useQuery } from "@sveltestack/svelte-query";

	const surahId: string = window.location.pathname.split("/baca/")[1];

	const queryResult = useQuery("ayat", () => {
		return fetch(`https://quranapi.idn.sch.id/surah/${surahId}`).then(
			(res) => res.json()
		);
	});

	// $: console.log($queryResult);
</script>

{#if surahId !== "1"}
	{#if !$queryResult.isFetching}
		<h1 class="text-center">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
	{/if}
{/if}
<AyatCard queryResult={$queryResult} />
<ScrollTop />

<style>
	h1 {
		font-weight: bold !important;
		font-size: 40px;
		font-family: "Amiri Quran";
		margin-bottom: 60px;
	}
</style>
