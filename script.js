async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7d8216ebb0msh38b7f2a7fe4e9f4p1e8b2ajsn7bc8bf122288',
            'X-RapidAPI-Host': 'sports-live-scores.p.rapidapi.com'
        }
    };
    
    const res = await fetch('https://sports-live-scores.p.rapidapi.com/football/live', options)
    const record = await res.json()
    
    document.getElementById("scores").innerHTML = record.matches.map(item => {
        
        if (item['Home Score'] > item['Away Score']) {
            return `<li><strong>${item['Home Team']}  ${item['Home Score']}</strong> - ${item['Away Team']}  ${item['Away Score']}  ~~~   <i>${item.Status}</i></li>`
        } else if (item['Home Score'] == item['Away Score']) {
            return `<li>${item['Home Team']}  ${item['Home Score']} - ${item['Away Team']}  ${item['Away Score']}  ~~~   <i>${item.Status}</i></li>`
        } else {
            return `<li>${item['Home Team']}  ${item['Home Score']} - <strong>${item['Away Team']}  ${item['Away Score']}</strong>  ~~~   <i>${item.Status}</i></li>`
        }
        
        
    }).join('');
    console.log(record)
}
fetchData();