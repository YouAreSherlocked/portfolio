const getAllSkills = async () => {
    const response = await fetch('skills');
      const body = await response.json();
  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
  }

  const postSkills = skills => {
    fetch('/skills', {
      method: 'POST',
      body: JSON.stringify({
        ...skills
      }),
      headers: {"Content-Type": "application/json"}
      }).then(res => {
        if (res.ok) return res.json()
      }).then(data => {
        console.log(data);
        window.location.reload();
    });
  }
  
  const deleteAllSkills = () => {
    fetch('/skills', {
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
    getAllSkills,
    postSkills,
    deleteAllSkills
  }