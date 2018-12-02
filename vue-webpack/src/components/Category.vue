<template>
    <body>
        <h1>Events:</h1>
        <h1>{{theCategory}}</h1>

        <div v-for="event in theEvents">
            <div class="column">
                <div class="card">
                    <div class="cardGrid">
                        <div class="cardGridItem">
                            <img :src='event["PictureLink"]' class="profile" style ="width:100%">
                        </div>
                        <div class="cardGridItem">
                            <div class="cardInfo">
                            <h3>{{event['Title']}}</h3>
                                <p>{{getDayOfWeek(event['Date'])}}, {{toWordMonth(event['Date'])}} {{getDay(event['Date'])}}, {{event['Times']}}</p>
                                <p>{{event['Location']}}</p>
                                <p style="line-height: 2.7vh">{{event['Description']}}</p>
                                <p>Admission Fee: {{isThereAdmissionFee(event['AdmissionFee'])}}</p>
                            </div>
                        </div>
                    </div>
                    
                    <!--
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
                    -->
                </div>
            </div>               
        </div> -->

    </body>
    
</template>

<script>
import axios from 'axios';
export default {

    data(){
        return{
        
        theCategory: this.$route.params.category,
        theEvents: [],
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

        isThereAdmissionFee: function(eventAdmFee){
            if (eventAdmFee != 0){
                return eventAdmFee
            }
            else{
                return "None"
            }
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

        toWordMonth: function(fullDate) {
            var data, month, wordedMonth
            data = this.dateParser(fullDate)
            month = data[0]
            wordedMonth = this.monthNumToWordDict[month]
            return wordedMonth
        },
    },

    mounted(){

        if (this.theCategory == "Over the Weekend"){
            
            axios('http://127.0.0.1:8000/event/weekendEvents/', {
                method: 'GET',
                mode: 'no-cors',
                headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                },
                withCredentials: false,
            }).then(response =>
                {
                    this.theEvents = response["data"]["These are all of the weekend events"]
                    console.log(this.theEvents)

                })
        }

        else if (this.theCategory == "Free"){
            
            axios('http://127.0.0.1:8000/event/freeEvents/', {
                method: 'GET',
                mode: 'no-cors',
                headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                },
                withCredentials: false,
            }).then(response =>
                {
                    this.theEvents = response["data"]["These are all of the free events"]
                    console.log(this.theEvents)

                })
        }
                 
        else{

            axios('http://127.0.0.1:8000/event/particularEvents/'+this.theCategory+"/", {
                method: 'GET',
                mode: 'no-cors',
                headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                },
                withCredentials: false,
            }).then(response =>
                {
                    this.theEvents = response["data"]["These are the events"]
                    console.log(this.theEvents)

                })

        } 

    }
}
</script>

<style scoped>
    *{ margin: 0;}
    p
    {
        margin: 2vmin;
        display: outline;
        font-size: 2.3vmin;
        font-family: 'Gotham A', 'Gotham B', sans-serif;
        text-decoration: none;
        font-weight: normal;
        color: white;
        text-align: left;
        line-height: 1.5vh;
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
        text-align: center;
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
        height: 100%;
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
        width: 41vw;
        height: 25vh;
        margin-bottom: 1vh;
        padding: 1.5vw;
        padding-bottom: 5vmin;
        /*background-color: black;*/
        /*background-size: 100% 100%;*/
    }
    
    .card 
    {
        /*background: black;*/
        border: 10px white;
        height: 100%;
    }

    .card img {
        height: 100%;
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

    .cardGrid{
        display: grid;
        grid-template-columns: 40% 60%;
        height: 100%;
    }
    .cardGrid:hover{
        box-shadow: 0em 0.3em 4.0em 0.1em rgb(238, 199, 73);
    }
    .cardGridItem{
        background-color: black;
    }
    .cardGridItem h1{
        padding: 0.2em;
        padding-left: 1.0vw;
        font-size: 4.5vmin;
        text-align: center;
        color: #ffd61e;
        float: bottom;
    }
    .cardGridItem h3 {
        font-size: 3.2vmin;
        color: #ffd61e;
        padding: 0.2em;
    }
    .cardGridItem img{
        background-size: cover;
        background-color: black;
        object-fit: cover;
        padding: 0;
        margin: 0;
    }
    .cardInfo{
        padding: 0.2em;
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
        height: 100%;
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
        height: 100%;
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