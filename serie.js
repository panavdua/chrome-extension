async function fetchSerie() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7d8216ebb0msh38b7f2a7fe4e9f4p1e8b2ajsn7bc8bf122288',
            'X-RapidAPI-Host': 'sports-live-scores.p.rapidapi.com'
        }
    };
    
    const res = await fetch('https://sports-live-scores.p.rapidapi.com/football/rankings/33', options)
    const record = await res.json()
    document.getElementById("serierank").innerHTML = record.rankings.map(item => 
        {
            if (item.Rank < 5) {
                return `<li id="blue">${item['Team Name']} - ${item.Points} Points \xa0 <i>(${item.Matches} matches)</i> </li>`
            } else if (item.Rank > 17) {
                return `<li id="red">${item['Team Name']} - ${item.Points} Points \xa0 <i>(${item.Matches} matches)</i></li>`
            } 
            else {
                return `<li>${item['Team Name']} - ${item.Points} Points \xa0 <i>(${item.Matches} matches)</i></li>`
            }
        }).join(' ');
    
    
    console.log(record)
}
fetchSerie();