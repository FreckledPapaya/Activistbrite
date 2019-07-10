export const fetchEvents = () => { 
  return $.ajax({
    method: 'GET',
    url: 'api/events'
  });  
};

export const fetchEvent = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/events/${id}`
  });  
};

export const postEvent = (event) => {
  return $.ajax({
    method: 'POST',
    url: `api/events/`,
    data: { event }
  });  
};

export const patchEvent = (event) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/events/${id}`,
    data: { event }
  });  
}; 

export const deleteEvent = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/events/${id}` 
  });  
};