let search_name_symbol = document.getElementById('search_name_symbol');
let sort_mkt_cap = document.getElementById('sort_mkt_cap');
let sort_percentage = document.getElementById('sort_percentage');

let data_div = document.getElementById('data');
let response = [];
let response_with_name_symbol = [];

//function to load data initially

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    .then(response => response.json())
    .then((res) => {
        response = res.map((element) => {


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

             let ojb = {
                image:element.image,
                name:element.name,
                symbol:element.symbol,
                currentPrice:element.current_price,
                marketCap:element.market_cap,
                percentageChange:element.market_cap_change_percentage_24h,
                totalVolume:element.total_volume
             }
             return ojb;
        })
    }).catch(err => {
        console.log(err)
})






//here we are attaching addEventListener to the event to search values by name or symbol
search_name_symbol.addEventListener('input',(event)=>{
    event.preventDefault();    
        let val = event.target.value;
        // console.log(val)
        data_div.innerHTML = "";
        let filtere = response.filter((element) => {
            return ((element.name.toLowerCase() === val.toLowerCase()) || (element.symbol.toLowerCase() === val.toLowerCase()));
        })
        response_with_name_symbol = [...filtere]
        console.log(response_with_name_symbol)
        response_with_name_symbol.map((element) => {
              
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
                                $${element.currentPrice}
                            </div>
                            <div class="item4">
                                $${element.totalVolume}
                            </div>
                            <div class="item5">
                                ${element.percentageChange}%
                            </div>
                            <div class="item6">
                                 Mkt Cap:${element.marketCap}
                            </div>
                                      `
            data_div.appendChild(items);

        })

        if(search_name_symbol.value === ""){
            window.location.reload();
        }
})






//here we are attaching addEventListener to the event to search values by market cap
sort_mkt_cap.addEventListener('click',(event) => {

    data_div.innerHTML = "";
    // let filtere = response.filter((element) => {
    //     return (element.marketCap.toString() === val.toString());
    // })
    
    if(search_name_symbol.value !== ""){
          filter = [...response_with_name_symbol]
    }
    else{
        filter = [...response]
    }
    filter.sort((a,b) => a.marketCap - b.marketCap);
    
   
    filter.map((element) => {
              
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
                            $${element.currentPrice}
                        </td>
                        <td class="item4">
                            $${element.totalVolume}
                        </td>
                        <td class="item5">
                            ${element.percentageChange}%
                        </td>
                        <td class="item6">
                             Mkt Cap:${element.marketCap}
                        </td>
                                  `
        data_div.appendChild(items);

    })

    
    
})





//here we are attaching addEventListener to the event to search values by percentage
sort_percentage.addEventListener('click',(event) => {
    data_div.innerHTML = "";
    if(search_name_symbol.value !== ""){
        filter = [...response_with_name_symbol]
  }
  else{
      filter = [...response]
  }
    filter.sort((a,b) => a.percentageChange - b.percentageChange);
    console.log(filter);
    filter.map((element) => {
              
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
                            $${element.currentPrice}
                        </td>
                        <td class="item4">
                            $${element.totalVolume}
                        </td>
                        <td class="item5">
                            ${element.percentageChange}%
                        </td>
                        <td class="item6">
                             Mkt Cap:${element.marketCap}
                        </td>
                                  `
        data_div.appendChild(items);

    })
   
   
})
