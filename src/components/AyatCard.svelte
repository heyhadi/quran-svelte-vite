<script lang="ts">
	import { Card, Row, Col, Icon } from "sveltestrap";
	import Spinner from "./Spinner.svelte";
	import {
		audioSource,
		bookmarked,
		idAyat,
		fromBookmark,
	} from "../store/store";
	import { onMount, onDestroy } from "svelte";
	import { navigate } from "svelte-routing";
	export let queryResult: any;

	let ended: boolean;

	let isPlaying: boolean = false;
	let playedVerse: number = 0;
	let audioPlay: any;

	const handlePlay = async (id: number, audio: any) => {
		await audioSource.set(audio);
		playedVerse = id;
		audioPlay.paused ? audioPlay.play() : audioPlay.pause();
		audioPlay.paused ? (isPlaying = false) : (isPlaying = true);
	};

	let filtered: any;

	// onMount(() => {
	$: if (
		$fromBookmark &&
		queryResult.isFetched == true &&
		queryResult.isFetching == false
	) {
		setTimeout(() => {
			if ($idAyat !== 0) {
				window.location.hash = `#${$idAyat}`;
				console.log("masuk kah");
			}
		}, 100);
	}
	// });

	onDestroy(() => fromBookmark.set(false));

	$: if (ended) {
		isPlaying = false;
		playedVerse = playedVerse + 1;
		window.location.hash = `#${playedVerse}`;

		filtered = queryResult.data.ayahs.filter((item) => {
			let id = item.verseId.toString();
			return id.includes(playedVerse.toString());
		});

		if (playedVerse <= queryResult.data.ayahs.length) {
			handlePlay(playedVerse, filtered[0].audio);
		} else {
			isPlaying = false;
		}
	}

	let isBookmarked: boolean = false;
	let savedId;

	const handleBookmark = (
		verseId: number,
		name: string,
		number: number,
		juz: number
	) => {
		bookmarked.set([{ name, number, verseId, juz }]);
		isBookmarked = !isBookmarked;
		if (isBookmarked == false) {
			bookmarked.set([]);
		}

		if (isBookmarked == false && savedId !== verseId) {
			isBookmarked = true;
		}

		savedId = verseId;
	};
</script>

{#if queryResult.isLoading || queryResult.isFetching}
	<Spinner />
{:else if queryResult.error}
	An error has occurred:
	{queryResult.error}
{:else}
	{#each queryResult.data.ayahs as { audio, ayahText, readText, verseId, indoText, juz }}
		<Card body class="ayat-card">
			<Row>
				<Col xs={12} class="d-flex justify-content-end mt-3">
					<h1 id={verseId + 1}>{ayahText}</h1>
				</Col>
			</Row>
			<Row>
				<Col xs={12} class="d-flex justify-content-start mt-5">
					<div class="widget-49-meeting-info">
						<span class="widget-49-pro-title"
							>{verseId}.&nbsp; {readText}</span
						>
						<span class="widget-49-meeting-time">{indoText}</span>
						<span class="widget-49-pro-title mt-3">
							<span
								style="cursor: pointer;"
								on:click={() => handlePlay(verseId, audio)}
								on:keypress
							>
								{#if isPlaying && playedVerse === verseId}
									<Icon name="pause-circle" />
								{:else}
									<Icon name="play-circle" />
								{/if}
							</span>
							&nbsp;
							<span
								style="cursor: pointer;"
								on:click={() =>
									handleBookmark(
										verseId,
										queryResult.data.name,
										queryResult.data.number,
										juz
									)}
								on:keypress
								>{#if isBookmarked && $bookmarked[0].verseId === verseId}
									<Icon name="bookmark-fill" />
								{:else}
									<Icon name="bookmark" />
								{/if}</span
							></span
						>
					</div>
				</Col>
			</Row>
		</Card>
		<audio bind:this={audioPlay} src={$audioSource} bind:ended />
	{/each}
{/if}

<style>
	:global(.ayat-card) {
		border: none !important;
		background-color: #f1f5f9 !important;
		border-bottom: 1px solid #a4b0c6 !important;
		border-radius: 0px !important;
		transition: all 0.3s ease !important;
	}
	h1 {
		font-weight: bold !important;
		font-size: 30px;
		font-family: "Amiri Quran";
		direction: rtl;
	}

	.widget-49-meeting-info {
		display: flex;
		flex-direction: column;
		margin-left: 1rem;
	}

	.widget-49-meeting-info .widget-49-pro-title {
		/* color: #B1BAC5; */
		font-weight: bold;
		font-size: 19px;
	}

	.widget-49-meeting-info .widget-49-meeting-time {
		color: #6c7688;
		font-size: 16px;
	}
</style>
