<script lang="ts">
    import SearchBar from "../components/SearchBar.svelte"
    import DoaCard from "../components/DoaCard.svelte"
    import { useQuery } from "@sveltestack/svelte-query";
	import {doaHarian, doaHarianFilter } from "../store/store";
	import ScrollTop from "../components/ScrollTop.svelte"

	const queryResult = useQuery("doaHarian", () => {
		return fetch("https://api.npoint.io/31b52b3caae1b5c00c17").then((res) =>
			res.json()
		);
	});
	
	$: doaHarian.set($queryResult);
    $: doaHarianFilter.set($queryResult.data);

    // $: console.log($queryResult)

</script>

<div>
    <SearchBar doa/>
    <DoaCard/>
	<ScrollTop />
</div>