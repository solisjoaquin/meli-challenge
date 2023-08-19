import React, { useContext } from "react";
import { getItems } from "../../actions/api";
import { searchContext } from "../../context/searchContext";
import { itemsContext } from "../../context/itemsContext";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
import styles from "./navbar.module.css";
import SearchIcon from "../icons/searchIcon";

const Navbar = () => {
  const navigate = useNavigate();
  const { search, setSearch, setCategories } = useContext(searchContext);
  const { setItems } = useContext(itemsContext);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    const data = await getItems(search);
    setItems(data.items);
    setCategories(data.categories);
    navigate("/");
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>
          <Link to="/">
            <img src={logoImg} alt="logo" width={"60"} />
          </Link>
        </div>

        <div className={styles.formContainer}>
          <form onSubmit={handleSumbit} className={styles.navbarSearch}>
            <input
              className={styles.navbarInput}
              onChange={handleChange}
              value={search}
              type="text"
              placeholder="Nunca dejes de buscar"
            />
            <button className={styles.navbarButton} type="submit">
              <SearchIcon width={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
