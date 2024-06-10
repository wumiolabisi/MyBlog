
export default function SearchBar() {
    return (
        <form className="form-type">
            <div className="search-area rounded">
                <input className="input-search rounded" id="search" type="search" placeholder="Start small, start here." />
                <button type="submit" className="button-search"><i className="fa fa-search"></i></button>
            </div>
        </form>
    );
}