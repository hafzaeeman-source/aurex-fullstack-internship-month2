
const API_URL = "/api/tasks";

const request = async (url, options = {}) => {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

export const getTasks = () => request(API_URL);

export const addTask = (title) =>
  request(API_URL, {
    method: "POST",
    body: JSON.stringify({ title })
  });

export const updateTask = (id, changes) =>
  request(`${API_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(changes)
  });

export const deleteTask = (id) =>
  request(`${API_URL}/${id}`, {
    method: "DELETE"
  });
