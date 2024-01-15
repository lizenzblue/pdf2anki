<script lang="ts">
    import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
    import { getFirestore, doc, setDoc } from "firebase/firestore";
	import { authStore } from "../store/store";

    let apiKey = '';
    let file: File | null = null;

    const handleFileChange = (event: Event) => {
        const target = event.target as HTMLInputElement;
        file = target.files ? target.files[0] : null;
    };

    const handleApiKeyChange = (event: Event) => {
        const target = event.target as HTMLInputElement;
        apiKey = target.value;
    };

    const selectFile = () => {
        const fileInput = document.getElementById('file') as HTMLInputElement;
        fileInput.click();
    };

    const uploadFile = async (event: Event) => {
        event.preventDefault();
        if (!file || !apiKey) {
            alert('Please provide both an API key and a file.');
            return;
        }

        const user = $authStore.user;

        if (!user) {
            alert('No user is currently logged in.');
            return;
        }

        const storageRef = ref(getStorage(), `user_files/${user.uid}/${file.name}`);
        const snapshot = await uploadBytes(storageRef, file);
        const url = await getDownloadURL(snapshot.ref);

        const fileMetadata = {
            path: snapshot.ref.fullPath,
            uploadedAt: Date.now(),
            url: url
        };

        const metadataRef = doc(getFirestore(), 'user_files', user.uid, 'files', file.name);
        await setDoc(metadataRef, fileMetadata);
    };

</script>

<div class="flex items-center justify-center h-screen">
    <div class="bg-white p-8 rounded-md shadow-md max-w-md w-full mx-4"> <!-- Added mx-4 for margin on both sides -->
        <h2 class="text-2xl font-bold mb-4">Upload PDF to 📚 pdf2anki</h2>

        <label for="apiKey" class="block text-sm font-medium text-gray-700">OpenAI API Key:</label>
        <input id="apiKey" type="text" class="mt-1 p-2 border rounded-md w-full" bind:value={apiKey} on:input={handleApiKeyChange} />

        <label for="file" class="block mt-4 text-sm font-medium text-gray-700">PDF File:</label>
        <div class="flex items-center mt-1">
            <label for="file" class="flex-1">
                <input id="file" type="file" accept="application/pdf" class="hidden" on:change={handleFileChange} />
                <button class="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer" on:click={selectFile}>Select File</button>
            </label>
            <span class="ml-2">{file ? file.name : 'No file selected'}</span>
        </div>

        <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer w-full" on:click={uploadFile}>Upload</button>
    </div>
</div>
