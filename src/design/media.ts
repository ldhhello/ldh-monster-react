import { css, type CSSObject, type Interpolation } from "styled-components";
import { breakpoints, type DeviceType } from "./breakpoints";

const media = Object.entries(breakpoints).reduce((acc, [key, value]) => {
    return {
        ...acc,
        [key]: (
            first: CSSObject | TemplateStringsArray,
            ...interpolations: Interpolation<object>[]
        ) => css`
            @media (max-width: ${value-1}px) {
                ${css(first, ...interpolations)}
            }
        `,
    };
}, {}) as Record<DeviceType, any>;

export { media };