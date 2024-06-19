import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

const SearchMovie = ({ onSearch }) => {
  const [params, setParams] = useSearchParams();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!evt.target.elements.query.value.trim()) {
      toast.error("Empty String!");
      return;
    }
    params.set("query", evt.target.elements.query.value.trim());
    setParams(params);
    onSearch(evt.target.elements.query.value.trim());
    evt.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        name="query"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchMovie;
