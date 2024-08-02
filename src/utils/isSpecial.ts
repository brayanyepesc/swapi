export const isSpecial = (id: string, category: string) => {
    if (category === 'films') {
        return true;
    }

    const specialPeopleIds = new Set([...Array(20).keys()].map(n => `${n + 1}`));
    const specialStarshipsIds = new Set([...Array(10).keys()].map(n => `${n + 1}`));

    if (category === 'people') {
        return specialPeopleIds.has(id);
    } else if (category === 'starships') {
        return specialStarshipsIds.has(id);
    }

    return false;
};