<script>
	import BookmarkCard from "../components/BookmarkCard.svelte";
	import { bookmarked } from "../store/store";
</script>

<h4 style="border-bottom: 3px solid #a4b0c0; padding-bottom:10px;">Bookmark </h4>
{#if $bookmarked.length > 0}
	<BookmarkCard />
{:else}
	<p class="d-block text-align-center text-center">No bookmarked ayah yet</p>
{/if}
