export type ProductType = ItemInfo;
export type CoffeeFlavor = ItemInfo;
export type PackSize = ItemInfo;

interface ItemInfo {
  id: string;
  name: string;
  description: string;
}
