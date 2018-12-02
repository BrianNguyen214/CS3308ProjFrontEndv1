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
    
    img
    {
        width: 100%;
        height: 100%;
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

@media screen and (max-width: 450px) 
{

}
</style>