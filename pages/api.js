// utils/api.js

export async function fetchPageData(keyid) {
    
    try {
      const response = await fetch(`https://digitalconnexion.com/admin/api/getmetadata/${keyid}`);
      const apiData = await response.json();     

      return {
        title: apiData.data.title,
        description: apiData.data.description,       
        og_title: apiData.data.og_title, 
        og_description: apiData.data.og_description,
        schema_tag: apiData.data.schema_tag
      };
    } catch (error) {
      console.error(`Error fetching page data for ${keyid}:`, error);
      return {
        title: '',
        description: '',
        og_title: '',
        og_description: '',
        schema_tag:''

      };
    }
  }
  