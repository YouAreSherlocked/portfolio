const getAllQualiprojects = async () => {
    const response = await fetch('qualiprojects');
      const body = await response.json();
  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
  }
  
  const postQualiproject = qualiproject => {
    fetch('/qualiprojects', {
      method: 'POST',
      body: JSON.stringify({
        ...qualiproject
      }),
      headers: {"Content-Type": "application/json"}
      }).then(res => {
        if (res.ok) return res.json()
      }).then(data => {
        console.log(data);
        window.location.reload();
    });
  }
  
  const deleteAllQualiprojects = () => {
    fetch('/qualiprojects', {
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
    getAllQualiprojects,
    postQualiproject,
    deleteAllQualiprojects
  }