import { ResponsiveBar } from '@nivo/bar';
import { mockBarData as data } from '../data/mockData';
import { getColors } from '../helpers';
import { useWindowWidth } from '../hooks/useWindowWidth';
export const BarChart = ({ isDashboard = false }) => {
    const { graphicWidth } = useWindowWidth();
    const colors = getColors();
    return (
        // make sure parent container have a defined height when using
        // responsive component, otherwise height will be 0 and
        // no chart will be rendered.
        // website examples showcase many properties,
        // you'll often use just a few of them.
            <ResponsiveBar
            data={data}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: colors.primary[400],
                            strokeWidth: 2
                        },
                    },
                    legend: {
                        text: {
                            fontSize: 12,
                            fontWeight: 600,
                            fill: colors.primary[400]
                        }
                    },
                    ticks: {
                        line: {
                            stroke: colors.primary[400],
                            strokeWidth: 2
                        },
                        text: {
                            fontSize: 12,
                            fontWeight: 600,
                            fill: colors.primary[100]
                        }
                    }
                },
                tooltip: {
                    container: {
                        background: colors.white[500],
                        color: colors.black[700],
                        fontSize: "1rem",
                        borderRadius: "1rem",
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                        padding: "1rem",
                    }
                },
                legends: {
                    text: {
                        fontSize: 12,
                        fontWeight: 600,
                        fill: colors.primary[400]
                    }
                },
            }}
                keys={[
                    'hot dog',
                    'burger',
                    'sandwich',
                    'kebab',
                    'fries',
                    'donut'
                ]}
                indexBy="country"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'yellow_green_blue' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'fries'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'sandwich'
                        },
                        id: 'lines'
                    }
                ]}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: isDashboard ?  undefined: 'country',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: isDashboard ?  undefined: 'food',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: graphicWidth === true ?"top-right": 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: graphicWidth === true ? 10 : 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
            />
        )
}
