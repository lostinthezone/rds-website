<script setup lang="ts">
</script>

<template>
  <div class="pt-8">
    <div class="flex justify-center items-center">
      <h1 class="text-4xl mb-2">Mixing</h1>
    </div>

    <h2 class="text-3xl mb-2">Beat Matching</h2>
    <p>Beatmatching is the process of adjusting the pitch of one track so it matches the pitch of another. There are a
      number
      of techniques that can be used to beatmatch two tracks.</p>

    <h3 class="text-2xl mb-2 mt-3">Pitch Riding/Bending</h3>
    <p>Pitch riding involves using just the pitch to find the pitch position. The requires listening to the two tracks
      and moving the pitch back and forth. This is similar to doing a pitch bend. The advantage of the this technique is
      it's not
      affected by record warp or belt drive turntables. Pitch scrubbing can also be used which involves moving the pitch
      quickly back and
      forth over different pitch positions until a match is found.</p>

    <h3 class="text-2xl mb-2 mt-3">Push/Slow</h3>
    <p>
      This technique involves pushing/winding the track faster on the platter and using the side of the platter or top
      of the record to slow it. This is done in conjunction with moving the pitch until the tracks are matched. The
      record can also be temporarily sped
      up by twisting the spindle with the thumb and forefinger.

      Use the time it takes for the two tunes to go from being sync to being out of sync to determine how much the pitch
      fader should be adjusted.

      The problem with this method is
      that different records have different amounts of warp so determining how much pressure to use can be tricky. Also
      this
      is hard to do on belt drives as the speed up time after slowing is too long.
    </p>

    <p class="mt-4">How to push/slow:</p>
    <ol class="list-decimal pl-10 mt-4">
      <li>Get the two tracks synchronized and listen to if it's faster or slower, if staying in sync then done</li>
      <li>Move the pitch based on how fast the track went from being synchronized to being out of sync</li>
      <li>Use push or slow to get the tunes back synchronized</li>
      <li>If the tunes are not synchronized (staying in beat) then go to step 1</li>
    </ol>

    <h3 class="text-2xl mb-2 mt-3">BPM Isolation</h3>
    <p>
      BPM isolation involves narrowing the area of the pitch by dividing the search area. This requires having markers
      on the pitch slider. This means an area of the pitch will only be tested once. This is done by dividing the pitch
      into a number of regions.
    </p>
    <p class="mt-4">How to BPM isolate:</p>
    <ol class="list-decimal pl-10">
      <li>Move the pitch to a marker position</li>
      <li>Get the two tunes synchronized</li>
      <li>Let the tunes play and work if the cue track is faster or slower</li>
      <li>If the tunes are synchronized (staying in beat for a long amount of time) then done</li>
      <li>Move the pitch to the next marker</li>
      <li>When the pitch is in between two markers then divide the distance between them in half and move the pitch to
        that position and go to step 2
      </li>
    </ol>
    
    <h3 class="text-2xl mb-2 mt-3">BPM Position</h3>
    <p>
      This involves remembering the position of the pitch for a particular BPM. This requires knowing the BPM of
      the tunes beforehand. When a tune has been beatmatched the position of the pitch is remembered so when a track of
      the same speed is played in the future the pitch can be moved to the same position. When using turntables with
      vinyl
      and the pitch faders have multiple 0s then it won't be accurate across turntables and needs to be worked out for
      each one.
      When using Serato/Rekordbox or when using CDJs, the pitch decimal value can be remembered instead.
    </p>

    <h3 class="text-2xl mb-2 mt-3">BPM On-Screen</h3>
    <p>
      Any modern digital DJ equipment will have the BPM of the tracks displayed on screens. The pitch fader of the
      tracking being cued
      can be used to match the BPM of the playing track.
    </p>

    <h3 class="text-2xl mb-2 mt-3">Beat Sync</h3>
    <p>
      When using DJ controllers it's possible to use the sync feature to synchronize the speed of two tracks. This locks
      the
      tracks together based on their beat grid and sets their BPM to be the same. The button can also be used to just
      set the BPM of the cued track by turning it on which sets the BPM, then turning it off again to allow normal
      control.
      This saves having to manually adjust the fader to match the playing tracks BPM.
    </p>

    <h3 class="text-2xl mb-2 mt-3">Same BPMs</h3>
    <p>
      When all tracks have the same BPM, the pitch could be set to 0 on both turntables and it would just require
      getting the tracks in sync.
    </p>

    <h3 class="text-2xl mb-2 mt-3">Pre-Pitched Tracks</h3>
    <p>
      When using digital formats for mixing on a digital DJ system like Serato or with controllers the tracks can be
      pre-processed to be at the same pitch. A BPM amount can be chosen and the tracks pre-adjusted to the matching
      BPM using software. This means the pitch is set to the same on both decks as all tracks have the same BPM.
    </p>

    <h2 class="text-3xl mb-2 mt-3">Mixing</h2>

    <h3 class="text-2xl mt-3 mb-2">Cueing</h3>
    <p>
      Cueing is the process of preparing to play another track while another track is alreading playing. It normally
      involves listening to the track that will be mixed in headphones so it can be beatmatched and it's start
      position aligned with the bars of the playing track.
    </p>

    <h3 class="text-2xl mt-3 mb-2">Bars</h3>
    Tracks are made up of bars. Tunes should be mixed so their bars line up.

    <h3 class="text-2xl mt-3 mb-2">Mixing at 0db</h3>
    <p>
      All mixers have meters that show the current output levels. These can be used to ensure that when two tracks are
      being played together they are not distorting. When the meter enters the red, the tune is being clipped. When
      bringing in a tune into another one, ensure to compensate for the sound levels of the incoming track. This can be
      done by looking at the output meter. When the track is coming in, the level of the master will start to rise. How
      fast and how much it rises depends on how fast the track is coming in and how loud the track is. Compensating
      could involve turning the volume down on the original track or EQing the incoming track to allow room for it to
      fit.
    </p>

    <h3 class="text-2xl mt-3 mb-2">EQs</h3>
    <p>
      EQs can be used to help getting one track playing over another. For example, generally when one track is brought
      into another track, the bass EQ is reduced so when the bass of both tunes is overlapping, it doesn't clash and
      sound muddy or cause phasing. This can also be applied to the mids and highs.
    </p>

    <h3 class="text-2xl mt-3 mb-2">Key</h3>
    <p>
      Choose tracks with a matching or complimentary key to improve how they sound when played together.
    </p>

    <h2 class="text-3xl mt-3 mb-2">Issues</h2>

    <h3 class="text-2xl mt-3 mb-2">Digital Track Quality</h3>
    <p>
      Generally tracks that are downloaded from reputable sources (like Beatport) are high quality. They maintain a
      consistent pitch throughout and are at a reasonable volume. Tracks that are downloaded from non-reputable sources
      can have varying quality as it can depend on how it's been ripped. When vinyl tunes are ripped on turntables that
      don't have quartz lock the pitch can vary throughout the tune making beatmatching more difficult. They can also
      have slight and obvious skips which can throw out beatmatching.
    </p>
    <p>
      Tracks can be tested using a reference track with the matching BPM. Set the pitch to 0 on both turntables and set
      the reference track on one turntable and the one to be tested on the other. Get them in sync and let them play out
      and check
      if they stay in sync.
    </p>

    <h3 class="text-2xl mt-3 mb-2">Pitch Fader Wear</h3>
    <p>
      The quality of the pitch sliders can also affect beatmatching. Keeping the contacts clean helps them function
      smoothly.
      Some pitch faders can also have a second 0 point from wear and tear. Check the faders by moving them around the
      center
      point and see how they affect the BPM of the track playing.</p>

    <h2 class="text-3xl mt-3 mb-2">Split Cue</h2>
    <p>Mixers with split cue allow one headphone output to be split so that one ear hears the master
      output and the other ear can hear the cue. This allows beatmatching within headphones without having studio
      monitors.</p>
    <p class="text-xl mt-3">Split cue box</p>
    <img src="/split-cue-box.png" alt="Split Cue Box"/>
    <p>The output from the cue and booth are connected as inputs and headphones are plugged into the cue out.</p>
  </div>
</template>

<style scoped></style>
