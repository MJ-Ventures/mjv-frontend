export const transformData = (data) => {
  if (!data?.length) return;
  const transformedData = {};

  data.forEach((item) => {
    const { category, date, title, description, slug } = item;

    const newEntry = {
      date: new Date(date).toISOString(),
      title,
      description,
      slug: `/${slug}`,
    };

    // Add to the specific category
    if (!transformedData[category]) {
      transformedData[category] = [];
    }
    transformedData[category].push(newEntry);

    // Add to the 'All' category
    if (!transformedData["All"]) {
      transformedData["All"] = [];
    }
    transformedData["All"].push(newEntry);
  });

  const result = Object.keys(transformedData).map((category) => ({
    category,
    data: transformedData[category],
  }));

  // Move the 'All' category to the first index
  const allCategoryIndex = result.findIndex((item) => item.category === "All");
  if (allCategoryIndex > -1) {
    const [allCategory] = result.splice(allCategoryIndex, 1);
    result.unshift(allCategory);
  }

  return result;
};
