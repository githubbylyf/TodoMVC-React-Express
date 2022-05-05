function FetchData(key, dataorsetdata, url) {

    switch(key){
        case 'get':
            setTimeout(() => {
                fetch(url, {
                    method: 'GET'
                })
                .then(res => res.json())
                .then(data => dataorsetdata(data))
            }, 10);
            break;
        case 'post':
            fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(dataorsetdata)
            })
            .then(res => res.end)
            break;
        default:
            break;
    }
}

export default FetchData;