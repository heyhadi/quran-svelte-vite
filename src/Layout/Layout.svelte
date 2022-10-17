<script lang="ts">
    import { Route, Router } from "svelte-routing";
	import NavHeader from "../components/NavHeader.svelte";
	import Quran from "../Views/Quran.svelte";
    import DoaHarian from "../Views/DoaHarian.svelte"
	import ReadAyat from "../Views/ReadAyat.svelte"
	import Bookmark from "../Views/Bookmark.svelte"
	import BacaDoaCard from "../components/BacaDoaCard.svelte"


</script>

<div class="app-container">
	<NavHeader />
	<main class="content-container">
		<div class="card-container jusitify-content-center">
			<Router url="/">
                <Route path="/" component={Quran} />
                <Route path="/doa-harian" component={DoaHarian} />
				<Route path="/baca/:id" component={ReadAyat} />
				<Route path="/bookmark" component={Bookmark} />
				<Route path="/baca-doa/:id" component={BacaDoaCard} />
            </Router>
		</div>
		<!-- <Sidebar /> -->
	</main>
</div>
