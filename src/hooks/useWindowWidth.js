import {useEffect, useState} from "react";

export const useWindowWidth = (initialState = 0) => {
    const [widthResponsive, setWidthResponsive] = useState(initialState);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [graphicWidth, setGraphicWidth] = useState(false);

    useEffect(() => {
        const handleWidthPosition = ({target}) => {
            const {window: {innerWidth}} = target;
            setWidthResponsive(innerWidth);
            innerWidth <= 900 ? setIsCollapsed(true) : setIsCollapsed(false)
            innerWidth <= 500 ? setGraphicWidth(true) : setGraphicWidth(false)
        }
        window.addEventListener('resize', handleWidthPosition)
        return () => {
            // console.log('clean')
            window.removeEventListener('resize', handleWidthPosition);
        }
    }, [widthResponsive]);

    const handleCollapsed = () => {
        setIsCollapsed(!isCollapsed);
    }

    return {
        widthResponsive,
        isCollapsed,
        handleCollapsed,
        graphicWidth
    }
}