import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const maxVal = Math.max(...dataPointsValues)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.labels}
          value={dataPoint.value}
          maxValue={maxVal}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
