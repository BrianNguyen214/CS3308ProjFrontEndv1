<template>

    <GmapMap
    ref="mapRef"
    :center="{lat: theLat, lng: theLong}"
    :zoom="15"
    map-type-id="terrain"
    style="width: 500px; height: 300px"
    >
    <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
    />
    <GmapMarker
    ref="myMarker"
    :position="google && new google.maps.LatLng(theLat, theLong)"
    />
    </GmapMap>

</template>

<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxAdVBUs_u8HCB_-EWtf0cIINF7fKOgzg&callback=initMap">
</script> 

<script src="https://maps.googleapis.com/maps/api/js?sensor=false&callback=initMap" async defer></script>

<script>
import axios from 'axios';
import {gmapApi} from 'vue2-google-maps';
export default {
    data() {
        return {
            theLat: 40.008054,
            theLong: -105.276381,
        }
    },
    mounted: function() {
        this.map = this.$refs.map.$mapObject;
        this.$refs.map.$mapCreated.then(() => {
                            this.mapLoaded=true
        })
        this.initMap();
        this.$refs.mapRef.$mapPromise.then((map) => {
            map.panTo({lat: 40.008054, lng: -105.276381})
        })

        //var geocoder = require('geocoder');
 
        // Geocoding
        /*
        geocoder.geocode("Atlanta, GA", function ( err, data ) {
            console.log(data)
        });*/
    },
    methods: {
        initMap: function() {
            this.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 40.008054, lng: -105.276381},
            scrollwheel: false,
            zoom: 4
            })
        }
    },
    computed: {
        google: gmapApi
    }
}
</script>

<style scoped>
    *{ margin: 0;}

    #map {height:300px;width:500px;}

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
        height: 66vh;
    }

@media screen and (max-width: 450px) 
{

}
</style>