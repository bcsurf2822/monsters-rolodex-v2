import { ChangeEvent, ChangeEventHandler } from "react";
import "./search-box.styles.css";
// function
// const func : (a: string, b: number, c: boolean) => void = (a, b, c) => {}

//Interfaces
// interface ISearchBoxProps extends IChangeHanlderProps {
//   className: string;
//   // optional
//   placeholder?: string | null;
// }

// interface IChangeHanlderProps {
//   onChangeHandler: (A: string) => void;
// }

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>; //Change EventHandler Generics
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void; //Change Event Generics
};

//UNIONS
type CanadaAddress = {
  street: string;
  province: string;
};

type USAddress = {
  street: string;
  state: string;
};

type ItalianAddress = {
  street: string;
  region: string;
};
type NorthAmericanAddress = CanadaAddress | USAddress;

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
