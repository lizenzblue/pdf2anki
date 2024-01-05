<script lang="ts">
    import Navbar from '../../components/Navbar.svelte';
    import  InputForm  from '../../components/InputForm.svelte';
    import { authStore } from '../../store/store';
    import { goto } from '$app/navigation';

    let loading = true;
    let timeoutId: number | null = null;

    const redirect = () => {
        goto('/');
    }
    
    $: {
        if (typeof window !== 'undefined') {
            if (!$authStore.user && !timeoutId) {
                timeoutId = window.setTimeout(redirect, 4000);
            } else if ($authStore.user && timeoutId) {
                window.clearTimeout(timeoutId);
                timeoutId = null;
            }
        }
        loading = !$authStore.user;
    }
</script>

<style>
    h1 {
        @apply text-2xl font-bold mb-4;
    }

    button {
        @apply px-4 py-2 text-white bg-blue-500 rounded cursor-pointer;
    }
</style>

{#if loading}
    <main class="flex items-center justify-center h-screen bg-gray-100">
        <div class="bg-white p-8 rounded shadow-md max-w-md w-full">
            <h1 class="text-3xl text-gray-800 font-bold mb-6">Loading...</h1>
        </div>
    </main>
{:else}
    {#if $authStore.user}
        <Navbar />
        <InputForm />
    {:else}
        <main class="flex items-center justify-center h-screen bg-gray-100">
            <div class="bg-white p-8 rounded shadow-md max-w-md w-full">
                <h1 class="text-3xl text-gray-800 font-bold mb-6">You're not logged in</h1>
                <button
                    on:click={redirect}
                    class="flex items-center justify-center w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-300 ease-in-out focus:outline-none"
                >
                    <i class="fab fa-google text-xl mr-2"></i>
                    Go to login
                </button>
            </div>
        </main>
    {/if}
{/if}
