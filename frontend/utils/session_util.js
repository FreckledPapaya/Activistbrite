

export const createUser = (user) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users`,
    data: { user }
  });
};

export const fetchUser = (email) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${email}`
  });
};

export const createSession = (user) => {
  return $.ajax({
    method: 'POST',
    url: `/api/session`,
    data: { user }
  });
};


export const deleteSession = () => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/session`
  });
};