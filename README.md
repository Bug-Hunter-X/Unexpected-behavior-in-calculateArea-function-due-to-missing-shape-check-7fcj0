# Unexpected behavior in calculateArea function due to missing shape check
This bug demonstrates an unexpected behavior in a TypeScript function that calculates the area of different shapes. The function does not properly handle cases where an invalid shape is provided as input.  This leads to either incorrect calculations or runtime errors.

## Bug Description
The `calculateArea` function is designed to calculate the area of rectangles and triangles. However, it does not explicitly check for invalid shapes.  If a shape other than "rectangle" or "triangle" is passed, it throws an error for shapes without an optional height parameter, but does not perform any check when other shapes are passed to the function.

## Bug Solution
The solution involves adding a check at the beginning of the function to ensure the provided `shape` is valid before performing calculations.  This prevents unexpected behavior and enhances the robustness of the function.
