<script lang="ts">
    import SearchBar from "../components/SearchBar.svelte"
    import SurahCard from "../components/SurahCard.svelte"
    import { useQuery } from "@sveltestack/svelte-query";
	import {surahs, arrSurahs } from "../store/store";
	import ScrollTop from "../components/ScrollTop.svelte"

	const queryResult = useQuery("surahs", () => {
		return fetch("https://quranapi.idn.sch.id/surah/").then((res) =>
			res.json()
		);
	});
	
	$: surahs.set($queryResult);
    $: arrSurahs.set($queryResult.data?.data);

</script>

<div>
    <SearchBar quran/>
    <SurahCard />
	<ScrollTop />
</div>