<script>
	export let heading = "WELCOME TO MY PORTFOLIO";
	export let subheading =
		"On this website, you will learn about me and my projects. On this website, you will learn about me and my projects On this website, you will learn about me and my projects On this website, you will learn about me and my projects";
</script>

<div class="flex flex-col justify-center pt-8 w-[600px]">
	<h1
		class="mb-4 text-4xl f ont-extrabold leading-none tracking-tight text-text md:text-5xl lg:text-6xl"
	>
		Welcome to my
		<br />
		<span class="portfolio-animation">Portfolio</span><span class="cursor">|</span
		>
	</h1>
	<p class="text-xl text-secondary pt-4">{subheading}</p>
</div>

<style>
	.cursor {
		display: inline-block;
		margin-left: 2px;
		width: 1ch;
		animation: blink 1s steps(1) infinite;
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}

	.portfolio-animation {
		position: relative;
		color: transparent;
		animation: revealText 6s ease-in-out infinite;
	}

	.portfolio-animation::before {
		content: "Portfolio";
		position: absolute;
		left: 0;
		right: 0;
		color: #424242;
		white-space: nowrap;
		overflow: hidden;
		animation: wipeColorChange 6s ease-in-out infinite;
	}

	@keyframes revealText {
		0%,
		100% {
			color: #424242;
		}
		50% {
			color: #48cfcb;
		}
		66% {
			color: #f5f5f5;
		}
	}

	@keyframes wipeColorChange {
		0%,
		100% {
			clip-path: inset(0 0 0 0);
		}
		50% {
			clip-path: inset(0 100% 0 0);
		}
	}
</style>
