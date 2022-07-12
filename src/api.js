const axios = require('axios');
function requestHttp(moviName, page) {    
    return axios.get(`https://pixabay.com/api/`, {
        params: {
            key: "28514356-cee68255b4a081534629cb8cb",
            q: moviName,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
            page:page,
            per_page: 20
        }
    })
      
}

export { requestHttp };

