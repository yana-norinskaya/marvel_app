import { Result } from "types/singleComics.type";
import { IResult } from "types/type";

const messageDefault = {
  forPage: "No information about the number of pages",
  forPrice: "NOT AVAILABLE",
  forLanguage: "Language: en-us",
  forDescription: "No information about this character",
};

export const useFormatDataComics = (data: Result) => {
  const { thumbnail, title, prices, pageCount, textObjects, description, id } =
    data;
  const pageContent = pageCount ? `${pageCount} pages` : messageDefault.forPage;
  const priceContent = prices[0].price
    ? `${prices[0].price}$`
    : messageDefault.forPrice;
  const languageContent =
    textObjects.length > 0
      ? `Language: ${textObjects[0].language}`
      : messageDefault.forLanguage;
  const descriptionContent = description
    ? description
    : messageDefault.forDescription;
  const imageContent = `${thumbnail.path}.${thumbnail.extension}`;

  return {
    pageContent,
    priceContent,
    languageContent,
    descriptionContent,
    imageContent,
    title,
    id,
  };
};

export const useFormatDataCharacters = (data: IResult) => {
  const { thumbnail, name, description, comics, urls, id } = data;
  const descriptionContent = description
    ? description
    : "No information about this character";
  const imageContent = `${thumbnail.path}.${thumbnail.extension}`;

  return { name, descriptionContent, imageContent, urls, comics, id };
};
