const getAllWorksections = async () => {
    const response = await fetch('worksections');
      const body = await response.json();
  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
  }

  const postWorksection = worksection => {
    fetch('/worksections', {
      method: 'POST',
      body: JSON.stringify({
        title: worksection
      }),
      headers: {"Content-Type": "application/json"}
      }).then(res => {
        if (res.ok) return res.json()
      }).then(data => {
        console.log(data);
        window.location.reload();
    });
  }
  
  const deleteAllWorksections = () => {
    fetch('/worksections', {
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
    getAllWorksections,
    postWorksection,
    deleteAllWorksections
  }