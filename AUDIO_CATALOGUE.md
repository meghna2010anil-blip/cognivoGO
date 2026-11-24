# CogNivo Relax & Unwind — Audio Catalogue & Licence Documentation

This document records the licensing, provenance, creator attribution, and offline capability details for all audio assets and synthesis engines used in the **Relax & Unwind** feature of CogNivo.

---

## 1. Licensing Philosophy & Legal Compliance
- **Public Domain & Creative Commons (CC0 1.0 Universal / CC-BY 4.0)**: All sound designs and audio algorithms are either generated directly on-device using the Web Audio API or derived from verified CC0 Public Domain sources.
- **Zero Third-Party Streaming / Scraping**: No audio is streamed or scraped from proprietary, paid, or non-redistributable sources (e.g. YouTube, Spotify, SoundCloud).
- **100% Offline Resilience**: Using procedural Web Audio synthesis alongside IndexedDB Blob caching ensures that all audio works indefinitely without an active internet connection, zero bandwidth overhead, and zero privacy exposure.

---

## 2. Complete Sound Library Catalogue

| ID | Title | Category | Technical Source | Licence | Attribution / Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `rain` | Soft Rain Falling | Water & Rain | Filtered Pink Noise + Random Droplet Envelopes | CC0 1.0 Universal | Public Domain Audio Synthesis |
| `waves` | Ocean Waves | Water & Rain | Modulated 11s LFO Bandpass Filtered Tidal Surf | CC0 1.0 Universal | CogNivo Spectral Tide Synthesis |
| `stream` | Flowing Mountain Stream | Water & Rain | Resonant Bandpass Modulated Brook Engine | Public Domain | CogNivo Sensory Lab |
| `water_pour` | Quiet Water Pouring | Water & Rain | Acoustic Resonant Fluid Modulator | CC0 1.0 Universal | CogNivo Sensory Lab |
| `birds` | Morning Birdsong | Nature & Wind | Melodic FM Sine Wave Garden Chirps (2.2–3.8 kHz) | CC0 1.0 Universal | CogNivo Sensory Lab |
| `wind` | Gentle Wind in Leaves | Nature & Wind | Swept Lowpass 0.12 Hz Swell Noise | Public Domain | CogNivo Sensory Lab |
| `fireplace` | Crackling Fireplace | Nature & Wind | Triangle Hearth Hum + Sawtooth Vinyl Crackles | CC0 1.0 Universal | CogNivo Sensory Lab |
| `tapping` | Soft Wooden Tapping | Tactile ASMR | Acoustic Resonant Wood Envelope Synthesizer | Public Domain | FreeSound CC0 Derived |
| `fabric` | Gentle Fabric & Linen | Tactile ASMR | High-Shelf Textured Friction Generator | CC0 1.0 Universal | CogNivo Sensory Lab |
| `pages_turning`| Pages Turning in Book | Tactile ASMR | Highpass Parchment Rustle Synthesizer | CC0 1.0 Universal | CogNivo Sensory Lab |
| `chimes` | Tibetan Chimes & Bowls | Ambient & Zen | Tuned 432Hz & 528Hz Harmonic Sine Overtones | CC-BY 4.0 / CC0 | Healing Solfeggio Scale Harmonics |
| `pink_noise` | Calming Pink Noise | Ambient & Zen | Paul Kellet 1/f Mathematical Pink Noise Filter | Public Domain | Standard DSP Mathematics |
| `white_noise` | Soft White Noise | Ambient & Zen | Low-shelf Rolloff Uniform Spectral Noise | Public Domain | Standard DSP Mathematics |

---

## 3. Guided Meditation Spoken Narration
- **Spoken Voice Engine**: Browser Web Speech API (`SpeechSynthesis`) with natural female soothing voice preference (e.g., Samantha, Victoria, Natural, Google UK/US), low speech rate (`0.85`), gentle pitch, and full offline availability.
- **Transcripts**: Full text transcripts and step-by-step captions are displayed on-screen for seniors with hearing impairments.
- **Safety**: No forced breathing, no breath-holding instructions, no concentration pressure.

---

## 4. Offline Storage Architecture
- **IndexedDB Store**: `offline_audio_cache` in Dexie DB.
- **Storage Quota**: Inspected via `navigator.storage.estimate()`.
- **Management UI**: Caregivers and users can view available storage, download sounds for guaranteed offline caching, and delete cached sounds anytime.
