import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={css.loaderContainer}>
      <InfinitySpin color="#00BFFF" />
    </div>
  );
};

export default Loader;
