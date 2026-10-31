
const API_URL = `${import.meta.env.VITE_API_URL || ""}/api/tasks`;

const request = async (url, token, options = {}) => {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
};

export const getTasks = (token, completed) => {
  const query =
    completed === undefined ? "" : `?completed=${completed}`;

  return request(`${API_URL}${query}`, token);
};

export const createTask = (title, token) =>
  request(API_URL, token, {
    method: "POST",
    body: JSON.stringify({ title })
  });

export const updateTask = (id, updates, token) =>
  request(`${API_URL}/${id}`, token, {
    method: "PUT",
    body: JSON.stringify(updates)
  });

export const deleteTask = (id, token) =>
  request(`${API_URL}/${id}`, token, {
    method: "DELETE"
  });
