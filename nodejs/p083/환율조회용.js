const EX_R = () => {
    return new Promise((resolve) => {
        const url = 'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                resolve(data[0].basePrice)
            })
    })
}
