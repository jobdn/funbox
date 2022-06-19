interface IProduct {
  label: string;
  variety: string;
  portionAmount: number;
  decs: string;
  gift: string;
  weight: number;
  color: AvailableColor;
  subtitleText: string;
  isAvailable: boolean;
  link: ILink;
}

type AvailableColor = "blue" | "pink";

interface ILink {
  href: string;
  label: string;
}

const store: IProduct[] = [];

export default store;
