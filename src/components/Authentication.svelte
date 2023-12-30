<script>
    import { authHandlers } from '../store/store';
</script>

<main class="flex items-center justify-center h-screen bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 class="text-3xl text-gray-800 font-bold mb-6">Login</h1>
        <button
            on:click={authHandlers.loginWithGoogle}
            class="flex items-center justify-center w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-300 ease-in-out focus:outline-none"
        >
            <i class="fab fa-google text-xl mr-2"></i>
            Sign In with Google
        </button>
    </div>
</main>
