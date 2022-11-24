const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const createPartyBtn = document.querySelector('.create-party-modal');
const searchParty = document.querySelector('.search-party-modal');
const searchModal = document.querySelector('#search-modal'); 
const searchClose = document.querySelector('#search-delete');
const modalClose = document.querySelector('#create-delete');
const createModalBackground = document.querySelector('.create-modal-background');
const searchModalBackground = document.querySelector('.search-modal-background');
const createModal= document.querySelector('#create-modal');
const modalCancel = document.getElementById('modalCancel');
const submitCreateParty = document.getElementById('submitCreateParty');
const submitSearchParty = document.getElementById('submitSearchParty');
const modalCancelBtn = document.getElementById('modalCancelBtn');
const searchModalCancelBtn = document.getElementById('searchModalCancelBtn');
const myAccountBtn = document.querySelector('.my-account');

// handle the user submitting a new party
async function createPartyHandler(event) {
    event.preventDefault();
    // get the values from the modal inputs, radio buttons, etc
    const title = document.getElementById('createPartyTitle').value.trim(); 
    const startdate = document.getElementById('createPartyStartDate').value.trim();
    const ispublic = document.getElementById('createPartyPublic').checked;
    const ispublicfalse = document.getElementById('createPartyPrivate').checked;
    const isover18 = document.getElementById('createIsOver18True').checked;
    const isover18false = document.getElementById('createIsOver18False').checked;
    const theme_id = parseInt(document.getElementById('createPartyTheme').value.trim());

    // check that all of the above constants have values and/or a 'checked' status
    if(!(title && startdate && (ispublic || ispublicfalse) && (isover18 || isover18false) && theme_id)) {
        alert('Please ensure you are inputting a value for every field, or selecting an option in every case.');
        return;
    }
   
    console.log(typeof title, typeof startdate, typeof ispublic, typeof isover18, typeof theme_id);
    
    // Once we confirm we have values for all the fields in create-a-party modal,
    // make fetch() POST request to /api/parties/ to create a new party record
    const response = await fetch('/api/parties', {
        method: 'post',
        body: JSON.stringify({
          title,
          startdate,
          ispublic,
          isover18,
          theme_id
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        alert('Your party has been succesfully created!');
        createModal.classList.remove('is-active');
        // after the modal is removed, refresh the dashboard so the new party shows
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

// handle the user searching for parties
async function searchPartyHandler(event) {
    event.preventDefault();
    // get the values from the modal inputs, radio buttons, etc
    const ispublic = document.getElementById('searchPartyPublic').checked;
    const ispublicfalse = document.getElementById('searchPartyPrivate').checked;
    const isover18 = document.getElementById('searchIsOver18True').checked;
    const isover18false = document.getElementById('searchIsOver18False').checked;
    const theme_id = document.getElementById('searchPartyTheme').value.trim();

    // check that there is at least one qualifying condition from the above constants
    if(!(( ispublic || ispublicfalse ) && (isover18 || isover18false ) || theme_id)) {
        alert('Please ensure you are inputting a value for public/private, age minimum, and party theme.');
        return;
    }
    // console.log(ispublic, ispublicAll, isover18, isover18false, theme_id, searchDistance);
    
    const response = await fetch(`/search/${ispublic}/${isover18}/${theme_id}`, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
    });

    if(response.ok) {
        // alert('Your search is successfull!');
        searchModal.classList.remove('is-active');
        // after the modal is removed, refresh the page to show the search results
        document.location.replace(`/search/${ispublic}/${isover18}/${theme_id}`);
    } else {
        alert(response.statusText);
    }
}

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});

// make Search Modal appear when its button is clicked in nav bar
searchParty.addEventListener('click', () => {
    searchModal.classList.add('is-active')
    searchModalBackground.classList.add('is-active');
});

// make Create Modal appear when its button is clicked in nav bar
createPartyBtn.addEventListener('click', () => {
    createModal.classList.add('is-active')
    createModalBackground.classList.add('is-active');
});

// close out of create modal
modalClose.addEventListener('click', () => {
    createModal.classList.remove('is-active');
});

// close out of search modal
searchClose.addEventListener('click', () => {
    searchModal.classList.remove('is-active');
});

// cancel out of create modal
modalCancelBtn.addEventListener('click', () => {
    createModal.classList.remove('is-active');
});
// cancel out of search modal
searchModalCancelBtn.addEventListener('click', () => {
    searchModal.classList.remove('is-active');
});

// search party event listener
submitSearchParty.addEventListener('click', searchPartyHandler);
// create party event listener
submitCreateParty.addEventListener('click', createPartyHandler);
