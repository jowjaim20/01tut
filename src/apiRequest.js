const apiRequest = async (url='', optionsObj = null, errMsg = null )=>{
	try {
		const response = await fetch( url, optionsObj);
		if (!response.ok) {
			throw Error('Please reaload the app');
		}
	} catch (err) {
		errMsg =err.message;
	} finally{
		console.log('post')
		return errMsg;
		
	}
};

export default apiRequest;