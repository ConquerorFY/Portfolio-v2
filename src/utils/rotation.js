export const getAutoRotateID = () => {
    return localStorage.getItem("auto-rotate-id")
        ? parseInt(localStorage.getItem("auto-rotate-id"))
        : null;
}

export const setAutoRotateID = (id) => {
    localStorage.setItem("auto-rotate-id", id);
}