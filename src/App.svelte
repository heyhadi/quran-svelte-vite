<script lang="ts">
	import { Router, Link, Route, navigate } from "svelte-routing";
	import { Icon } from "sveltestrap";
	import Layout from "./Layout/Layout.svelte";
	import { QueryClientProvider } from "@sveltestack/svelte-query";

	// console.log(location);
</script>

<QueryClientProvider>
	<Router>
		<div>
			<Route path="/*" component={Layout} />
		</div>
	</Router>
</QueryClientProvider>
