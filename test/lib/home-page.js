export const Url = "/";
export const Title = "Safari";
export const Container = "div[id=home]";

export const Is = async page => {
    const pageTitle = await page.title();
    return pageTitle === Title;
};

export const HasContent = async page => {
    const containerElement = await page.$(Container);
    return containerElement !== null;
};

export const HasOptions = async page => {
    return await false;
};
