// function requires development...
async function editPartyHandler(event) {
    event.preventDefault();
    window.alert('This buttons requires some work. Sorry!');
}

async function deletePartyHandler(event) {
    event.preventDefault();
    console.log('inside deletePartyHandler');
    let UriArray = (window.location.pathname).split('/');
    const partyId = UriArray[UriArray.length - 1];
    // Once we have the party id value, make a
    // fetch() DELETE request to the /api/parties/:id
      const response = await fetch(`/api/parties/${partyId}`, {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
}

async function goToDashboardHandler(event) {
    event.preventDefault();
    document.location.replace('/dashboard');
}


document.getElementById('editPartyBtn').addEventListener('click', editPartyHandler);
document.getElementById('deletePartyBtn').addEventListener('click', deletePartyHandler);
document.getElementById('goToDashboardBtn').addEventListener('click', goToDashboardHandler);
