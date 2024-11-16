<template>
  <q-dialog
    position="top"
    backdrop-filter="brightness(60%)"
  >
    <q-card style="width: 500px; max-width: 40vw; margin-top: 10vh; border-radius: 5px;">
      <q-card-section>
        <div class="text-h6">Stratification</div>
        <div class="text-subtitle2">
          Select how tracks are grouped for random sampling.
        </div>

        <q-separator class="q-my-md" />

        <div class="text-body1">
          <p>
            <b>What is Stratification?</b> Stratification is a method used to ensure that tracks are sampled evenly
            based on specific criteria. This prevents overrepresentation of certain groups such as albums, circles, or
            years.
          </p>
          <p>
            <b>Album</b> - Ensures an equal number of tracks are selected from each album, regardless of the total
            number of tracks in the album.
          </p>
          <p>
            <b>Circle</b> - Ensures an equal number of tracks are selected from each circle, preventing circles with
            more tracks from dominating.
          </p>
          <p>
            <b>Year</b> - Ensures tracks are distributed evenly across release years, so tracks from all years are
            equally represented.
          </p>
        </div>

        <q-separator class="q-my-md" />

        <div class="text-body2 text-secondary">
          <p>
            <b>Note:</b> Stratification ensures a balanced selection but does not guarantee a noticeable difference in
            smaller datasets or if the distribution of tracks is already even. Additionally, some randomness is still
            present, so results may vary between sessions.
          </p>
          <p>
            <b>Important:</b> Circles with smaller catalogs may have a higher probability of selecting the same track
            multiple times over a large sample size. This occurs because tracks are sampled from each circle
            independently, and smaller circles inherently have fewer unique options to choose from.
          </p>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
