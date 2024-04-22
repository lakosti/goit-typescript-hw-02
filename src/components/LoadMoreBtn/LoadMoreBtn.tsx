import css from "./LoadMoreBtn.module.css";

interface Props {
  handleMoreItems: () => void;
  disabled: boolean;
}

export const LoadMoreBtn: React.FC<Props> = ({ handleMoreItems, disabled }) => {
  return (
    <button onClick={handleMoreItems} disabled={disabled} className={css.loadMoreBtn}>
      {disabled ? "Loading..." : "Load More"}
    </button>
  );
};
