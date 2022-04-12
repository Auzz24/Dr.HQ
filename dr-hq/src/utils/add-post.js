async function newFormHandler(event) {
    event.preventDefault();
  
    const drName = document.querySelector('#drName').value;
    const drEmail= document.querySelector('#drEmail').value;
    const drTelephone = document.querySelector('#drTelephone').value;
    const drDepartment= document.querySelector('#drDepartment').value;
    const drAddress= document.querySelector('#drAddress').value;

    // "/api/doctors"
    const response = await fetch(`/`, {
      method: 'POST',
      body: JSON.stringify({
        drName,
        drEmail,
        drTelephone,
        drDepartment,
        drAddress
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);