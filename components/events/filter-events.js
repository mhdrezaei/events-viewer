import classes from "./filter-events.module.css";
import { useRef } from "react";
function FilterEvents(props) {
  const inputYearRef = useRef();
  const inputMonthRef = useRef();
  const submitHandle = (event) => {
    event.preventDefault();
    const year = inputYearRef.current.value;
    const month = inputMonthRef.current.value;

    props.applyFillter(year, month);
  };
  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <form onSubmit={submitHandle}>
          <label htmlFor="year">Year</label>
          <select ref={inputYearRef} className={classes.select} id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
          <label htmlFor="month">month</label>
          <select ref={inputMonthRef} className={classes.select} id="month">
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <button className={classes.btn}>Apply</button>
        </form>
      </div>
    </div>
  );
}

export default FilterEvents;
