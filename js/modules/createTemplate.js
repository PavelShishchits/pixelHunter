export const createTempate = (html) => {
    const template = document.createElement(`template`);
    template.innerHTML = html;
    return template.content;
};