<template>
    <body>
        <div id="app">
            
            <div class="dropdown">
                <div id="searchBox">
                    <input v-on:click="myFunction" type="text" placeholder="Search for an event" id="myInput" v-on:keyup="filterFunction">
                </div>

                <div id="myDropdown" class="dropdown-content">
                    <a v-on:click="goToCategory(categoriesOfEvents[0])">Over the Weekend</a>
                    <a v-on:click="goToCategory(categoriesOfEvents[1])">Music</a>
                    <a v-on:click="goToCategory(categoriesOfEvents[2])">Art and Performances</a>
                    <a v-on:click="goToCategory(categoriesOfEvents[3])">Health and Fitness</a>
                    <a v-on:click="goToCategory(categoriesOfEvents[4])">Food and Drink</a>
                    <a v-on:click="goToCategory(categoriesOfEvents[5])">Free</a>
                </div>
            </div>

            <div class="title">
                <div class="logo">
                    <h1 style="color: white; font-size: 5vh; padding-left: 2vw;">Monday Blues</h1>
                </div>
                <h1>Upcoming Events in Boulder</h1>
            </div>

        </div>

            <div class="openingSectionGrid">
                <div class="openingSecGItem">
                    <h1>Participate in the exciting events, build new relationships, or try out interesting activites around Boulder</h1>
                </div>
                <div class="openingSecGItem">
                    <img src="https://cdn-images-1.medium.com/max/1554/0*kIvi9mTnSxkdw9GQ.jpg">
                </div>
            </div>

        <div class='eventSectionFirst'>
            <div class="eventSecHeaderGrid">
                <div class="eventSHGITitle">
                    <h1 v-if="weekendEvents.length">Events Over the Weekend</h1>
                </div>
                <div class="eventSHGISeeMore">
                    <a href="#" v-if="weekendEvents.length">View more</a>
                </div>
            </div>

            <div v-for="event in weekendEvents">
                <div class="column">
                    <div class="card">
                        <img :src='event["PictureLink"]' class="profile" style ="width:100%">
                        <div id="eventInfoGrid">
                            <div class="eventGridItem">
                                <h1 style="text-align: center">{{toWordMonth(event['Date'])}} {{getDay(event['Date'])}}</h1>
                            </div>      
                            <div class="eventGridItem">
                                <h3>{{event['Title']}}</h3>
                                <p>{{getDayOfWeek(event['Date'])}}, {{toWordMonth(event['Date'])}} {{getDay(event['Date'])}}, {{event['Times']}}</p>
                                <p>{{event['Location']}}</p>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>

        </div>


        <div class='eventSection'>
            <div class="eventSecHeaderGrid">
                <div class="eventSHGITitle">
                    <h1 v-if="musicEvents.length">Music</h1>
                </div>
                <div class="eventSHGISeeMore">
                    <a href="#" v-if="musicEvents.length">View more</a>
                </div>
            </div>

            <div v-for="event in musicEvents">
                <div class="column">
                    <div class="card">
                        <img :src='event["PictureLink"]' class="profile" style ="width:100%">
                        <div id="eventInfoGrid">
                            <div class="eventGridItem">
                                <h1 style="text-align: center">{{toWordMonth(event['Date'])}} {{getDay(event['Date'])}}</h1>
                            </div>      
                            <div class="eventGridItem">
                                <h3>{{event['Title']}}</h3>
                                <p>{{getDayOfWeek(event['Date'])}}, {{toWordMonth(event['Date'])}} {{getDay(event['Date'])}}, {{event['Times']}}</p>
                                <p>{{event['Location']}}</p>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
    
        </div>

        <div class='eventSection'>
            <div class="eventSecHeaderGrid">
                <div class="eventSHGITitle">
                    <h1 v-if="artAndPerfEvents.length">Art and Performances</h1>
                </div>
                <div class="eventSHGISeeMore">
                    <a href="#" v-if="artAndPerfEvents.length">View more</a>
                </div>
            </div>

            <div v-for="event in artAndPerfEvents">
                <div class="column">
                    <div class="card">
                        <img :src='event["PictureLink"]' class="profile" style ="width:100%">
                        <div id="eventInfoGrid">
                            <div class="eventGridItem">
                                <h1 style="text-align: center">{{toWordMonth(event['Date'])}} {{getDay(event['Date'])}}</h1>
                            </div>      
                            <div class="eventGridItem">
                                <h3>{{event['Title']}}</h3>
                                <p>{{getDayOfWeek(event['Date'])}}, {{toWordMonth(event['Date'])}} {{getDay(event['Date'])}}, {{event['Times']}}</p>
                                <p>{{event['Location']}}</p>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>

        </div>

        <div class='eventSection'>
            <div class="eventSecHeaderGrid">
                <div class="eventSHGITitle">
                    <h1 v-if="healthAndFitEvents.length">Health and Fitness</h1>
                </div>
                <div class="eventSHGISeeMore">
                    <a href="#" v-if="healthAndFitEvents.length">View more</a>
                </div>
            </div>

            <div v-for="event in healthAndFitEvents">
                <div class="column">
                    <div class="card">
                        <img :src='event["PictureLink"]' class="profile" style ="width:100%">
                        <div id="eventInfoGrid">
                            <div class="eventGridItem">
                                <h1 style="text-align: center">{{toWordMonth(event['Date'])}} {{getDay(event['Date'])}}</h1>
                            </div>      
                            <div class="eventGridItem">
                                <h3>{{event['Title']}}</h3>
                                <p>{{getDayOfWeek(event['Date'])}}, {{toWordMonth(event['Date'])}} {{getDay(event['Date'])}}, {{event['Times']}}</p>
                                <p>{{event['Location']}}</p>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
    
        </div>

        <div class='eventSection'>
            <div class="eventSecHeaderGrid">
                <div class="eventSHGITitle">
                    <h1 v-if="foodAndDrinkEvents.length">Food and Drink</h1>
                </div>
                <div class="eventSHGISeeMore">
                    <a href="#" v-if="foodAndDrinkEvents.length">View more</a>
                </div>
            </div>

            <div v-for="event in foodAndDrinkEvents">
                <div class="column">
                    <div class="card">
                        <img :src='event["PictureLink"]' class="profile" style ="width:100%">
                        <div id="eventInfoGrid">
                            <div class="eventGridItem">
                                <h1 style="text-align: center">{{toWordMonth(event['Date'])}} {{getDay(event['Date'])}}</h1>
                            </div>      
                            <div class="eventGridItem">
                                <h3>{{event['Title']}}</h3>
                                <p>{{getDayOfWeek(event['Date'])}}, {{toWordMonth(event['Date'])}} {{getDay(event['Date'])}}, {{event['Times']}}</p>
                                <p>{{event['Location']}}</p>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
    
        </div>

        <div class='eventSection'>
            <div class="eventSecHeaderGrid">
                <div class="eventSHGITitle">
                    <h1 v-if="freeEvents.length">Free</h1>
                </div>
                <div class="eventSHGISeeMore">
                    <a href="#" v-if="freeEvents.length">View more</a>
                </div>
            </div>

            <div v-for="event in freeEvents">
                <div class="column">
                    <div class="card">
                        <img :src='event["PictureLink"]' class="profile" style ="width:100%">
                        <div id="eventInfoGrid">
                            <div class="eventGridItem">
                                <h1 style="text-align: center">{{toWordMonth(event['Date'])}} {{getDay(event['Date'])}}</h1>
                            </div>      
                            <div class="eventGridItem">
                                <h3>{{event['Title']}}</h3>
                                <p>{{getDayOfWeek(event['Date'])}}, {{toWordMonth(event['Date'])}} {{getDay(event['Date'])}}, {{event['Times']}}</p>
                                <p>{{event['Location']}}</p>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
    
        </div>

    </body>
    
