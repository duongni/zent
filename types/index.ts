import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  onClick?: string;
}
export interface ParkDetails {
  id: string;
  parkCode: string;
  fullName: string;
  states: string;
  url: string;
  designation: string;
  description: string;
  images: { url: string }[];
  activities: {
    id: string;
    name: string;
  }[];
  operatingHours: { description: string }[];
  directionsInfo: string;
  directionsUrl: string;
  name: string;
}
export interface CampDetails {
  parkCode: string;
  name: string;
  numberOfSitesReservable: number;
  numberOfSitesFirstComeFirstServe: number;
  campsites: { totalSites: string }[];
  reservationInfo: string;
  reservationUrl: string;
  fee: { cost: string; title: string }[];
  designation: string;
  directionsOverview: string;
  description: string;
  images: { url: string; altText: string }[];
  activities: {
    id: string;
    name: string;
  }[];
  operatingHours: { description: string }[];
  addresses: {
    postalCode: number;
    city: string;
    stateCode: string;
    line1: string;
    type: string;
  };
}

export interface SearchStateProps {
  state: string;
  setState: (manufacturer: string) => void;
}

export interface FilterProps {
  state: string;
}
