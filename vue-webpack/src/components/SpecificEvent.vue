<template>
    <body>

        <div class="theGrid">
            <div class="theGridItem">
                <h1>{{theEventTitle}}</h1>
                
                <div class="info">
                    <div class="infoTitle">
                        <p>Date and Times:</p>
                    </div>
                    <div class="infoData">
                        <p>{{getDayOfWeek(theEvent['Date'])}}, {{toWordMonth(theEvent['Date'])}} {{getDay(theEvent['Date'])}} {{theEvent['Times']}}</p>
                    </div>
                </div>

                <div class="info">
                    <div class="infoTitle">
                        <p>Location:</p>
                    </div>
                    <div class="infoData">
                        <p>{{theEvent['Location']}}</p>
                    </div>
                </div>

                <div class="info">
                    <div class="infoTitle">
                        <p>Age Restriction:</p>
                    </div>
                    <div class="infoData">
                        <p>{{isThereAgeRestriction(theEvent['AgeRestriction'])}}</p>
                    </div>
                </div>

                <div class="info">
                    <div class="infoTitle">
                        <p>Admission Fee:</p>
                    </div>
                    <div class="infoData">
                        <p>{{isThereAdmissionFee(theEvent['AdmissionFee'])}}</p>
                    </div>
                </div>
                
                <div class="info">
                    <a :href="theEvent['WebsiteLink']" target="blank">visit website</a>
                </div>
                
                <p>{{theEvent['Description']}}</p>

            </div>
            <div class="theGridItem">
                <img :src='theEvent["PictureLink"]' class="profile" style ="width:100%">
            </div>
        </div>

    </body>
    
</template>

<script>
import axios from 'axios';
export default {

    data(){
        return{

        theEventTitle: this.$route.params.eventTitle,
        theEvent: null,
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
            0: "Sunday",
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday"
        }

        }
    },

    methods: {

        isThereAgeRestriction: function(ageRestrict){
            if (ageRestrict != 0){
                if (ageRestrict > 1){
                    return ("must be at least " + ageRestrict + " years old")
                }
                else{
                    return ("must be at least 1 year old")
                }
            }
            else{
                return "None"
            }
        },

        isThereAdmissionFee: function(eventAdmFee){
            if (eventAdmFee != 0){
                return ("$" + eventAdmFee)
            }
            else{
                return "None"
            }
        },

        getDayOfWeek: function(fullDate){
            var wordedDayOfWeek
            var theDateOfWeek = new Date(fullDate)
            wordedDayOfWeek = this.numDayOfWeekDict[theDateOfWeek.getDay()]
            //console.log(wordedDayOfWeek)
            return wordedDayOfWeek
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
    },

    mounted(){
        console.log("this is the title")
        console.log(this.theEventTitle)
        axios('http://127.0.0.1:8000/event/specificEvent/'+this.$route.params.eventTitle+"/", {
            method: 'GET',
            mode: 'no-cors',
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            },
            withCredentials: false,
        }).then(response =>
            {
                this.theEvent = response["data"]["Here's the specific event"]
                //console.log(this.theEvent["Title"])

            })
    }
}
</script>

<style scoped>
    *{ margin: 0;}

    .info {
        margin-bottom: 2.2vh;
    }

    .infoTitle p{
        color: white;
    }

    a {
        display: outline;
        font-size: 3.7vmin;
        font-family: 'Gotham A', 'Gotham B', sans-serif;
        text-decoration: none;
        font-weight: normal;
        color: #ff5722;
        text-align: left;
        line-height: 1.5em;
    }
    a:hover {
        text-decoration: underline;
        font-weight: normal;
        color: #682511;
    }
    p
    {
        display: outline;
        font-size: 3.7vmin;
        font-family: 'Gotham A', 'Gotham B', sans-serif;
        text-decoration: none;
        font-weight: normal;
        color: white;
        text-align: left;
        line-height: 1.3em;
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
    
    img
    {
        width: 100%;
        height: 50vmin;
    }

    .theGrid {
        display: grid;
        grid-template-columns: 40% 60%;
        padding: 10px;
        padding-top: 5vh;
        padding-bottom: 0;
        width: 95%;
    }
    .theGridItem h1 {
        padding: 30px;
        padding-left: 30px;
        font-size: 4.5vmin;
        text-align: left;
        color: #ffd61e;
        float: float;
        display: flex;
    }
    .theGridItem img {
        padding: 2em;
    }

@media screen and (max-width: 450px) 
{

}
</style>