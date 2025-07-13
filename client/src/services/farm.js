import api from '../utils/api';

// create new farm by user
export const createFarm = async (data) => {
  const response = await api.post('/farm', data);

  return response.data;
};

// get all user farms
export const userFarms = async () => {
  const response = await api.get('/farm');

  return response.data;
};

//get farm by id param
export const getFarm = async (id) => {
  const response = await api.get(`/farm/${id}`);

  return response.data;
};

// delete farm by owner
export const deleteFarm = async (id) => {
  const response = await api.delete(`/farm/${id}`);

  return response.data;
};

//update farm detals by owner
export const updateFarm = async (id, data) => {
  const response = await api.patch(`/farm/${id}`, data);

  return response.data;
};

// get devices from firebase
export const fetchFromFirebase = async (firebaseUrl) => {
  // Convert console URL to proper database URL format
  let dbUrl = firebaseUrl;
  if (firebaseUrl.includes('console.firebase.google.com')) {
    // Extract project ID from console URL
    const projectId = firebaseUrl.match(/project\/([^/]+)/)?.[1];
    if (projectId) {
      dbUrl = `https://${projectId}-default-rtdb.firebaseio.com/`;
    }
  }

  // Ensure URL ends with .json for Firebase REST API
  const finalUrl = dbUrl.includes('.json')
    ? dbUrl
    : `${dbUrl.replace(/\/$/, '')}/.json`;

  const response = await fetch(finalUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch Firebase data');
  }
  return response.json();
};

// Update specific field in Firebase
export const updateFirebaseField = async (firebaseUrl, path, data) => {
  let dbUrl = firebaseUrl;
  if (firebaseUrl.includes('console.firebase.google.com')) {
    const projectId = firebaseUrl.match(/project\/([^/]+)/)?.[1];
    if (projectId) {
      dbUrl = `https://${projectId}-default-rtdb.firebaseio.com/`;
    }
  }

  const finalUrl = `${dbUrl.replace(/\/$/, '')}/${path}.json`;

  const response = await fetch(finalUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Firebase error response:', errorText);
    throw new Error(
      `Failed to update Firebase data: ${response.status} ${response.statusText} - ${errorText}`
    );
  }
  return response.json();
};
