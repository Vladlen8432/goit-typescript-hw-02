import { useState, ChangeEvent, FormEvent } from "react";
import css from "./SearchbarStyles.module.css";
import { FaSearch } from "react-icons/fa";

interface SearchbarProps {
  onSubmit: (query: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (query.trim() === "") {
      alert("Please, enter a keyword");
      return;
    }

    onSubmit(query);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}>
            <FaSearch
              style={{
                width: "16px",
                height: "16px",
                color: "rgba(0, 0, 0, 0.5)",
              }}
            />
          </span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
