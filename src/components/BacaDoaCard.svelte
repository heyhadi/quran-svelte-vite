<script lang="ts">
	import { Card, Row, Col, Icon } from "sveltestrap";
	import Spinner from "./Spinner.svelte";
	import { audioSource, bookmarked, idAyat, doaFull } from "../store/store";
	import { onMount } from "svelte";
	import { navigate } from "svelte-routing";
	// export let queryResult: any;

</script>


	<!-- {#each queryResult.data.ayahs as { audio, ayahText, readText, verseId, indoText, juz }} -->
		<Card body class="ayat-card">
			<Row>
				<Col xs={12} class="d-flex justify-content-end mt-3">
					<h1 >{$doaFull.ayat}</h1>
				</Col>
			</Row>
			<Row>
				<Col xs={12} class="d-flex justify-content-start mt-5">
					<div class="widget-49-meeting-info">
						<span class="widget-49-pro-title"
							>{$doaFull.doa}</span
						>
						<span class="widget-49-meeting-time">{$doaFull.arti}</span>
						<span class="widget-49-pro-title mt-3">
							
							
						
					</div>
				</Col>
			</Row>
		</Card>
	<!-- {/each} -->


<style>
	:global(.ayat-card) {
		border: none !important;
		background-color: #f1f5f9 !important;
		border-bottom: 1px solid #a4b0c6 !important;
		border-radius: 0px !important;
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
