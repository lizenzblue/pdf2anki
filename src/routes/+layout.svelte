<script lang="ts">
    import "../app.css";
    import { onMount } from "svelte";
    import {authStore} from '.././store/store';
    import type { User } from 'firebase/auth';

    import { auth } from "$lib/firebase";



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
</script>

  <slot />