ajax("https://api.nytimes.com/svc/topstories/v2/food.json?api-key=Uou4anPgDJHztfUSXGm7Ru1SiHzqpcv5"
, res => {
    let resArr = JSON.parse(res).results
    resArr.filter((event)=>{
        //console.log(event)
        return event.section == "dining" //&& event.subsection == "drinks";
    }).forEach((event)=>{
        console.log(event);
     })