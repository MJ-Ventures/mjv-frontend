const transformData = (data) => {
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

const extractText = (data) => {
  if (!data?.length) return;
  let text = "";

  data.forEach((section) => {
    text += section.heading + " ";
    section.listItems.forEach((item) => {
      text += item.description + " ";
    });
    section.paragraphs.forEach((paragraph) => {
      text += paragraph + " ";
    });
  });

  return text.trim();
};

const calculateTextAnalysis = (data) => {
  if (!data) return;
  const text = extractText(data);
  const countLetters = (text) => {
    if (!text) return;
    const letters = text?.replace(/[^a-zA-Z]/g, "");
    return letters?.length;
  };

  const calculateReadingTime = (text) => {
    if (!text) return;
    const words = text?.trim().split(/\s+/).length;
    const wordsPerMinute = 200;
    const readingTime = Math.ceil(words / wordsPerMinute);
    return readingTime;
  };

  const letterCount = countLetters(text);
  const readingTime = calculateReadingTime(text);

  return {
    letterCount,
    readingTime,
  };
};

export { transformData, calculateTextAnalysis };
