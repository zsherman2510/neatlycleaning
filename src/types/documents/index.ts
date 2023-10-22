export type DocumentAsset = {
  uri: string;
  name: string;
  size: number;
  type: string;
  file: File;
  lastModified: number;
  mimeType: string;
  output: FileList | null;
  // ... Add any other properties that the asset might have
};

export type DocumentPickerResult = {
  canceled: boolean;
  assets: DocumentAsset[];
  output: FileList | null | undefined;
  // ... Any other properties that the result might have
};

export type Document = {
  mimeType: string,
  name: string,
  size: number,
  uri: string
}
