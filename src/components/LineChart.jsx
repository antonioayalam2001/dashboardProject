
import { ResponsiveLine } from '@nivo/line';
import { mockLineData as data } from '../data/mockData';
import { getColors } from '../helpers';

export const LineChart = ({ isDashboard = false }) =>
{
    const colors = getColors();
    return (
    <ResponsiveLine
            data={data}
            theme={
                {
                    text: {
                        fontSize: 18,
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
                    labels: {
                        text: {
                            fontSize: 18,
                            fontWeight: 600,
                            fill: colors.secondary[400]
                        }
                    },
                    // Cambiando tamaño de la etiqueta del centro
                    domain: {
                        labels: {
                            text: {
                                fontSize: 20,
                                fontWeight: 600,
                                fill: colors.secondary[200]
                            }
                        }
                    },
                    axis: {
                        domain: {
                            line: {
                                stroke: colors.primary[400],
                            }
                        },
                        ticks: {
                            text: {
                                fontSize: 12,
                                fontWeight: 600,
                                fill: colors.primary[400]
                            }
                        },
                        legend: {
                            text: {
                                fontSize: 12,
                                fontWeight: 600,
                                fill: colors.primary[700]
                            }
                        }
                    }
                }
            }
            colors={isDashboard ? {datum: "color"} : {scheme:"nivo"}}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="cardinal"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined: 'transportation',
            legendOffset: 16,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                itemTextColor: colors.secondary[400],
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(110, 0, 0, .03)',
                            itemOpacity: 1,
                            itemTextColor: 'rgba(110, 120, 220)'

                        }
                    }
                ]
            }
        ]}
    />
    )
}