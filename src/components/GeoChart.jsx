import { ResponsiveChoropleth } from "@nivo/geo"
import { mockGeographyData as data } from "../data/mockData"
import { geoFeatures } from "../data/mockGeoFeatures"
import { getColors } from "../helpers"
export const GeoChart = ({ isDashboard = false }) => {
    const colors = getColors();
    return (
        <ResponsiveChoropleth
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
                            fill: colors.secondary[400],
                            color: colors.secondary[400]
                        }
                    },
                    // Cambiando tamaño de la etiqueta del centro
                    domain: {
                        labels: {
                            text: {
                                fontSize: 20,
                                fontWeight: 600,
                                fill: colors.secondary[400],
                                color: colors.secondary[400]
                            }
                        }
                    }
                }
            }
            projectionScale={isDashboard ? 40 : 150}
            features={geoFeatures.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors="YlGnBu"
            domain={[0, 1000000]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionTranslation={isDashboard ? [0.48, 0.6] : [0.5, 0.5]}
            projectionRotation={[0, 0, 0]}
            borderWidth={0.5}
            borderColor="#fff"

            legends={
                !isDashboard ? [
                    {
                        anchor: 'bottom-left',
                        direction: 'column',
                        justify: true,
                        translateX: 20,
                        translateY: -100,
                        itemsSpacing: 0,
                        itemWidth: 94,
                        itemHeight: 18,
                        itemDirection: 'left-to-right',
                        itemTextColor: colors.secondary[400],
                        itemOpacity: 0.85,
                        symbolSize: 18,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000000',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ] : undefined
            }
        />
    )
}
