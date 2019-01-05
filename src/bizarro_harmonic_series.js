var audioCtx = new (window.AudioContext || window.webkitAudioContext)()

INITIAL_PITCH = 220
BASE_GAIN = 0.1
DURATION = 1000

TAKE_MY_ROOTS = 2
// TAKE_MY_ROOTS = 3;
// TAKE_MY_ROOTS = Math.E;

var traditional_pitch = INITIAL_PITCH
var nth_root_pitch = INITIAL_PITCH
var meta_harm_pitch = INITIAL_PITCH

var cents = 0

var step = 1
var harmonic_step = 1
var voices = []

initializeVoice(INITIAL_PITCH)
logPitches()

function stepUpSeries() {
    traditional_pitch = INITIAL_PITCH * (step + 1)

    nth_root_pitch *= Math.pow(TAKE_MY_ROOTS, 1 / step)

    if (step != 1) {
        harmonic_step += 1 / step
    }
    meta_harm_pitch = 2 * INITIAL_PITCH * harmonic_step

    initializeVoice(traditional_pitch, 'traditional_pitch')
    initializeVoice(nth_root_pitch, 'nth_root_pitch')
    initializeVoice(meta_harm_pitch, 'meta_harm_pitch')

    step++

    logPitches()

    setTimeout(stepUpSeries, DURATION)
}

// use this section if you want to find a certain point w/o stack overflow)
// while (/*e.g.*/meta_harm_pitch < 1600) {
// stepUpSeries();
// }
// logPitches();

function logPitches() {
    console.log('STEP ', step)
    console.log('TRADITIONAL')
    console.log('cents: ', toCents(traditional_pitch))
    console.log('hz:    ', traditional_pitch)
    console.log('NTH ROOT')
    console.log('cents: ', toCents(nth_root_pitch))
    console.log('hz:    ', nth_root_pitch)
    console.log('META-HARMONIC')
    console.log('cents: ', toCents(meta_harm_pitch))
    console.log('hz:    ', meta_harm_pitch)
    console.log('')
}

function toCents(hz) {
    return 1200 * Math.log2(hz / INITIAL_PITCH).toPrecision(4)
}

function initializeVoice(pitch, series) {
    newVoice = {
        oscNode: audioCtx.createOscillator(),
        gainNode: audioCtx.createGain(),
        count: 1,
    }

    //show off the resultant scale, octave reduction
    //leave this commented out to hear the series go super high.
    // octave_reduced_pitch = pitch;
    // while (octave_reduced_pitch > INITIAL_PITCH * 2) {
    //   octave_reduced_pitch /= 2;
    // }

    newVoice.oscNode.connect(newVoice.gainNode)
    newVoice.gainNode.connect(audioCtx.destination)

    newVoice.oscNode.type = 'sine'
    newVoice.oscNode.frequency.value = pitch
    newVoice.gainNode.gain.value = BASE_GAIN
    newVoice.oscNode.start()

    voices[ pitch ] = newVoice

    // use this if you instead want to hear the sequence steps in isolation as they go
    // if (voices[series]) voices[series].gainNode.gain.value = 0;
    // voices[series] = newVoice;
}

setTimeout(stepUpSeries, DURATION);
