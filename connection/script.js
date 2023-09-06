const eventTitle = document.getElementById("eventTitle");
const hostedBy = document.getElementById("hostedBy");
const time = document.getElementById("time");
const loc = document.getElementById("location");
const description = document.getElementById("description");
const descTitle = document.getElementById("descTitle");
const eventPic = document.getElementById("eventPic");

const urlParams = new URLSearchParams(window.location.search);
const eventId =urlParams.get('id');


const getEventById = async () => {
    const response = await fetch("../events.json");
    const data = await response.json();
    const event = data.find(it => it.id === eventId);
    if (event && Object.keys(event).length > 0) {
        eventTitle.innerHTML = event?.title;
        hostedBy.innerHTML = event?.host;
        time.innerHTML = event?.time;
        loc.innerHTML = event?.location;
        descTitle.innerHTML = event?.descTitle;
        description.innerHTML = event?.description;
        eventPic.src = event?.pic;
    }
}

getEventById();