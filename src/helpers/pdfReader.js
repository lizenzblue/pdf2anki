import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { getDocument } from 'pdfjs-dist';

export default async function pdfReader(url) {
	const storage = getStorage();
	const pdfRef = ref(storage, url);

	// Get the download URL
	const pdfUrl = await getDownloadURL(pdfRef);

	// Load the PDF
	const pdf = await getDocument(pdfUrl).promise;

	let text = '';
	for (let i = 1; i <= pdf.numPages; i++) {
		// Get the text content from each page
		const page = await pdf.getPage(i);
		const content = await page.getTextContent();

		// Concatenate the strings
// Concatenate the strings
// Concatenate the strings
text += content.items
  .map((item) => (item as { str: string }).str)
  .join(' ');
	}

	// Return the text
	return text;
}
