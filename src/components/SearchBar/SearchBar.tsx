import { Field, Form, Formik, FormikValues } from "formik";
import { IoIosSearch } from "react-icons/io";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

interface Props {
  onSetSearchQuery: (query: string) => void;
}

const notify = () => toast.error("Please enter something");

const SearchBar: React.FC<Props> = ({ onSetSearchQuery }) => {
  return (
    <div className={css.formWrap}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values: FormikValues) => {
          if (values.query.trim() === "") {
            notify();
          }
          onSetSearchQuery(values.query);
        }}
      >
        <Form className={css.fromSeacrh}>
          <div className={css.seacrhPosition}>
            <Field
              className={css.fromSeacrhInput}
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button className={css.fromSeacrhBtn} type="submit">
              <IoIosSearch />
            </button>
            <Toaster position="bottom-center" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
