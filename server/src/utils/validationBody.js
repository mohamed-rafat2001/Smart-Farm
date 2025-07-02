const validationBody = (obj, Fields) => {
	let newObject = {};
	// Loop through the object fields
	for (const field of Fields) {
		if (field in obj) {
			// Check if property exists (not if it's truthy)
			newObject[field] = obj[field];
		} else {
			return {};
		}
	}
	return newObject;
};
export default validationBody;
