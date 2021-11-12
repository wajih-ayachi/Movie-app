const SearchBar = () => (
    <form class="mb-5 mt-5"action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Films</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Recherche films"
            name="s" 
        />
        <button class="btn-primary"type="submit">Recherche</button>
    </form>
);

export default SearchBar;