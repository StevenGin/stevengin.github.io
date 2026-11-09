import React from "react"
import {ResponsiveBar} from "@nivo/bar"

const data = [
  {year: "2024", tests: 11000},
  {year: "2026*", tests: 25000},
]

export function ExperimentChart() {
  // Nivo needs a browser to measure its container, so render a
  // same-height placeholder during Gatsby's static build and let the
  // real chart hydrate client-side.
  if (typeof window === "undefined") {
    return <div style={{height: 320}} />
  }

  return (
    <div style={{height: 320}}>
      <ResponsiveBar
        data={data}
        keys={["tests"]}
        indexBy="year"
        margin={{top: 20, right: 20, bottom: 50, left: 70}}
        padding={0.4}
        valueScale={{type: "linear"}}
        indexScale={{type: "band", round: true}}
        colors={bar =>
          bar.data.year === "2026*" ? "#00d4ff" : "#ff1f6b"
        }
        borderRadius={4}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          legend: "Year",
          legendPosition: "middle",
          legendOffset: 36,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickValues: [0, 10000, 20000],
          legend: "Tests per year",
          legendPosition: "middle",
          legendOffset: -55,
          format: value => value.toLocaleString("en-US"),
        }}
        gridYValues={[0, 10000, 20000]}
        enableLabel={true}
        labelSkipHeight={12}
        labelTextColor="#ffffff"
        valueFormat={value => value.toLocaleString("en-US")}
        animate={true}
        theme={{
          fontFamily: "IBMPlexMono, monospace",
          fontSize: 13,
          textColor: "#262626",
        }}
      />
    </div>
  )
}
