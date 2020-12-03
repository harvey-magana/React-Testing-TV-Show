import axios from "axios";
// import React from react
// import useEffect from react
// import axios from axios 
// create and export your fetchShow function 
// move your fetchShow function from your App component into this file
// import this component into App once you have completed the above steps

export const fetchShow = () => {
    return axios
    .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
}