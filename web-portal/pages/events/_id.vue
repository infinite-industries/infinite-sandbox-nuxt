<template>
<div style="margin-top: 20px;">
  <div class="container event">
    <div class="event-heading">
      <img :src="event.image" width="100%" height="auto" />
      <div class="event-heading-text">
        <h1>{{ event.title }}</h1>
        <h3>{{ event.venue.name }}</h3>
      </div>
    </div>

    <div class="event-time-actions">
      <div class="event-time">
        <div>
          <div v-for= "dateTime in event.date_times" :key="dateTime.start_time" class="date-time-container">
            <em>{{dateTime.start_time}}</em>
            <br />
            <em>{{dateTime.end_time}}</em>
          </div>
        </div>
      </div>
      <div class="event-actions">

        <div class="event-actions-content">
          <button id="calMenu" class="infinite-dropdown ii-social-button add-event-to-cal dropbtn" aria-expanded="false">
            <i class="fas fa-calendar-alt ii-social-icon"></i>
            <span>Add to Calendar</span>
            <div id="calDropdown" class="infinite-dropdown-content calendar-dropdown">
              <a href='javascript:addToCalendar(0)'>iCal</a>
              <a href='javascript:addToCalendar(1)'>Outlook</a>
              <a href='javascript:addToCalendar(2)'>Google Cal</a>
            </div>
          </button>

          <a v-if="event.map_link && event.map_link !== ''" class="ii-social-button map-event" target="_blank" :href="event.venue.g_map_link">
            <i class="fas fa-map-marker-alt ii-social-icon"></i>
            <span>Directions</span>
          </a>

          <button id="shareMenu" class="infinite-dropdown ii-social-button share-event dropbtn" aria-expanded="false">
            <i class="fas fa-share ii-social-icon"></i>
            <span>Share</span>
            <div id="shareDropdown" class="infinite-dropdown-content social-dropdown">
              <a class="ii-social-button" target="_new" :href="'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Finfinite.industries%2Fevent%2F' + event.id">
                <i class="fab fa-facebook-square ii-social-icon"></i>
                <span>Share</span>
              </a>
              <a class="ii-social-button" target="_new" :href="'https://twitter.com/intent/tweet?text=Check%20out%20this%20event:&url=' + event.bitly_link">
                <i class="fab fa-twitter ii-social-icon"></i>
                <span>Tweet</span>
              </a>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Admission Fee -->
    <div class="event-description">
      <div v-if="event.hasOwnProperty('admission_fee') && event.admission_fee !== 'none'" class="row event-admission-fee">
        <div class="col s11">
          <em>Admission Fee: {{event.admission_fee}}</em>
        </div>
      </div>
      <div v-else>
        <div class="col s11">
          <em>Admission Fee: Free</em>
        </div>
      </div>

      <div class="row event-description-content">
        <div class="col s11">
          {{ event.description }}
        </div>
      </div>

      <!-- Website Link -->
      <div v-if="event.website_link && event.website_link !== 'none'" class="row event-website">
        <div class="col s11">
          <a :href="event.website_link" target="_new">Event Website</a>
        </div>
      </div>
      <!-- end end Website Link -->

      <!-- Facebook Link -->
      <div v-if="event.fb_event_link && event.fb_event_link !== 'none'" class="row event-fb-link">
        <div class="col s11">
          <a :href="event.fb_event_link" target="_new">Facebook Event Link</a>
        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Event',
  asyncData({ params }) {
    return axios.get(`http://localhost:3003/events/${params.id}`)
      .then((res) => {
        console.log('go data:', res.data)
        return { event: res.data.event }
      }).catch((err) => {
        console.error('error getting event:', err)
      })
  },
  head () {
    return {
      title: 'Infinite Industries: Event - ' + (this.event ? this.event.title : 'no event loaded'),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.event ? this.event.brief_description : 'Lexington KY Infinite Industries Event'
        }
      ]
    }
  }
}
</script>
