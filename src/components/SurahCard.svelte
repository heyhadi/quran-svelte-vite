<script lang="ts">
	import Spinner from "./Spinner.svelte";
	import { surahs, arrSurahs } from "../store/store";
	import { navigate } from "svelte-routing";
</script>

{#if $surahs.isLoading}
	<Spinner />
{:else if $surahs.error}
	An error has occurred:
	{$surahs.error}
{:else if $arrSurahs.length == 0}
	<h5 class="text-center align-item-center mt-5">
		Oppsie...!! Surah yang kamu cari ga ketemu . . !
	</h5>
{:else}
	<div class="row">
		{#each $arrSurahs as { asma, name, number, numberOfAyahs, translationId, typeEn }, idx}
			<div class=" col-md-6 col-lg-6 col-xl-6 col-xxl-4">
				<div
					class="card mt-3 mb-3"
					on:click={() => navigate(`/baca/${number}`)}
					on:keypress
				>
					<div class="card-body pt-0">
						<div class="widget-49 pt-4">
							<div class="widget-49-title-wrapper">
								<div class="widget-49-date-primary">
									<span class="widget-49-date-day"
										>{number}</span
									>
								</div>
								<div class="widget-49-meeting-info">
									<span class="widget-49-pro-title"
										>{name} - {asma}</span
									>
									<span class="widget-49-meeting-time"
										>{translationId} - {numberOfAyahs} Ayat -
										{typeEn}</span
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
{/if}

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

	.widget-49 .widget-49-title-wrapper .widget-49-date-primary {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background-color: #edf1fc;
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
	}

	.widget-49
		.widget-49-title-wrapper
		.widget-49-date-primary
		.widget-49-date-day {
		color: #4e73e5;
		font-weight: 500;
		font-size: 1.5rem;
		line-height: 1;
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
