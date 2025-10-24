import { useMediaQuery } from 'react-responsive';
import { breakpoints } from './breakpoints';

export const useBreakpoint = () => {
    const isDesktop = useMediaQuery({ minWidth: breakpoints.desktopSmall });
    const isDesktopSmall = useMediaQuery({ minWidth: breakpoints.tablet, maxWidth: breakpoints.desktopSmall - 1 });
    const isTablet = useMediaQuery({ minWidth: breakpoints.tabletSmall, maxWidth: breakpoints.tablet - 1 });
    const isTabletSmall = useMediaQuery({ minWidth: breakpoints.mobile, maxWidth: breakpoints.tabletSmall - 1 });
    const isMobile = useMediaQuery({ minWidth: breakpoints.mobileSmall, maxWidth: breakpoints.mobile - 1 });
    const isMobileSmall = useMediaQuery({ maxWidth: breakpoints.mobileSmall - 1 });


    let device = 'desktop';
    if (isDesktopSmall) device = 'desktopSmall';
    else if (isTablet) device = 'tablet';
    else if (isTabletSmall) device = 'tabletSmall';
    else if (isMobile) device = 'mobile';
    else if (isMobileSmall) device = 'mobileSmall';

    return { device, isDesktop, isDesktopSmall, isTablet, isTabletSmall, isMobile, isMobileSmall };
};