</template>

<script>
import axios from 'axios';
export default {

    data(){
        return{
            //all of these lists will only contain the top three
            musicEvents: [],
            artAndPerfEvents: [],
            healthAndFitEvents: [],
            foodAndDrinkEvents: [],
            weekendEvents: [],
            freeEvents: [],
            listTest: [1,2,3],
            categoriesOfEvents: ['Over the Weekend', 'Music', 'Art and Performances', 'Health and Fitness', 'Food and Drink', 'Free'],
            url: 'http://127.0.0.1:8000/event/allEvents/',
            monthDayDict: {
                1: 31,
                2: 28,
                3: 31,
                4: 30,
                5: 31,
                6: 30,
                7: 31,
                8: 31,
                9: 30,
                10: 31,
                11: 30,
                12: 31
            },
            monthNumToWordDict: {
                1: "Jan",
                2: "Feb",
                3: "Mar",
                4: "Apr",
                5: "May",
                6: "Jun",
                7: "Jul",
                8: "Aug",
                9: "Sep",
                10: "Oct",
                11: "Nov",
                12: "Dec"
            },
            numDayOfWeekDict: {
                0: "Sun",
                1: "Mon",
                2: "Tues",
                3: "Wed",
                4: "Thur",
                5: "Fri",
                6: "Sat"
            }
        }
    },

    methods: {

        goToCategory: function(theCategory) {
            console.log(theCategory)
            this.$router.push({name: 'category', params: { category: theCategory}})
        },

        toWordMonth: function(fullDate) {
            var data, month, wordedMonth
            data = this.dateParser(fullDate)
            month = data[0]
            wordedMonth = this.monthNumToWordDict[month]
            return wordedMonth
        },

        getDay: function(fullDate){
            var data, day
            data = this.dateParser(fullDate)
            day = data[1]
            return day
        },

        getDayOfWeek: function(fullDate){
            var wordedDayOfWeek
            var theDateOfWeek = new Date(fullDate)
            wordedDayOfWeek = this.numDayOfWeekDict[theDateOfWeek.getDay()]
            //console.log(wordedDayOfWeek)
            return wordedDayOfWeek
        },

        myFunction: function() {
            var x
            x = document.getElementById("myDropdown").classList.toggle("show");
            //console.log(x)
        },
        
        filterFunction: function(dd) {
            var input, filter, ul, li, a, i, div;
            input = document.getElementById("myInput");
            //console.log(input)
            filter = input.value.toUpperCase();
            div = document.getElementById("myDropdown");
            a = div.getElementsByTagName("a");
            for (i = 0; i < a.length; i++) {
                if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                    a[i].style.display = "";
                } else {
                    a[i].style.display = "none";
                }
            }
        },

        weekendDaysCalculator: function(currMonth, currDayOfWeek, currDayNum, currYear){
            //console.log(currMonth)
            //console.log(currDayOfWeek)
            //console.log(currDayNum)
            //console.log(currYear)
            
            var numDaysAwaySat, numDaysAwaySun, totalNumDaysOfMonth, i, newMonth, newYear;
            numDaysAwaySat = 6-currDayOfWeek;
            numDaysAwaySun = 7-currDayOfWeek;
            newMonth = currMonth;
            newYear = currYear
            totalNumDaysOfMonth = this.monthDayDict[currMonth];
            //console.log(totalNumDaysOfMonth)
            var SatMonth, SatDay, SatYear;
            var SunMonth, SunDay, SunYear;
            for (i = 0; i < numDaysAwaySun+1; i++){
                if (currDayNum == totalNumDaysOfMonth){
                    currDayNum = 1;
                    newMonth = newMonth + 1;
                    if (newMonth == 13){
                        newMonth = 1;
                        newYear = newYear + 1
                        if (newYear == 100){
                            newYear = "00";
                        }
                    }
                }
                if (currDayOfWeek == 6){
                    SatMonth = newMonth
                    SatDay = currDayNum
                    SatYear = newYear
                }
                if (currDayOfWeek == 0){
                    SunMonth = newMonth
                    SunDay = currDayNum
                    SunYear = newYear
                }
                else {
                    currDayNum = currDayNum + 1
                    currDayOfWeek = currDayOfWeek + 1
                    if (currDayOfWeek == 7){
                        currDayOfWeek = 0
                    }
                }
            }
            /*
            console.log(SatMonth)
            console.log(SatDay)
            console.log(SatYear)
            console.log(SunMonth)
            console.log(SunDay)
            console.log(SunYear) */
            return [SatMonth.toString(), SatDay.toString(), SatYear.toString(), SunMonth.toString(), SunDay.toString(), SunYear.toString()]
        },

        dateParser: function(theDate){
            var begin, end, data, i, substringer;
            begin = 0
            data = []
            for (i = 0; i < theDate.length; i++){
                //console.log(theDate[i])
                if (theDate[i] == "-"){
                    //console.log("found dash")
                    substringer = theDate.toString().substring(begin, i)
                    begin = i+1
                    data.push(substringer)
                }
            }
            substringer = theDate.toString().substring(begin, theDate.length)
            data.push(substringer)
            //console.log(data)
            return data
        },

        eventListPlacer: function(theEvents) {
            var currDate = new Date();
            //console.log(currDate);
            var dd = currDate.getDate();
            //console.log(dd);
            var mm = currDate.getMonth()+1; //janurary is 0 but add 1 to make january 1, february 2, and so on
            //console.log(mm)
            var yyyy = currDate.getFullYear();
            //console.log(yyyy)
            var dayOfWeek = currDate.getDay(); //sunday is 0
            //console.log(dayOfWeek)
            var lastTwoDigitsYear = yyyy.toString().substr(2,4);
            //console.log(lastTwoDigitsYear)
            var isWeekend = dayOfWeek%6==0;
            //console.log(isWeekend)
            var weekendDateData = this.weekendDaysCalculator(mm, dayOfWeek, dd, lastTwoDigitsYear)
            //weekendDateData[0] is month of Saturday
            //weekendDateData[1] is day of Saturday
            //weekendDateData[2] is year of Saturday
            //weekendDateData[3] is month of Sunday
            //weekendDateData[4] is day of Sunday
            //weekendDateData[5] is year of Sunday

            var i, anEvent;
            var dateData;
            var addedToWeekendList;
            for (i = 0; i < theEvents.length; i++){
                addedToWeekendList = false;
                anEvent = theEvents[i]
                //console.log(anEvent)
                //console.log(anEvent.Category)
                //console.log(anEvent.Date)
                dateData = this.dateParser(anEvent.Date) 
                //dateData[0] = month
                //dateData[1] = day
                //dateData[2] = year

                if ((anEvent.Category == "Music") && (this.musicEvents.length < 3)){
                    this.musicEvents.push(anEvent);
                }
                if ((anEvent.Category == "Art and Performances") && (this.artAndPerfEvents.length < 4)){
                    this.artAndPerfEvents.push(anEvent);
                }
                if ((anEvent.Category == "Health and Fitness") && (this.healthAndFitEvents.length < 3)){
                    this.healthAndFitEvents.push(anEvent);
                }
                if ((anEvent.Category == "Food and Drink") && (this.foodAndDrinkEvents.length < 3)){
                    this.foodAndDrinkEvents.push(anEvent);
                }
                if ((anEvent.AdmissionFee == 0) && (this.freeEvents.length < 3)){
                    this.freeEvents.push(anEvent);
                }

                //event takes place this Saturday
                if ((dateData[0].toString() == weekendDateData[0]) && (dateData[1].toString() == weekendDateData[1]) && (dateData[2].toString() == weekendDateData[2]) && (addedToWeekendList == false) && (this.weekendEvents.length < 3)){
                    this.weekendEvents.push(anEvent);
                    addedToWeekendList = true
                }

                //event takes place this Sunday
                if ((dateData[0].toString() == weekendDateData[3]) && (dateData[1].toString() == weekendDateData[4]) && (dateData[2].toString() == weekendDateData[5]) && (addedToWeekendList == false) && (this.weekendEvents.length < 3)){
                    this.weekendEvents.push(anEvent);
                    addedToWeekendList = true
                }
                
            }
            /*
            console.log(this.musicEvents)
            console.log(this.artAndPerfEvents)
            console.log(this.healthAndFitEvents)
            console.log(this.foodAndDrinkEvents)
            console.log(this.freeEvents)
            console.log(this.weekendEvents) */
        }
    },

    mounted(){
        
        var theEvents;
        axios(this.url, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            },
            withCredentials: false,
        }).then(response =>
            {
                theEvents = response["data"]["These are all of the events"]
                this.eventListPlacer(theEvents);

            })
    }
}
</script>

