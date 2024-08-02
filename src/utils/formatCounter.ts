export const formatCounter = (count: number) => {
    return count < 10 ? `0${count}` : count.toString();
};