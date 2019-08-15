const getAllReferences = async () => {
    const response = await fetch('references');
      const body = await response.json();
  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
  }

  const postReferences = references => {
    fetch('/references', {
      method: 'POST',
      body: JSON.stringify({
        ...references
      }),
      headers: {"Content-Type": "application/json"}
      }).then(res => {
        if (res.ok) return res.json()
      }).then(data => {
        console.log(data); 
        window.location.reload();
    });
  }
  
  const deleteAllReferences = () => {
    fetch('/references', {
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
    getAllReferences,
    postReferences,
    deleteAllReferences
  }