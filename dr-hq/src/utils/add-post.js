async function newFormHandler(formState) {
    
    // "/api/doctors"
    // const response = 
    await fetch(`/api/doctor`, {
      method: 'POST',
      body: JSON.stringify(
        formState),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    // if (response.ok) {
    //   document.location.replace('/');
    // } else {
    //   alert(response.statusText);
    // }
  }
  
  export default newFormHandler;

  // document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);