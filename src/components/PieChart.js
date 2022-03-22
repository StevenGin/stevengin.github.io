import React from 'react'
import { ResponsivePie } from '@nivo/pie'

const data = [
    {
      "id": "javascript",
      "label": "javascript",
      "value": 7,
      "color": "hsl(260, 70%, 50%)" 
    },
    {
      "id": "sql",
      "label": "sql",
      "value": 10,
      "color": "hsl(282, 70%, 50%)"
    },
    {
      "id": "c#",
      "label": "c#",
      "value": 7,
      "color": "hsl(18, 70%, 50%)"
    },
    {
      "id": "r",
      "label": "r",
      "value": 4,
      "color": "hsl(261, 70%, 50%)"
    },
    {
        "id": "bash",
        "label": "bash",
        "value": 4,
        "color": "hsl(261, 70%, 50%)"
      },
    {
      "id": "python",
      "label": "python",
      "value": 10,
      "color": "hsl(50, 100%, 73%)" 
    }
  ];
const PieChart = ({data}) => (
   (
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.2
                    ]
                ]
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={4}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        4
                    ]
                ]
            }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[

                {
                    match: {
                        id: 'c#'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'sql'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'python'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'scala'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'lisp'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'elixir'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'javascript'
                    },
                    id: 'lines'
                }
            ]}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                            {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
    )
)
export default function App() {
    return (
        <center>
      <div style={{ width: 900, height: 500 }}>
        <PieChart data={data} />
      </div></center>
    );
  }