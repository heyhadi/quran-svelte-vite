<script lang="ts">
	import { surahs, arrSurahs, doaHarian, doaHarianFilter } from "../store/store";

	export let doa: boolean = false;
	export let quran: boolean = false;

	let filtered: any;

	let keyword: string = "";

	const handleInput = () => {
		if (quran) {
			filtered = $surahs.data.data.filter((item) => {
				let name = item.name.toLowerCase();
				return name.includes(keyword.toLowerCase());
			});
			arrSurahs.set(filtered);
		} else if (doa) {
			filtered = $doaHarian.data.filter((item) => {
				let doa = item.doa.toLowerCase();
				return doa.includes(keyword.toLowerCase());
			});

			doaHarianFilter.set(filtered);
		}

	};
</script>

<div class="form-container">
	<div class="row d-flex justify-content-center align-items-center">
		<div class="form">
			<i class="fa fa-search" />
			<input
				type="text"
				class="form-control form-input"
				placeholder="Search Surah . . ."
				bind:value={keyword}
				on:input={handleInput}
			/>
		</div>
	</div>
</div>

<style>
	::placeholder {
		font-style: italic;
		font-size: 1.2em;
		color: rgb(178, 186, 182);
		padding: 5px;
	}
	/* Mobile */
	.form-container {
		margin: 10px 6px;
	}

	/* Tablet */
	@media (min-width: 600px) {
		.form-container {
			margin: 20px 6px;
		}
	}

	/* Desktop */
	/* @media (min-width: 900px) {
		.form-container {
			margin: 20px 150px;
		}
	} */
	.form {
		position: relative;
	}

	.form .fa-search {
		position: absolute;
		top: 20px;
		left: 30px;
		color: #9ca3af;
	}

	.form-input {
		height: 55px;
		text-indent: 33px;
		border-radius: 15px;
		border: none;

		/* border-color: #e2e5e2; */
		/* box-shadow: 1px 1px #888888; */
	}

	.form-input:focus {
		border-color: #222422;
	}
	.form-control {
		/* border-color: #a7aba7; */
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 7px 0px;
	}
	.form-control:focus {
		box-shadow: rgba(100, 100, 111, 0.2) 7px 7px 19px 6px;
	}
</style>
