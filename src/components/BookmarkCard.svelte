<script lang="ts">
	import Spinner from "./Spinner.svelte";
	import {  bookmarked, idAyat, fromBookmark} from "../store/store";
	import { navigate } from "svelte-routing";
	

	const handleNavigate = (number:number, verseId: number) => {
		window.analytics.track("test", {id: "testid"})
		fromBookmark.set(true)
		navigate(`/baca/${number}`)
		idAyat.set(verseId)

		// window.location.hash = `#${verseId}`
	}
</script>

	<div class="row">
		{#each $bookmarked  as { name, number, verseId, juz}, idx}
			<div class=" ">
				<div
					class="card mt-3 mb-3"
					on:click={() => handleNavigate(number, verseId)}
					on:keypress
				>
					<div class="card-body pt-0">
						<div class="widget-49 pt-4">
							<div class="widget-49-title-wrapper">
								<div class="widget-49-meeting-info">
									<span class="widget-49-pro-title"
										>{name}</span
									>
									<span class="widget-49-meeting-time"
										>Terakhir disimpan Surah <b>{name}</b> ayat <b>{verseId}</b> </span
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>


<style>
	.card {
		border: none !important;
		border-radius: 15px !important;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 7px 0px;
		word-wrap: break-word;
	}

	.card {
		position: relative;
		display: flex;
		flex-direction: column;
		min-width: 0;
		word-wrap: break-word;
		background-color: #ffffff;
		background-clip: border-box;
		border: 1px solid #e6e4e9;
		border-radius: 8px;
	}

	.card:hover {
		transform: scale(1.03);
		transition: all 0.3s ease-in-out;
		cursor: pointer;
	}
	.widget-49 .widget-49-title-wrapper {
		display: flex;
		align-items: center;
	}

	.widget-49 .widget-49-title-wrapper .widget-49-meeting-info {
		display: flex;
		flex-direction: column;
		margin-left: 1rem;
	}

	.widget-49
		.widget-49-title-wrapper
		.widget-49-meeting-info
		.widget-49-pro-title {
		/* color: #B1BAC5; */
		font-weight: bold;
		font-size: 19px;
	}

	.widget-49
		.widget-49-title-wrapper
		.widget-49-meeting-info
		.widget-49-meeting-time {
		color: #545d6c;
		font-size: 16px;
	}
</style>
