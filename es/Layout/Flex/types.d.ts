export declare const FlexPropAndPossibleValueMap: {
    flexDirection: readonly ["row", "row-reverse", "column", "column-reverse"];
    justifyContent: readonly ["center", "flex-start", "flex-end", "space-between", "space-around"];
    alignItems: readonly ["center", "flex-start", "flex-end", "stretch", "baseline"];
    flexWrap: readonly ["nowrap", "wrap", "wrap-reverse"];
};
export declare type FlexProps = {
    /** CSS property flex-direction */
    flexDirection?: typeof FlexPropAndPossibleValueMap.flexDirection[number];
    /** CSS property justify-content */
    justifyContent?: typeof FlexPropAndPossibleValueMap.justifyContent[number];
    /** CSS property align-items */
    alignItems?: typeof FlexPropAndPossibleValueMap.alignItems[number];
    /** CSS property flex-wrap */
    flexWrap?: typeof FlexPropAndPossibleValueMap.flexWrap[number];
};
