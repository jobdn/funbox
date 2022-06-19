export interface IProduct {
  label: ILabel;
  taste: string;
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

interface IStore {
  products: IProduct[];
}

const store: IStore = {
  products: [
    {
      label: { color: "grey", name: "Сказочное заморское явство" },
      taste: "C фуа-гра",
      portionAmount: 10,
      gift: "мышь в подарок",
      weight: "0,5",
      color: "pink",
      isAvailable: false,
      subtitleText: "Печалька, с фуа-гра закончился.",
    },
    {
      label: { color: "pink", name: "Сказочное заморское явство" },
      taste: "C рыбой",
      portionAmount: 40,
      gift: "2 мыши в подарок",
      weight: "2",
      color: "pink",
      isAvailable: true,
      link: {
        href: "https://github.com/jobdn/funbox",
        label: "купи.",
      },
      subtitleText: "Чего сидишь? Порадуй котэ,",
    },
    {
      label: { color: "grey", name: "Сказочное заморское явство" },
      taste: "C курой",
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
    {
      label: { color: "grey", name: "Сказочное заморское явство" },
      taste: "C курой",
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
    {
      label: { color: "grey", name: "Сказочное заморское явство" },
      taste: "C курой",
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
    {
      label: { color: "grey", name: "Сказочное заморское явство" },
      taste: "C курой",
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
    {
      label: { color: "grey", name: "Сказочное заморское явство" },
      taste: "C курой",
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
    {
      label: { color: "grey", name: "Сказочное заморское явство" },
      taste: "C курой",
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
    {
      label: { color: "grey", name: "Сказочное заморское явство" },
      taste: "C курой",
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
    {
      label: { color: "grey", name: "Сказочное заморское явство" },
      taste: "C курой",
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
    {
      label: { color: "grey", name: "Сказочное заморское явство" },
      taste: "C курой",
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
    {
      label: { color: "grey", name: "Сказочное заморское явство" },
      taste: "C курой",
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
  ],
};

export default store;
