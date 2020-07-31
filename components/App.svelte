<script>
	import RightSide from "./RightSide.svelte";
</script>

<main>
	<h1>MEGATERRA</h1>
</main>


<RightSide />

<footer>&copy; Megaterra. All Rights Reserved.</footer>

<style>
	:global(body) {
		--dark: #212121;
		--light: #bbdefb;
		
		background: var(--dark);
		color: var(--light);
		overflow-x: hidden;
		
		display: grid;
		grid-template-rows: 1fr auto;
	}
	
	@media only screen and (min-width: 992px) {
		:global(body) {
			grid-template:  1fr auto / 1fr auto;
		}
		
		main {
			grid-column: 1 / 2;
			grid-row: 1 / 2;
		}
		
		footer {
			grid-column: 1 / 2;
			grid-row: 2 / 3;
		}
	}
	
	h1 {
		text-align: center;
	}
	
	main {
	}
	
	footer {
		text-align: center;
	}
</style>