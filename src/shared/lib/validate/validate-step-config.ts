export const validateStepConfig = (
    array: unknown[][],
    waitingLength: number,
) => {
    const arrLength = array.map((arr) => arr.length);

    const allEqual = arrLength.every((val) => val === waitingLength);

    if (!allEqual) {
        throw new Error('Error: The length of the step arrays does not match!');
    }
};
