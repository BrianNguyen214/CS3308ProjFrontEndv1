<template>
	<div id="app" v-bind:style="{ backgroundColor: black}">
        <div class="dropdown">
            <div id="searchBox">
                <input onclick="myFunction()" type="text" placeholder="Search for an event" id="myInput" onkeyup="filterFunction()">
            </div>

            <div id="myDropdown" class="dropdown-content">
                <a href="#holder">Over the Weekend</a>
                <a href="#holder">Music</a>
                <a href="#holder">Art and Performances</a>
                <a href="#holder">Health and Fitness</a>
                <a href="#holder">Food and Drink</a>
                <a href="#holder">Free</a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {

    data(){
        return{
        }
    },

    methods: {
        myFunction: function() {
            document.getElementById("myDropdown").classList.toggle("show");
        },
        
        filterFunction: function() {
            var input, filter, ul, li, a, i;
            input = document.getElementById("myInput");
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
        }
    },

    mounted(){

    }
}
</script>

<style scoped>

    body{
        margin: 0px auto;
        box-sizing: border-box;
        background-color: rgb(51, 48, 48);
    }

    .searchBox {
        margin-left: 60%;
    }

    .dropdown {
        position: relative;
        display: inline-block;
        margin-left: 60vw;
    }
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #ffd61e;
        width: 421px;
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

</style>
