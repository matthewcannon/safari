export const Url = "/";
export const Title = "Safari";

export const Is = async page => {
    const pageTitle = await page.title();
    return pageTitle === Title;
};

export const HasContent = async page => {
    return await false;
};

export const HasOptions = async page => {
    return await false;
};
