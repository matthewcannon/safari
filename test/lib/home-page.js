export const Url = "/";
export const Title = "Safari";
export const Generation = "span[id=generation]";

export const Is = async page => {
    const pageTitle = await page.title();
    return pageTitle === Title;
};

export const HasContent = async page => {
    const containerElement = await page.$(Generation);
    return containerElement !== null;
};

export const HasOptions = async page => {
    return await false;
};
