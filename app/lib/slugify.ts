export const slugify = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "") // remove non-word characters
      .replace(/\s+/g, "-"); // replace spaces with hyphens
  };