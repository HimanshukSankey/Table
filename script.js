let tableBody = document.getElementById('tableBody');



const createTable = (data)=>{
    //Map Method to itterate over the elements of Data
    const tableRows = data.map(item=>{
        return `<tr class="dataRow"><td>${item.id}</td>
        <td>${item.todo}</td>
        <td>${item.completed}</td>
        <td>${item.userId}</td></tr>
        `
    }
)

// To remove " ," and combine the data
let tableRowsJoinString = tableRows.join('');
// Add to innerHTML of tableBody which is <tbody></tbody>
tableBody.innerHTML += tableRowsJoinString
}



//Get the Data from API using Async Await
const getData = async()=>{
    try {
        let result = await fetch('https://dummyjson.com/todos')

        if(!result.ok){
            throw new Error("Network Response Error")
        }
        let data = await  result.json()
        
        let item = data.todos
        console.log({list: {item}})

        //Calling createtable()
        createTable(item);
    } catch (error) {
        console.log(error)
    }
}

//On Pageload
window.onload = getData()