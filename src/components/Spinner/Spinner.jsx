import { BallTriangle } from "react-loader-spinner";
import style from "./Spinner.module.css";

const Spinner = (prop) => {
  return (
    <div
      className={
        prop.prop === "home" ? style.divSpinnerHome : style.divContainerSpinner
      }
    >
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#002B88"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
