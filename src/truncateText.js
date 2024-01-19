const truncateText = (text, charLimit) => {
    try {
      if (!text) {
        return false;
      }
  
      if (text.length > charLimit) {
        return text.substring(0, charLimit) + "...";
      } else {
        return text;
      }
    } catch (error) {
      console.error("Error in truncateText:", error);
      return ""; // or some default value
    }
  };
  
  export default truncateText;
  