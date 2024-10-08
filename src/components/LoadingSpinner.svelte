<script>
    import { onMount } from "svelte";
    export let isLoading = true;

    let fadeOut = false;

    onMount(() => {
        if (!isLoading) {
            // Trigger the fade-out effect after the loading state changes
            fadeOut = true;
            setTimeout(() => {
                fadeOut = false; // Reset for future loading states
            }, 500); // Duration of the fade-out transition
        }
    });

    $: if (!isLoading) {
        // Trigger fade-out effect when loading completes
        fadeOut = true;
        setTimeout(() => {
            fadeOut = false; // Reset for future loading states
        }, 500); // Duration of the fade-out transition
    }
</script>

<style>
    .fade-out {
        transition: opacity 0.5s ease-in-out; /* Fade-out transition */
        opacity: 0; /* Fade out to transparent */
    }

    .fade-in {
        transition: opacity 0.5s ease-in-out; /* Fade-in transition */
        opacity: 1; /* Fully opaque */
    }
</style>

{#if isLoading || fadeOut}
    <div class={`fixed inset-0 flex justify-center items-center bg-background z-50 ${fadeOut ? 'fade-out' : 'fade-in'}`}>
        <div class="animate-spin rounded-full h-32 w-32 border-t-4 border-primary"></div>
    </div>
{/if}
