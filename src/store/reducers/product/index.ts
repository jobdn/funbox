import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface IProduct {
  id: number;
  label: ILabel;
  taste: string;
  portionAmount: number;
  gift: string;
  weight: string;
  borderColor: AvailableBorderColor;
  subtitleText: string;
  isAvailable: boolean;
  link?: ILink;
  isSelected: boolean;
}

type AvailableBorderColor = "blue" | "pink";
type AvailableLabelColor = "grey" | "pink";

interface ILink {
  href: string;
  label: string;
}

interface ILabel {
  name: string;
  color: AvailableLabelColor;
}

interface IProductsState {
  products: IProduct[];
}

const initialState: IProductsState = {
  products: [
    {
      id: 1,
      label: { color: "grey", name: "Сказочное заморское явство" },
      taste: "C фуа-гра",
      portionAmount: 10,
      gift: "мышь в подарок",
      weight: "0,5",
      borderColor: "blue",
      isAvailable: true,
      link: {
        href: "https://github.com/jobdn/funbox",
        label: "купи.",
      },
      subtitleText: "Чего сидишь? Порадуй котэ,",
      isSelected: false,
    },
    {
      id: 2,
      label: { color: "grey", name: "Сказочное заморское явство" },
      taste: "C рыбой",
      portionAmount: 40,
      gift: "2 мыши в подарок",
      weight: "2",
      borderColor: "blue",
      isAvailable: true,
      link: {
        href: "https://github.com/jobdn/funbox",
        label: "купи.",
      },
      subtitleText: "Чего сидишь? Порадуй котэ,",
      isSelected: false,
    },
    {
      id: 3,
      label: { color: "grey", name: "Сказочное заморское явство" },
      taste: "C курой",
      portionAmount: 100,
      gift: "5 мышей в подарок заказчик доволен",
      weight: "5",
      borderColor: "blue",
      isAvailable: true,
      link: {
        href: "https://github.com/jobdn/funbox",
        label: "купи.",
      },
      subtitleText: "Чего сидишь? Порадуй котэ,",
      isSelected: false,
    },
    {
      id: 4,
      label: { color: "grey", name: "Сказочное заморское явство" },
      taste: "C фуа-гра",
      portionAmount: 10,
      gift: "мышь в подарок",
      weight: "0,5",
      borderColor: "pink",
      isAvailable: true,
      subtitleText: "Печень утки разварная с артишоками.",
      isSelected: false,
    },
    {
      id: 5,
      label: { color: "grey", name: "Сказочное заморское явство" },
      taste: "C рыбой",
      portionAmount: 40,
      gift: "2 мыши в подарок",
      weight: "2",
      borderColor: "pink",
      isAvailable: true,
      subtitleText: "Головы щучьи с чесноком да свежайшая сёмгушка.",
      isSelected: false,
    },
    {
      id: 6,
      label: { color: "grey", name: "Сказочное заморское явство" },
      taste: "C курой",
      portionAmount: 100,
      gift: "5 мышей в подарок заказчик доволен",
      weight: "5",
      borderColor: "pink",
      isAvailable: true,
      subtitleText: "Филе из цыплят с трюфелями в бульоне.",
      isSelected: false,
    },
    {
      id: 7,
      label: { color: "pink", name: "Котэ не одобряет?" },
      taste: "C фуа-гра",
      portionAmount: 10,
      gift: "мышь в подарок",
      weight: "0,5",
      borderColor: "pink",
      isAvailable: true,
      subtitleText: "Печень утки разварная с артишоками.",
      isSelected: false,
    },
    {
      id: 8,
      label: { color: "pink", name: "Котэ не одобряет?" },
      taste: "C рыбой",
      portionAmount: 40,
      gift: "2 мыши в подарок",
      weight: "2",
      borderColor: "pink",
      isAvailable: true,
      subtitleText: "Головы щучьи с чесноком да свежайшая сёмгушка.",
      isSelected: false,
    },
    {
      id: 9,
      label: { color: "pink", name: "Котэ не одобряет?" },
      taste: "C курой",
      portionAmount: 100,
      gift: "5 мышей в подарок заказчик доволен",
      weight: "5",
      borderColor: "pink",
      isAvailable: true,
      subtitleText: "Филе из цыплят с трюфелями в бульоне.",
      isSelected: false,
    },
    {
      id: 10,
      label: { color: "grey", name: "Сказочное заморское явство" },
      taste: "C фуа-гра",
      portionAmount: 10,
      gift: "мышь в подарок",
      weight: "0,5",
      borderColor: "pink",
      isAvailable: false,
      subtitleText: `Печаль, с фуа-гра закончился.`,
      isSelected: false,
    },
    {
      id: 11,
      label: { color: "grey", name: "Сказочное заморское явство" },
      taste: "C рыбой",
      portionAmount: 40,
      gift: "2 мыши в подарок",
      weight: "2",
      borderColor: "pink",
      isAvailable: false,
      subtitleText: `Печаль, с рыбой закончился.`,
      isSelected: false,
    },
    {
      id: 12,
      label: { color: "grey", name: "Сказочное заморское явство" },
      taste: "C курой",
      portionAmount: 100,
      gift: "5 мышей в подарок заказчик доволен",
      weight: "5",
      borderColor: "pink",
      isAvailable: false,
      subtitleText: `Печаль, с курой закончился.`,
      isSelected: false,
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    selectProduct(state: IProductsState, action: PayloadAction<number>) {
      console.log("click: ", action.payload);

      state.products[action.payload - 1].isSelected =
        !state.products[action.payload - 1].isSelected;
    },
  },
});

export const { selectProduct } = productsSlice.actions;
export default productsSlice.reducer;
