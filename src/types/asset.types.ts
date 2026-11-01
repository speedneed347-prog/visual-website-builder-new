export type AssetKind = "image" | "video" | "audio" | "font" | "other";

export type AssetRecord = {
  id: string;
  name: string;
  mimeType: string;
  kind: AssetKind;
  size: number;
  url: string;
  createdAt: string;
};

export type AssetUploadResult = {
  success: boolean;
  asset?: AssetRecord;
  error?: string;
};
