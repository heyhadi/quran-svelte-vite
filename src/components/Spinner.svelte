<div
	class="overlay-spinner"
	style="z-index: 99; background: rgba(0, 0, 0, 0.4); width: 100%;
	height: 1000%; min-height:100%; position: fixed;"
>
	<div class="overlay-wrapper">
		<div class="overlay-spinner">
			<div
				class="spinner-border text-primary"
				role="status"
				style="width: 4rem; height: 4rem;"
			>
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>
	</div>
</div>

<style>
	.overlay-wrapper {
		width: 100%;
		height: 100%;
		position: fixed !important;
		/* margin-left: 10rem; */
        backdrop-filter: blur(6px);
	}
	.overlay-spinner {
		position: absolute !important;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
</style>
