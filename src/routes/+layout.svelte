<script lang="ts">
    import "../app.css";
    import { onMount } from "svelte";
    import {authStore} from '.././store/store';
    import type { User } from 'firebase/auth';
    import Navbar from '.././components/Navbar.svelte';
    import { auth } from "$lib/firebase";
    import { goto } from '$app/navigation';


    onMount(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if(!user) {
                authStore.update( () => {
                    return {
                        user : null,
                    }
                })
            } else {
                authStore.update( () => {
                    return {
                        user : user,
                    }
                })
            }
        });
        return unsubscribe;
    });

    let currentUser: User | null;
    authStore.subscribe((value) => {
        currentUser = value.user;
    });

    $: if(currentUser) {
        goto('/main');
    }

</script>
  {#if currentUser}
  <Navbar />
  {/if}



  <slot />