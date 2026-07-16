import { contactInfo } from "../data/menu";

export const whatsappLink = (message: string) =>
  `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const phoneLink = () => `tel:${contactInfo.phone.replace(/\s/g, "")}`;
