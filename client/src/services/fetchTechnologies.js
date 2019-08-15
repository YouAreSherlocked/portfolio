const getAllTechnologies = async () => {
    const response = await fetch('technologies');
      const body = await response.json();
  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
  }

  const postTechnology = technology => {
    fetch('/technologies', {
      method: 'POST',
      body: JSON.stringify({
        title: technology
      }),
      headers: {"Content-Type": "application/json"}
      }).then(res => {
        if (res.ok) return res.json()
      }).then(data => {
        console.log(data);
        window.location.reload();
    });
  }
  
  const deleteAllTechnologies = () => {
    fetch('/technologies', {
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
    getAllTechnologies,
    postTechnology,
    deleteAllTechnologies
  }