let search_name_symbol = document.getElementById('search_name_symbol');
let sort_mkt_cap = document.getElementById('sort_mkt_cap');
let sort_percentage = document.getElementById('sort_percentage');

let data_div = document.getElementById('data');
let response = [];

//function to load data initially

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    .then(response => response.json())
    .then((res) => {
        response = res.map((element) => {
             let ojb = {
                image:element.image,
                name:element.name,
                symbol:element.symbol,
                currentPrice:element.current_price,
                marketCap:element.market_cap,
                percentageChange:element.market_cap_change_percentage_24h
             }
             return ojb;
        })
    }).catch(err => {
        console.log(err)
})



console.log(response)

function myFUnc() {

    response.map((element) => {
    let items = document.createElement('tr');
            items.className = 'items'
            items.innerHTML = `
            <div class="item1">
               <img src=${element.image} alt="" srcset="">
               <h3>${element.name}</h3>
            </div>
            <div class="item2">
                ${element.symbol}
            </div>
            <div class="item3">
                $${element.current_price}
            </div>
            <div class="item4">
                $${element.total_volume}
            </div>
            <div class="item5">
                ${element.price_change_percentage_24h}%
            </div>
            <div class="item6">
                 Mkt Cap:${element.market_cap}
            </div>
                      `
    data_div.appendChild(items);
    })
}


//here we are attaching addEventListener to the event to search values by name or symbol
search_name_symbol.addEventListener('input',(event)=>{
    event.preventDefault();

    if(search_name_symbol.value === "" && sort_mkt_cap.value === "" && sort_percentage.value === ""){
        console.log("hello")
        myFUnc();
    }
    
        let val = event.target.value;
        // console.log(val)
        data_div.innerHTML = "";
        let filtere = response.filter((element) => {
            return ((element.name.toLowerCase() === val.toLowerCase()) || (element.symbol.toLowerCase() === val.toLowerCase()));
        })
        filtere.map((element) => {
              
            let items = document.createElement('tr');
                            items.className = 'items'
                            items.innerHTML = `
                            <div class="item1">
                               <img src=${element.image} alt="" srcset="">
                               <h3>${element.name}</h3>
                            </div>
                            <div class="item2">
                                ${element.symbol}
                            </div>
                            <div class="item3">
                                $${element.current_price}
                            </div>
                            <div class="item4">
                                $${element.total_volume}
                            </div>
                            <div class="item5">
                                ${element.price_change_percentage_24h}%
                            </div>
                            <div class="item6">
                                 Mkt Cap:${element.market_cap}
                            </div>
                                      `
            data_div.appendChild(items);

        })
})



//here we are attaching addEventListener to the event to search values by market cap
sort_mkt_cap.addEventListener('input',(event) => {

    if(search_name_symbol.value === "" && sort_mkt_cap.value === "" && sort_percentage.value === ""){
        console.log("hello")
        myFUnc();
    }


    let val = event.target.value;
    data_div.innerHTML = "";
    let filtere = response.filter((element) => {
        return (element.marketCap.toString() === val.toString());
    })
   
    filtere.map((element) => {
              
        let items = document.createElement('tr');
                        items.className = 'items'
                        items.innerHTML = `
                        <td class="item1">
                           <img src=${element.image} alt="" srcset="">
                           <h3>${element.name}</h3>
                        </td>
                        <td class="item2">
                            ${element.symbol}
                        </td>
                        <td class="item3">
                            $${element.current_price}
                        </td>
                        <td class="item4">
                            $${element.total_volume}
                        </td>
                        <td class="item5">
                            ${element.price_change_percentage_24h}%
                        </td>
                        <td class="item6">
                             Mkt Cap:${element.market_cap}
                        </td>
                                  `
        data_div.appendChild(items);

    })
    
})



//here we are attaching addEventListener to the event to search values by percentage
sort_percentage.addEventListener('input',(event) => {

    if(search_name_symbol.value === "" && sort_mkt_cap.value === "" && sort_percentage.value === ""){
        console.log("hello")
        myFUnc();
    }

    let val = event.target.value;
    data_div.innerHTML = "";
    let filtere = response.filter((element) => {
        return (element.percentageChange.toString() === val.toString());
    })

    filtere.map((element) => {
              
        let items = document.createElement('tr');
                        items.className = 'items'
                        items.innerHTML = `
                        <td class="item1">
                           <img src=${element.image} alt="" srcset="">
                           <h3>${element.name}</h3>
                        </td>
                        <td class="item2">
                            ${element.symbol}
                        </td>
                        <td class="item3">
                            $${element.current_price}
                        </td>
                        <td class="item4">
                            $${element.total_volume}
                        </td>
                        <td class="item5">
                            ${element.price_change_percentage_24h}%
                        </td>
                        <td class="item6">
                             Mkt Cap:${element.market_cap}
                        </td>
                                  `
        data_div.appendChild(items);

    })

   
})


myFUnc();