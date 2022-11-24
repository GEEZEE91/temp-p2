async function goToDashboardHandler(event) {
    event.preventDefault();
    document.location.replace('/dashboard');
}

document.getElementById('goToDashboardBtn').addEventListener('click', goToDashboardHandler);
