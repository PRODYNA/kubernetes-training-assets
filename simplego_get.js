import http from 'k6/http';

export let options = {
    duration: "3m",
    vus: 50,
    noConnectionReuse: true
};

export default function () {
    http.get("http://simple-go/load?duration=1");
};
