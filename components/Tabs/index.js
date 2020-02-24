// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


 axios.get('https://lambda-times-backend.herokuapp.com/topics')
   .then(topics => { 
    //    const dataTop = topics.data;
        console.log(topics.data.topics);

        const topData = topics.data.topics;

        topData.forEach((e) => {
            const tab = document.querySelector('.topics');
            tab.appendChild(Tab(e));        
        
        });
        
     })
    .catch(error => console.error(error))


    function Tab(topic) {
            const tab = document.createElement('div');
            tab.classList.add('tab');
            tab.textContent = topic;   
            
            return tab;
    }

