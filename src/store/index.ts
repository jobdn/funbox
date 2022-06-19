export interface IProduct {
  label: ILabel;
  variety: string;
  portionAmount: number;
  gift: string;
  weight: string;
  color: AvailableColor;
  subtitleText: string;
  isAvailable: boolean;
  link?: ILink;
}

type AvailableColor = "blue" | "pink";
type AvailableLabelColor = "grey" | "pink";

interface ILink {
  href: string;
  label: string;
}

interface ILabel {
  name: string;
  color: AvailableLabelColor;
}

const store: IProduct[] = [
  {
    label: { color: "grey", name: "Сказочное заморское явство" },
    variety: "C фуа-гра",
    portionAmount: 10,
    gift: "мышь в подарок",
    weight: "0,5",
    color: "blue",
    isAvailable: false,
    subtitleText: "Печалька, с фуа-гра закончился.",
  },
  {
    label: { color: "grey", name: "Сказочное заморское явство" },
    variety: "C рыбой",
    portionAmount: 40,
    gift: "2 мыши в подарок",
    weight: "2",
    color: "blue",
    isAvailable: true,
    link: {
      href: "https://github.com/jobdn/funbox",
      label: "купи.",
    },
    subtitleText: "Чего сидишь? Порадуй котэ,",
  },
  {
    label: { color: "grey", name: "Сказочное заморское явство" },
    variety: "C курой",
    portionAmount: 100,
    gift: "5 мышей в подарок заказчик доволен",
    weight: "5",
    color: "blue",
    isAvailable: true,
    link: {
      href: "https://github.com/jobdn/funbox",
      label: "купи.",
    },
    subtitleText: "Чего сидишь? Порадуй котэ,",
  },
];

export default store;