<style scoped>
    *{ margin: 0;}
    p
    {
        margin: 2vmin;
        display: outline;
        font-size: 1.7vmin;
        font-family: 'Gotham A', 'Gotham B', sans-serif;
        text-decoration: none;
        font-weight: normal;
        color: white;
        text-align: center;
        line-height: 0.2em;
    }
    body {
        background-color: rgb(51, 48, 48);
        margin: 4em;
    }
    h1
    {
        font-weight: normal;
        margin-top: 2vmin;
        display: outline;
        font-size: 5vmin;
        font-family: 'Gotham A', 'Gotham B', sans-serif;
        text-decoration: none;
        color: #ffd61e;
        text-align: left;
    }
    h2
    {
        margin: 3vmin;
        display: outline;
        font-size: 5vmin;
        font-family: 'Gotham A', 'Gotham B', sans-serif;
        text-decoration: none;
        font-weight: normal;
        color: white;
        text-align: center;
    }
    h3
    {
    font-weight: normal;
    margin-top: 2vmin;
    display: outline;
    font-size: 3.0vmin;
    font-family: 'Gotham A', 'Gotham B', sans-serif;
    text-decoration: none;
    color: #ffd61e;
    text-align: center;
    }
    
    .logo h1{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color: white;
    }
    img
    {
        width: 100%;
        height: 50vmin;
    }
  
    input, select {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
                box-sizing: border-box;
    }

    .eventSectionFirst
    {
        margin: 0 3vw 0 3vw;
        width: 100%;
        text-align: center;
        float: center;
        margin-top: 2vh;
        padding: 1em;
    }
    .eventSection
    {
        margin: 0 3vw 0 3vw;
        width: 100%;
        text-align: center;
        float: center;
        margin-top: 35vh;
        padding: 1em;
        padding-top: 30vh;
    }
    
    .column 
    {
        margin: 0;
        float: left;
        width: 28%;
        height: 15%;
        margin-bottom: 1vh;
        padding: 1.5vw;
        padding-bottom: 5vmin;
    }
    
    .card 
    {
        background: black;
        border: 10px white;
    }
    .card:hover
    {
        box-shadow: 0.1em 0em 2.0em 0.2em rgb(238, 199, 73);
    }
    .card img {
        height: 35vh;
    }

    .title{
        padding: 2em;
    }

    .title h1 {
        color: #ffd61e;
        font-size: 7vmin;
        margin-left: 3.5vw;
        margin-top: 7.1vh; 
        line-height: 0;   
        position: relative;
    }

    .topGrid {
        display: grid;
        grid-template-columns: 70% 30%;
        height: 10vh;
    }

    .topSearch {
        padding-top: 3vh;
    }

    #eventInfoGrid {
        display: grid;
        grid-template-columns: 30% 70%;
        padding: 10px;
        height: 16vh;
    }
    .eventGridItem h1 {
        padding: 0.2em;
        padding-left: 1.0vw;
        font-size: 4.5vmin;
        text-align: center;
        color: #ffd61e;
        float: bottom;
    }
    .eventGridItem h3 {
        font-size: 3.2vmin;
        color: #ffd61e;
        padding: 0.2em;
    }
    .eventSecHeaderGrid{
        display: grid;
        grid-template-columns: 75% 23%;
    }

    .eventSHGITitle{
        float: right;
    }

    .eventSHGISeeMore{
        width: 100%;
    }

    .eventSHGISeeMore p{
        padding-top: 4vh;
        text-align: right;
        font-size: 2.5vmin;
        padding-right: 3vw;
    }

    .eventSHGISeeMore a{
        padding-top: 4vh;
        text-align: right;
        font-size: 2.8vmin;
        padding-right: 3vw;
        color: white;
        position: absolute;
        text-decoration: none;
    }

    .eventSHGISeeMore a:hover{
        color: #ff5722;
        text-decoration: underline;
    }

    .eventSecHeaderGrid h1 {
        font-size: 5vmin;
        color: #ffd61e;
    }
    .openingSectionGrid {
        display: grid;
        grid-template-columns: 40% 60%;
        padding: 10px;
        padding-top: 5vh;
        padding-bottom: 0;
        width: 95%;
    }
    .openingSecGItem h1 {
        padding: 30px;
        padding-left: 30px;
        font-size: 4.5vmin;
        text-align: left;
        color: white;
        float: float;
        display: flex;
    }
    .openingSecGItem img {
        padding: 2em;
    }
    #myInput {
        /*background-image: url('searchicon.png');
        background-position: 14px 12px;
        background-repeat: no-repeat; */
        font-size: 3.0vh;
        padding: 10px 10px 10px 10px;
        border: 1px solid rgb(51, 48, 48);
        width: 23vw;
        /*width: 50px;*/
        border-bottom: 1px solid #ddd;
        position: relative;
    }
    #myDropDown{
        font-size: 3.0vh;
    }
    .searchBox {
        margin-right: 10vw;
    }
    ::placeholder {
        font-family: 'Gotham A', 'Gotham B', sans-serif;
        color: rgb(51, 48, 48);
    }
    .dropdown {
        position: relative;
        display: inline-block;
        float: right;
    }
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #ffd61e;
        width: 22.8vw;
        overflow: auto;
        border: 1px solid #ddd;
        z-index: 1;
    }
    .dropdown-content a {
        color: rgb(51, 48, 48);
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        font-family: 'Gotham A', 'Gotham B', sans-serif;
        font-size: 2.7vh;
    }
    .dropdown a:hover {background-color: #ff5722;}
    .show {display: block;} 
@media screen and (max-width: 450px) 
{
    p
    {
        display: outline;
        font-size: 3.0vmin;
        font-family: 'Gotham A', 'Gotham B', sans-serif;
        text-decoration: none;
        font-weight: normal;
        color: white;
        text-align: center;
        line-height: 0.2em;
    }
    body {
        background-color: black;
        margin-right: 2vw;
        margin: 0;
    }
    h1
    {
        font-weight: normal;
        margin-top: 2vmin;
        display: outline;
        font-size: 5vmin;
        font-family: 'Gotham A', 'Gotham B', sans-serif;
        text-decoration: none;
        color: #ffd61e;
        text-align: left;
    }
    h2
    {
        margin: 3vmin;
        display: outline;
        font-size: 5vmin;
        font-family: 'Gotham A', 'Gotham B', sans-serif;
        text-decoration: none;
        font-weight: normal;
        color: white;
        text-align: center;
    }
    h3
    {
        font-weight: normal;
        margin-top: 2vmin;
        display: outline;
        font-size: 3.0vmin;
        font-family: 'Gotham A', 'Gotham B', sans-serif;
        text-decoration: none;
        color: #ffd61e;
        text-align: center;
    }
    img
    {
        width: 100%;
        height: 50vmin;
    }
    
    .eventSectionFirst
    {
        margin: 0 50px 0 50px;
        /*width: 70%; */
        text-align: center;
        float: center;
        margin-top: 10px;
        padding: 10px;
    }
    .eventSection
    {
        text-align: center;
        float: center;
        padding: 10px;
        margin: 0 50px 0 50px;
        margin-top: 650px;
        padding-top: 100px;
        padding-bottom: 400px;
    }
    
    .column 
    {
        margin: 0;
        float: left;
        height: 100px;
        margin-bottom: 1vh;
        padding: 1.5vw;
        width: 100%;
        display: block;
        padding-bottom: 46vh;
    }
    
    .card 
    {
        background: black;
        border: 10px white;
        position: absolute;
        z-index: -1;
        margin-top: 10px;
        float: center;
        max-width: 70%;
    }
    .card:hover
    {
        box-shadow: 0.1em 0em 2.0em 0.2em rgb(238, 199, 73);
    }
    .card img {
        height: 35vh;
    }
    .title h1 {
        color: #ffd61e;
        font-size: 7vmin;  
        text-align: center;
        margin: 0;
        margin-top: 5vh;
    }
    #eventInfoGrid {
        display: grid;
        grid-template-columns: 30% 70%;
        padding: 10px;
    }
    .eventGridItem h1 {
        padding: 20px;
        /*padding-left: 30px;*/
        font-size: 5vmin;
        text-align: center;
        color: #ffd61e;
    }
    .eventGridItem h3 {
        font-size: 3.5vmin;
        color: #ffd61e;
    }
    .eventSecHeaderGrid{
        display: grid;
        grid-template-columns: 80% 20%;
    }

    .eventSHGITitle{
        float: right;
    }

    .eventSHGISeeMore p{
        float: left;
        color: black;
        font-size: 20vh;
    }

    .eventSecHeaderGrid h1 {
        font-size: 5vmin;
        color: #ffd61e;
    }
    .openingSectionGrid {
        display: grid;
        grid-template-columns: 100%;
    }
    .openingSecGItem h1 {
        font-size: 3.8vmin;
        text-align: left;
        color: white;
        float: center;
        display: flex;
        padding-top: 0;
    }
}
</style>