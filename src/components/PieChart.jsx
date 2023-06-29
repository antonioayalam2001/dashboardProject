import { ResponsivePie } from "@nivo/pie"
import { mockPieData as data} from "../data/mockData"
import { getColors } from "../helpers"
export const PieChart = ({ isDashboard = false }) => {
    const colors = getColors();
    return (
        <ResponsivePie
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
                                fill: colors.secondary[400]
                            }
                        }
                    }
                }
            }
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'blue_purple' }}
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
            arcLinkLabelsTextColor={colors.primary[300]}
        arcLinkLabelsThickness={5}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}

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
                            itemTextColor: {colors: colors.primary[300]},
                        }
                    }
                ]
            }
        ]}
    />
)
}
