import { Container } from "@mui/material";
import EChartsReact from "echarts-for-react";
import moment from "moment";
import COLORS from "../../../base/constants/colors";

const MentalStateChart = ({ scores }) => {
  const getVirtualData = () => {
    const data = [];
    scores?.map((score) => {
      data.push([
        moment(score?.date).format("YYYY-MM-DD"),
        score?.dailyAverageScore,
      ]);
    });
    return data;
  };
  const option = {
    title: {
      top: 30,
      left: "center",
      text: "Depression Severity based on Daily Score on Questionnaire",
    },
    tooltip: {},
    visualMap: {
      min: 0,
      max: 27,
      type: "piecewise",
      pieces: [
        {
          min: 0,
          max: 4,
          label: "None-minimal",
          color: COLORS.LEMON_YELLOW,
        },
        {
          min: 5,
          max: 9,
          label: "Mild",
          color: COLORS.YELLOW,
        },
        {
          min: 10,
          max: 14,
          label: "Moderate",
          color: COLORS.ROYAL_GOLD,
        },
        {
          min: 15,
          max: 19,
          label: "Moderately sever",
          color: COLORS.ORANGE,
        },
        {
          min: 20,
          max: 27,
          label: "Sever",
          color: COLORS.RED,
        },
      ],
      orient: "horizontal",
      left: "center",
      top: 65,
    },
    calendar: {
      top: 120,
      left: 30,
      right: 30,
      cellSize: ["auto", 20],
      range: moment().year().toString(),
      itemStyle: {
        borderWidth: 0.5,
      },
      yearLabel: { show: false },
    },
    series: [
      {
        type: "heatmap",
        coordinateSystem: "calendar",
        data: getVirtualData(),
      },
    ],
  };
  return (
    <Container sx={{ height: "40vh" }}>
      <EChartsReact option={option} style={{ height: "100%", width: "100%" }} />
    </Container>
  );
};

export default MentalStateChart;
