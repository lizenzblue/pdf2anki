declare module 'pdf-parse' {
	interface PdfParseOptions {
		max: number; // Adjust based on actual options
		version: string; // Adjust based on actual options
		// Add other properties based on the actual options
	}

	interface PdfParsedResult {
		text: string;
		// Add other properties based on the actual result
	}

	const parse: (
		data: Uint8Array | Buffer | ArrayBuffer,
		options?: PdfParseOptions
	) => Promise<PdfParsedResult>;

	export { parse };
}
