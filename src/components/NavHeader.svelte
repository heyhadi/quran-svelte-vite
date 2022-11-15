<script lang="ts">
	import { Button, Icon } from "sveltestrap";
	import { Link, navigate } from "svelte-routing";
	let isOpen: boolean = false;

	const menu = [
		{
			name: `Al-Qur'an`,
			path: "/",
			icon: "book",
		},
		{
			name: `Doa Harian`,
			path: "/doa-harian",
			icon: "heart",
		},
		{
			name: `About`,
			path: "/about",
			icon: "info-circle",
		},
	];

	let darkTheme = false;
	function toggle() {
		darkTheme = !darkTheme;
		window.document.body.classList.toggle("dark-mode");
	}
</script>

<!-- Fixed navbar -->
<nav class="navbar navbar-dark fixed-top">
	<div class="container-fluid mx-0">
		<span
			style="font-size:32px;"
			class="navbar-brand fw-bold py-0"
			on:keypress
			on:click={() => (isOpen = !isOpen)}
		>
			<Icon name="list" /></span
		>
		<span class="navbar-brand fw-bold" role="button" on:click= {() => navigate("/")}  on:keypress>SVELTE QUR'AN</span>
		<div class="ms-auto">
			<span class="navbar-brand fw-bold " on:click= {() => navigate("/bookmark")}  on:keypress><Icon name="bookmark" /></span>
			<span class="navbar-brand fw-bold " on:click={toggle} on:keypress>
				{#if !darkTheme}
					<Icon name="moon" />
				{:else}
					<Icon style="color: yellow; font-size:22;" name="sun" />
				{/if}
			</span>
		</div>
	</div>
</nav>

<aside
	id="mySidebar"
	class="sidebar"
	style={isOpen ? "width: 350px;" : "width:0px;"}
>
	{#each menu as { name, path, icon }, idx}
		<Link to={path} style="text-decoration: none;">
			<span on:click={() => (isOpen = !isOpen)} on:keypress
				><Icon name={icon} /> &nbsp; {name}</span
			>
		</Link>
	{/each}
	<div class="copyright d-flex">
		<a href="https://github.com/heyhadi" class=""
			>Copyright &nbsp;© &nbsp;2022  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon name="github" /> heyhadi</a
		>
	</div>
</aside>

<style>
	.navbar {
		background-color: #1e293b;
	}
	.sidebar {
		height: 100%;
		width: 0;
		position: fixed;
		z-index: 999;
		top: 0;
		left: 0;
		margin-top: 20px;
		background-color: #1e293b;
		overflow-x: hidden;
		transition: all 0.3s ease;
		padding-top: 60px;
		/* border-top: 1px solid black; */
	}

	.sidebar span {
		padding: 25px 30px 28px 10px;
		text-decoration: none;
		font-size: 20px;
		color: #ffffff;
		display: block;
		transition: all 0.3s ease;
		border-bottom: 2px solid #d9e1f3;
		margin-left: 18px;
		margin-right: 40px;
		cursor: pointer;
		white-space: nowrap;
		/* text-overflow: ellipsis; */
	}

	.sidebar span:hover {
		color: #dccaca;
	}
	.sidebar .copyright a {
		color: #fffdfd;
		position: absolute;
		margin-left: 15px;
		bottom: 30px;
		text-decoration: none;
		white-space: nowrap;
	}
</style>
