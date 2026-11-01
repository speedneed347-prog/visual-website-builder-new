import { create } from "zustand";
import { generateId } from "../utils/idGenerator";

export type BuilderAsset = {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
  createdAt: string;
};

type AssetState = {
  assets: BuilderAsset[];
  addAsset: (asset: Omit<BuilderAsset, "id" | "createdAt">) => void;
  removeAsset: (id: string) => void;
  setAssets: (assets: BuilderAsset[]) => void;
};

export const useAssetStore = create<AssetState>((set) => ({
  assets: [],

  addAsset: (asset) => set((state) => ({
    assets: [{
      ...asset,
      id: generateId(),
      createdAt: new Date().toISOString()
    }, ...state.assets]
  })),

  removeAsset: (id) => set((state) => ({
    assets: state.assets.filter((asset) => asset.id !== id)
  })),

  setAssets: (assets) => set({ assets })
}));
