<template>
  <div>
    <div class="welcome flex justify-center items-center">
      <div class="text-center text-white">
        <h4 class="text-4xl font-light">Welcome to</h4>
        <h1 class="text-7xl font-extrabold tracking-wide">Christ Embassy</h1>
        <h3 class="text-5xl font-light">Grace Light</h3>
        <p class="text-2xl my-5">7 Sanuaje Street Alapere, Ketu, Lagos</p>
      </div>
    </div>
    <div class="min-h-screen py-14 bg-gray-100 px-5 md:px-10 lg:px-14">
      <h2 class="text-4xl font-bold text-gray-800 text-center mb-10">
        SUNDAY SERVICES
      </h2>
      <div class="bg-white mb-5 shadow-md rounded overflow-hidden">
        <div class="bg-red-500 px-5 py-3">
          <h3 class="text-red-50">Teens & Youths</h3>
        </div>
        <div class="p-5">
          <div class="md:flex md:items-start">
            <img
              class="md:w-1/4 rounded shadow-md mr-4"
              src="../static/gracelight_teens.jpeg"
              alt="teens church picture"
            />
            <div>
              <p class="my-2 text-gray-500">
                Join our teens and youth service as they praise and worship God
                in their uniqueness and vibrance. You can join their dance,
                drama or recitation group as long as you are a teenager or a
                young adult. We look forward to seeing you.
              </p>
              <p class="my-4 font-thin text-2xl text-gray-800">
                8:00AM - 9:30AM
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white mb-5 shadow-md rounded overflow-hidden">
        <div class="bg-blue-500 px-5 py-3">
          <h3 class="text-blue-50">Adults</h3>
        </div>
        <div class="p-5">
          <div class="md:flex md:items-start">
            <img
              class="md:w-1/4 rounded shadow-md mr-4"
              src="../static/gracelight.jpeg"
              alt="teens church picture"
            />
            <div>
              <p class="my-2 text-gray-500">
                Our adult service starts after the teens and youth service. We
                go in-depth into the Word of God. We also have different cells
                where members are expected to be a part of. In our cells we can
                ask questions and understand better what was taught in church.
              </p>
              <p class="my-4 font-thin text-2xl text-gray-800">
                10:00AM - 11:45AM
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 class="text-4xl font-bold text-gray-800 text-center my-10">
        OTHER MEETINGS
      </h2>
      <div class="bg-white mb-5 p-5 shadow-md rounded overflow-hidden">
        <h3 class="text-green-500 text-2xl font-light">Mid-Week Service</h3>
        <div>
          <p class="my-2 text-gray-500">
            We meet within the week to get more insight on the things which were
            taught in Sunday services.This service is for adults, young adults
            and teenagers also. You can connect with us online if you cannot
            make it to church in the evening.
          </p>
          <div class="my-4 font-thin text-2xl text-gray-800">
            <p>Wednesday</p>
            <p>6:30PM - 8:00PM</p>
          </div>
        </div>
      </div>
      <div class="bg-white mb-5 p-5 shadow-md rounded overflow-hidden">
        <h3 class="text-green-500 text-2xl font-light">Morning Prayer</h3>
        <div>
          <p class="my-2 text-gray-500">
            As a church we pray every morning on week days for our members,
            family, children and so much more. The exercise of prayer helps us
            through the day as we go about our various businesses of the day.
            This meeting holds online.
          </p>
          <div class="my-4 font-thin text-2xl text-gray-800">
            <p>Week days (Online)</p>
            <p>5:30AM - 6:00AM</p>
          </div>
        </div>
      </div>
    </div>
    <footer class="p-5 bg-gray-800 text-gray-50 text-center">
      &copy; 2022 Christ Embassy Gracelight
    </footer>
  </div>
</template>

<script>
// import { HTTP } from "../helpers/axios/http-common";

export default {
  data: () => {
    return {};
  },

  /*created() {
    HTTP.get(`cells`).then((response) => {
      console.log(response.data);
      this.cells = response.data;
    });
  },*/
};
</script>

<style scoped>
.welcome {
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgb(209, 53, 49, 0.8)),
    url("../static/pastor_chris.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
