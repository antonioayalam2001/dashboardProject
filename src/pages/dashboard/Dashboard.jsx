import DownloadOutlined from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PersonAdd from "@mui/icons-material/PersonAdd";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import Traffic from "@mui/icons-material/Traffic";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { BarChart } from "../../components/BarChart.jsx";
import { GeoChart } from "../../components/GeoChart.jsx";
import { Header } from "../../components/Header.jsx";
import { LineChart } from "../../components/LineChart.jsx";
import { ProgressCircle } from "../../components/ProgressCircle.jsx";
import { StatBox } from "../../components/StatBox.jsx";
import { mockTransactions } from "../../data/mockData.js";
import { getColors } from "../../helpers/getColors.js";
import { useWindowWidth } from "../../hooks/useWindowWidth.js";

export const Dashboard = () => {
    const colors = getColors();
    const { widthResponsive } = useWindowWidth();
    const isMobile = widthResponsive < 600;
    return (
        <Box m={'1rem'} paddingRight={"1rem"}>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Header title={'Antonio Dashboard'} subtitle={'Welcome'}></Header>
                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.black[700],
                            color: colors.accentColor[200],
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            padding: '1rem',
                            borderRadius: '1rem',
                            '&:hover': {
                                backgroundColor: colors.primary[600],
                            }
                        }}>
                        <DownloadOutlined sx={{ fontSize: '2rem' }} /> Download Reports
                    </Button>
                </Box>
            </Box>
            {/* Grid */}
            <Box display={"grid"} gridTemplateColumns={"repeat(12, 1fr)"} gap={"2rem"} mt={"1rem"}  gridAutoRows="140px">
                {/* 1st row */}
                <Box gridColumn={ isMobile ? "span 6" : "span 3"} sx={{padding: '1rem' , borderRadius: '1rem'}} display={"flex"} alignItems={"center"} justifyContent={"center"} backgroundColor={colors.black[500]} padding={"1rem"}>
                    <StatBox
                        title={"New Users"}
                        subtitle={"Last 30 Days"}
                        icon={<EmailIcon sx={{ fontSize: '2rem', color: colors.primary[400] }} />}
                        progress={0.7}
                        increase={"+42%"}
                    />
                </Box>
                <Box gridColumn={ isMobile ? "span 6" : "span 3"} sx={{padding: '1rem' , borderRadius: '1rem'}} display={"flex"} alignItems={"center"} justifyContent={"center"} backgroundColor={colors.black[500]} padding={"1rem"}>
                    <StatBox
                        title={"New Users"}
                        subtitle={"Last 30 Days"}
                        icon={<PointOfSaleIcon sx={{ fontSize: '2rem', color: colors.primary[400] }} />}
                        progress={0.7}
                        increase={"+42%"}
                    />
                </Box>
                <Box gridColumn={ isMobile ? "span 6" : "span 3"} sx={{padding: '1rem' , borderRadius: '1rem'}} display={"flex"} alignItems={"center"} justifyContent={"center"} backgroundColor={colors.black[500]} padding={"1rem"}>
                    <StatBox
                        title={"New Users"}
                        subtitle={"Last 30 Days"}
                        icon={<Traffic sx={{ fontSize: '2rem', color: colors.primary[400] }} />}
                        progress={0.7}
                        increase={"+42%"}
                    />
                </Box>
                <Box gridColumn={ isMobile ? "span 6" : "span 3"} sx={{padding: '1rem' , borderRadius: '1rem'}} display={"flex"} alignItems={"center"} justifyContent={"center"} backgroundColor={colors.black[500]} padding={"1rem"}>
                    <StatBox
                        title={"New Users"}
                        subtitle={"Last 30 Days"}
                        icon={<PersonAdd sx={{ fontSize: '2rem' , color: colors.primary[400] }} />}
                        progress={0.7}
                        increase={"+42%"}
                    />
                </Box>
                {/* ROW 2 */}
                <Box
                    gridColumn={ isMobile ? "span 12" : "span 8"}
                    gridRow={ isMobile ? "span 1" : "span 2"}
                    backgroundColor={colors.black[700]}
                    sx={{padding: '1rem' , borderRadius: '1rem'}}
                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex "
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                color={colors.black[100]}
                            >
                                Revenue Generated
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                color={colors.black[100]}
                            >
                                $59,342.32
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlined
                                    sx={{ fontSize: "26px", color: colors.black[700] }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height="250px" m="-20px 0 0 0"  display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        {!isMobile && <LineChart isDashboard={true} />}
                        {isMobile && <Typography m={"0 auto"} variant="h5" fontWeight="600" color={colors.black[100]} sx={{ padding: '1rem' }}>line Chart available in larger devices</Typography>}
                    </Box>
                </Box>

                <Box
                    gridColumn={ isMobile ? "span 12" : "span 4"}
                    gridRow="span 2"
                    backgroundColor={colors.black[700]}
                    overflow="auto"
                    sx={{padding: '1rem' , borderRadius: '1rem'}}
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.black[700]}`}
                        colors={colors.black[100]}
                        p="15px"

                    >
                        <Typography color={colors.black[100]} variant="h5" fontWeight="600">
                            Recent Transactions
                        </Typography>
                    </Box>
                    {mockTransactions.map((transaction, i) => (
                        <Box
                            key={`${transaction.txId}-${i}`}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.black[700]}`}
                            p="15px"
                        >
                            <Box>
                                <Typography
                                    color={colors.white[200]}
                                    variant="h5"
                                    fontWeight="600"
                                >
                                    {transaction.txId}
                                </Typography>
                                <Typography color={colors.white[500]}>
                                    {transaction.user}
                                </Typography>
                            </Box>
                            <Box color={colors.black[100]}>{transaction.date}</Box>
                            <Box
                                backgroundColor={colors.primary[500]}
                                p="5px 10px"
                                borderRadius="4px"
                                fontWeight={600}
                                color={colors.black[100]}
                            >
                                ${transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* ROW 3 */}
                <Box
                    gridColumn={ isMobile ? "span 12" : "span 4"}
                    sx={{padding: '1rem' , borderRadius: '1rem'}}
                    gridRow="span 2"
                    backgroundColor={colors.black[700]}
                    p="30px"
                >
                    <Typography
                        color={colors.black[100]}
                        variant="h5" fontWeight="600">
                        Campaign
                    </Typography>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        mt="25px"
                    >
                        <ProgressCircle size="125" />
                        <Typography
                            variant="h5"
                            color={colors.black[100]}
                            sx={{ mt: "15px" }}
                        >
                            $48,352 revenue generated
                        </Typography>
                        <Typography color={colors.black[100]}>Includes extra misc expenditures and costs</Typography>
                    </Box>
                </Box>
                <Box
                    gridColumn={ isMobile ? "span 12" : "span 4"}
                    sx={{padding: '1rem' , borderRadius: '1rem'}}
                    gridRow="span 2"
                    backgroundColor={colors.black[700]}
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        color={colors.black[100]}
                        sx={{ padding: "10px 10px 0 10px" }}
                    >
                        Sales Quantity
                    </Typography>
                    <Box height="300px" mt="-20px">
                        <BarChart isDashboard={true} />
                    </Box>
                </Box>
                <Box
                    gridColumn={ isMobile ? "span 12" : "span 4"}
                    sx={{padding: '1rem' , borderRadius: '1rem'}}
                    gridRow="span 2"
                    backgroundColor={colors.black[700]}
                    padding="30px"
                >
                    <Typography
                        color={colors.black[100]}
                        variant="h5"
                        fontWeight="600"
                        sx={{ marginBottom: "15px" }}
                    >
                        Geography Based Traffic
                    </Typography>
                    <Box height="200px">
                        <GeoChart isDashboard={true} />
                    </Box>
                </Box>
            </Box>
            </Box>
    );
}