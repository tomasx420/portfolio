<script>
    export let isMobile = false;
</script>

{#if isMobile}
    <div class="flex flex-col justify-center items-center h-screen bg-background text-text">
        <div class="text-9xl font-bold text-primary"
            style="animation: pulse 2s infinite; transform-origin: center; text-shadow: 0 0 20px rgba(72, 207, 203, 0.6), 0 0 65px rgba(72, 207, 203, 0.4);">
            :/
        </div>
        <h1 class="text-4xl mt-4">Oops!</h1>
        <p class="mt-2">This site is designed for larger screens.<br />Please use a device with a bigger screen.</p>
    </div>
{/if}
