<script lang="ts">
	import { Router, Link, Route, navigate } from "svelte-routing";
	import { Icon } from "sveltestrap";
	import Layout from "./Layout/Layout.svelte";
	import { QueryClientProvider } from "@sveltestack/svelte-query";
	import { pwaStatusStream } from "./lib/pwa";
	import type { PWAStatus } from "./lib/pwa";


	pwaStatusStream.subscribe((status: PWAStatus) => {
    console.log("PWA status", status);

    if (status.updateFunction) {
      console.log("PWA updating itself in 4 secs......");
      setTimeout(() => {
        status.updateFunction();
      }, 4000);
    }
  });

  

	// console.log(location);
</script>

<QueryClientProvider>
	<Router>
		<div>
			<Route path="/*" component={Layout} />
		</div>
	</Router>
</QueryClientProvider>
