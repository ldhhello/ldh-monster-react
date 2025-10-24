export type DeviceType = "desktopSmall" | 
    "tablet" |
    "tabletSmall" |
    "mobile" |
    "mobileSmall";

// max-width (value - 1) 기준
export const breakpoints: Record<DeviceType, number> = {
    desktopSmall: 1420,
    tablet: 1020,
    tabletSmall: 840,
    mobile: 750,
    mobileSmall: 450
}