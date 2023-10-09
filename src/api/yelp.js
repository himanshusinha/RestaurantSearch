import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 4lOsZvht12OWEQoVupllgs-bB2D6YmvqgzDjsdSG5doUPpFl_N6-Nuk7NMwBiiggKR5hSwSwAZeWN7xxXXGdQ2B36eyVkDkL8WUY9f5Qkc_NPAdTmw26N5saaSR8YHYx',
  },
});
