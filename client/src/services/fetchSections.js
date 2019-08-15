const getAllSections = async () => {
    const response = await fetch('sections');
      const body = await response.json();
  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
  }

  const postSection = section => {
    fetch('/sections', {
      method: 'POST',
      body: JSON.stringify({
        title: section
      }),
      headers: {"Content-Type": "application/json"}
      }).then(res => {
        if (res.ok) return res.json()
      }).then(data => {
        console.log(data);
        window.location.reload();
    });
  }
  
  const deleteAllSections = () => {
    fetch('/sections', {
      method: 'DELETE',
      headers: {"Content-Type": "application/json"}
      }).then(res => {
        if (res.ok) return res.json()
      }).then(data => {
        console.log(data);
        window.location.reload();
    });
  }
  
  export default {
    getAllSections,
    postSection,
    deleteAllSections
  }