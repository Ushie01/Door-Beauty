import { StaticImageData } from "next/image";

export type Props = {
	id: number;
	name: string;
	photo: StaticImageData | undefined;
	price: string;
	quantity: number;
	incrementCounter: (id: number) => void;
	decrementCounter: (id: number) => void;
	handleDelete: (params: { id: number; isButtonClicked: boolean }) => void;
};
