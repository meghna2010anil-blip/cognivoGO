# CogNivo v2 — Complete Localhost System & Feature Documentation
## Definitive Reference Manual for the Live Application (`localhost`)

---

# SECTION 1: EXECUTIVE FEATURE SUMMARY & APPLICATION MAP

**CogNivo v2** is an installable, offline-first Progressive Web Application (PWA) operating locally on `localhost`. It is an integrated dementia-care platform combining cognitive stimulation, physical guided movement, sensory ASMR therapy, reminiscence memory therapy ("Our Circle"), and a clinical caregiver operating suite.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        COGNIVO v2 LOCALHOST APPLICATION SITEMAP                        │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 1. LANDING & ONBOARDING (/, /onboarding)                                               │
│    • Matrix Life Organic Wave Backdrop (indigo/pink glow)                              │
│    • Live Date & Time Display + English / Malayalam / Hindi Regional Language Switch   │
│    • Dual Portals: Patient Calm Space & PIN-Protected Caregiver Dashboard              │
│                                                                                        │
│ 2. PATIENT CALM SPACE (/patient)                                                       │
│    • Welcome Header with audio TTS greeting                                            │
│    • Daily Mood Check-In Modal (5 facial expressions)                                  │
│    • Chronobiological "Today's Suggestion" Card (Morning/Midday/Evening/Night)         │
│    • Active Session Timer with 12-Minute Automatic Rest Break Reminder                 │
│    • "Play Together" Co-Play Mode Toggle + Emergency SOS Button                        │
│    • Persistent Help Button (audio instruction replay + double-tap caregiver call)     │
│                                                                                        │
│ 3. THE 4 PATIENT THERAPEUTIC PILLARS                                                   │
│    ├── PILLAR 1: THINK & REMEMBER (/patient/games)                                     │
│    │   ├── 40 Active Game Routes across 7 Cognitive Domains                            │
│    │   │   • Attention (5 new + 4 core = 9 games)                                      │
│    │   │   • Brain Speed (5 new games)                                                 │
│    │   │   • Memory & Recall (7 new + 4 core = 11 games)                               │
│    │   │   • People Skills (4 new + 1 core = 5 games)                                  │
│    │   │   • Intelligence & Executive Function (4 new + 2 core = 6 games)              │
│    │   │   • Navigation & Spatial Cognition (4 new + 2 core = 6 games)                 │
│    │   └── Heuristic Adaptive Difficulty Engine (EMA N=5, 80%/40%, Latency <4s)        │
│    │                                                                                   │
│    ├── PILLAR 2: MOVE & BREATHE (/patient/move, /patient/move/guided)                  │
│    │   ├── Guided Movement Sessions with animated figures and TTS coaching             │
│    │   ├── Seated Arm & Leg Exercises (marching, cushion passes, sit-to-stand)         │
│    │   ├── Counter-Supported Balance Moves with voice disclaimer & caregiver gate      │
│    │   └── Gentle Yoga & Tai Chi Flows with expanding circular visual breathing guide  │
│    │                                                                                   │
│    ├── PILLAR 3: FEEL & REMINISCE (/patient/feel, /patient/relax)                      │
│    │   ├── Sensory Box: Interactive fluid canvas with feathers, ripples, squish-ball,  │
│    │   │   popping bubbles, fireflies, and device haptic vibration feedback            │
│    │   ├── Music Corner: Traditional ragas, devotional music, and folk playlists       │
│    │   ├── Relax & Unwind Hub: Guided Meditation Player with transcripts & audio       │
│    │   ├── Sound Library: High-definition environmental soundscapes                    │
│    │   ├── Dual-Audio Mixer: Blend two simultaneous tracks with independent volume     │
│    │   ├── Ambience Lighting: Fullscreen color therapy (Amber, Indigo, Rose, Mint)     │
│    │   └── Sleep Timer Modal: Auto-fading audio timers (15 to 60 minutes)              │
│    │                                                                                   │
│    └── PILLAR 4: OUR CIRCLE (/patient/circle)                                          │
│        ├── Cosy Family Tree: Interactive visual kinship hierarchy & audio notes        │
│        ├── Life Timeline: Milestone scrapbooks (Childhood, Youth, Family, Golden Years)│
│        ├── Familiar Places: Virtual memory map with Google Street View & sensory cues  │
│        ├── Favourite Things: Memory cards of preferred dishes, tea, blanket, scents    │
│        ├── Music Memory Lane: Vintage tracks (1950s–80s) with line-by-line singalong   │
│        ├── People I Love: Large photo calling tiles with one-tap phone/WhatsApp dial   │
│        ├── Care & Comfort: Emotional check-in, daily comfort routines, soothing tastes │
│        ├── Family Moments: Shared family stories and photo celebration cards           │
│        └── Caregiver Journal View: Shared caregiver reflections for the patient        │
│                                                                                        │
│ 4. CAREGIVER CLINICAL PORTAL (/caregiver, /caregiver/dashboard)                        │
│    • Secure PIN Gate Security Authentication                                           │
│    • Command Hub: Quick status, today's schedule, pending alerts, recent care actions  │
│    • Clinical Overview: 30-day domain trajectories, weekly variety ring, heatmaps      │
│    • Daily Care Log (carelog): 8-Category ADL tracking with End-of-Day Review          │
│      (Food & Drink, Washroom, Sleep, Mood, Memory Moments, Behaviour, Physical, Social)│
│    • Local Report Engine: In-browser analytics computing clinical progress             │
│    • 14-Day Doctor Encounter Pack: One-click printable briefing sheet for doctors      │
│    • Netlify AI Temporal Memory Analysis: Ribot's law assessment & Then vs Now bridging│
│    • Routine & Reminders Manager: Timed tasks with in-page voice TTS announcements     │
│    • Manage Game Pictures: Upload personal family photos into memory match & puzzles   │
│    • Caregiver Circle Manager: Administer family members, timeline milestones, places  │
│    • Safety Alerts: 48h inactivity, 20% score drop, missed medications, emergency calls│
│    • Settings: Stage toggle (Mild, Moderate, Comfort), Distress Trigger Blacklist      │
│                                                                                        │
│ 5. TECHNICAL ARCHITECTURE & DATA PRIVACY                                               │
│    • React 18 + TypeScript + Vite + Tailwind CSS                                       │
│    • IndexedDB (Dexie.js) Local-First Database: Zero cloud leak of photos or logs      │
│    • Web Speech API + Web Audio API Oscillators (Up/Down Sound pure pitch sweeps)      │
│    • Offline PWA Service Worker caching for 100% offline functionality                 │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

# SECTION 2: DETAILED BREAKDOWN OF EVERY FEATURE ON LOCALHOST

---

## 1. Landing, Onboarding & Ergonomic Design

### 1.1 Landing Page (`/`)
* **Matrix Life Organic Fluid Backdrop**: Uses `OrganicWaveBanner.tsx` featuring smooth, undulating SVG wave curves with indigo-to-rose glowing gradients.
* **Frosted Glass Navigation Pill**: Floating header displaying the brand logo (`cognivo.`), live real-time digital clock and date string, and regional language selector buttons (**English**, **മലയാളം**, **हिंदी**).
* **Dual Portal Selection Cards**:
  1. *Patient Portal ("Enter Calm Space")*: A prominent button leading into the patient's personalized, errorless environment.
  2. *Caregiver Portal ("Caregiver Dashboard")*: A secure, lock-badged button leading into the PIN-protected caregiver suite.
* **First-Visit Onboarding Gate**: Directs first-time visitors into `/onboarding` to configure the patient's name, cognitive stage, and caregiver PIN before unlocking the system.

### 1.2 Onboarding Flow (`/onboarding`)
* **Step 1: Patient Profile**: Sets patient name, profile picture, primary language, cognitive stage (*Mild*, *Moderate*, *Late Comfort*), and chronobiological alert window (*Morning*, *Midday*, *Evening*).
* **Step 2: Security & Emergency Setup**: Establishes a 4-digit caregiver PIN hash and primary emergency contact telephone number.
* **Step 3: Database Seeding**: Pre-populates Dexie IndexedDB with realistic demo data (patient record, initial routine, family tree members, memory boxes, and historical game sessions) so charts and recommendations populate immediately on first load.

### 1.3 The 15 Golden UX Rules Enforced Across Localhost
1. **Strictly Tap-to-Place (No Drag gestures)**: Puzzles and sorting tasks use sequential tapping to accommodate tremors and motor apraxia.
2. **64 × 64 px Touch Targets**: Interactive elements feature a minimum physical target size of 64 × 64 px with ample spacing.
3. **High-Contrast Typography**: Text is styled at a minimum of 22px body size, meeting WCAG 2.1 AAA contrast requirements.
4. **Autonomous Voice Guidance (TTS)**: On-device speech synthesis speaks instructions aloud on screen load in the patient's preferred language.
5. **Absence of Countdown Clocks**: No visual timers or countdown alarms appear in Patient Mode.
6. **Errorless Learning Feedback**: Incorrect selections trigger a soft woodblock tone; the item returns smoothly to its origin, and the correct target gently pulses.
7. **Emergency Help & Call Caregiver**: Single tap on the Help button reads screen instructions; double tap within 10 seconds registers a priority caregiver alert.
8. **Zero Mandatory Typing**: Every patient action is 100% voice or single-tap.
9. **Two-Tap Navigation Depth**: Flat interface hierarchy ensures any activity is reachable within 2 taps of the home screen.
10. **12-Minute Fatigue Shield**: Automatically presents a soft vocal pause recommendation after 12 minutes of continuous active use.
11. **"Play Together" Co-Play Mode**: A toggle on activities adjusts scoring and latency thresholds for collaborative patient-caregiver play.
12. **Patient Autonomy**: The patient chooses their preferred activity from the four large visual pillars.
13. **Celebration of Effort Over Outcome**: Completion screens show warm affirmations (*"A lovely time together!"*); numeric scores are restricted to Caregiver Mode.
14. **Calm Sensory Environment**: No auto-playing advertisements, no flashing banners, and full respect for `prefers-reduced-motion`.
15. **Respectful Tone**: Language is dignified, warm, and adult—never patronizing or childish.

---

## 2. Patient Calm Space (`/patient`)

### 2.1 Patient Home Components
* **Personalized Greeting**: Voice and text welcome banner addressing the patient by name (e.g., *"Welcome back, Arthur. Let's take today step by step."*).
* **Daily Mood Check-In Modal (`MoodCheckIn.tsx`)**: Prompts the patient with 5 facial expressions (Very Happy, Calm, Neutral, Sad, Agitated) to calibrate difficulty and mood tracking.
* **Today's Suggestion Card**: Powered by `circadianEngine.ts`, presenting a prioritized activity card tailored to the current hour of the day.
* **Active Session Time Tracker**: Silently tracks usage; triggers a voice break prompt at 720 seconds (12 minutes).
* **Emergency SOS Button (`SosButton.tsx`)**: Prominent red circular button for instant emergency calling and caregiver alert generation.
* **Persistent Help Button (`HelpButton.tsx`)**: Accessible across all patient screens for audio instruction replays and quick caregiver calling.
* **Voice Mute/Unmute Toggle**: Easily silences or resumes automatic speech synthesis.
* **The 4 Pillar Navigation Cards**:
  1. *Think & Remember* (`/patient/games`): 40 active cognitive and clinical games.
  2. *Move & Breathe* (`/patient/move`): Guided seated exercises and breathing flows.
  3. *Feel & Reminisce* (`/patient/feel` & `/patient/relax`): Sensory box, music, meditation, ASMR, and light therapy.
  4. *Our Circle* (`/patient/circle`): Family tree, timeline scrapbooks, familiar places, and comfort routines.

---

## 3. Pillar 1: Think & Remember (40 Active Games & Engines)

### 3.1 Cognitive Domain Breakdown
The games catalog (`GamesHome.tsx`) organizes 40 interactive routes across 7 functional domains:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   40 ACTIVE GAMES ON LOCALHOST                         │
├────────────────────────────────────────────────────────────────────────┤
│ ATTENTION (9 Games)                                                    │
│ • Track the Fish        • Car & Sign             • Shape Sorter        │
│ • Hear & See            • Hold Your Tap          • Spot the Difference │
│ • Count & Find          • Tap When You See It    • Order My Day        │
│                                                                        │
│ BRAIN SPEED (5 Games)                                                  │
│ • Bird Spotter          • Spot the Twin          • Up or Down Sound    │
│ • Stripe Direction      • Sound Twins                                  │
│                                                                        │
│ MEMORY & RECALL (11 Games)                                             │
│ • What's New?           • Sound Pairs            • Echo Syllables      │
│ • Errand Runner         • Find the Odd One       • Listen Closely      │
│ • Beat Echo             • Memory Match           • What Went Missing?  │
│ • Shopping List         • Remember the Order                           │
│                                                                        │
│ PEOPLE SKILLS (5 Games)                                                │
│ • Story Keeper          • Who Was That?          • Mood Match          │
│ • Name the Neighbour    • Who Is This? (Familiar Faces)                │
│                                                                        │
│ INTELLIGENCE & EXECUTIVE (6 Games)                                     │
│ • Rule Switch           • Card Back (N-Back)     • Circle Numbers      │
│ • Card Call             • Sort It Out            • Name That Object    │
│                                                                        │
│ NAVIGATION & SPATIAL (6 Games)                                         │
│ • Flip or Turn          • Grid Twist             • Train Compass       │
│ • Road Ahead            • Rabbit Reach Carrot    • Jigsaw Puzzles      │
└────────────────────────────────────────────────────────────────────────┘
```

#### Detailed Gameplay Mechanics for Key Games:
1. **Track the Fish (`/patient/games/track-the-fish`)**: 2–4 sea creatures glow initially. Distractors enter. All fish swim and bounce for 10–15 seconds. Patient taps original targets when motion stops.
2. **Car & Sign (`/patient/games/car-and-sign`)**: Useful Field of View (UFOV®). A central vehicle flashes for 250ms–1500ms while a road sign appears in 1 of 8 peripheral zones. Patient identifies the central vehicle and the sign's peripheral location.
3. **Shape Sorter (`/patient/games/shape-sorter`)**: Selective attention. Evaluates pairs of geometric shapes against dynamic rules (color, shape, fill).
4. **Hear & See (`/patient/games/hear-and-see`)**: Cross-modal integration. Verifies if a spoken phoneme matches the center visual letter while ignoring flanking distractors.
5. **Hold Your Tap (`/patient/games/hold-your-tap`)**: Inhibitory control (Go/No-Go). Patient taps steadily for regular items but must freeze when a target distractor appears.
6. **Bird Spotter (`/patient/games/bird-spotter`)**: Saccadic peripheral processing speed. A bird flashes briefly on an outer branch; patient identifies the species from a central lineup. Flash exposure scales from 1200ms down to 250ms.
7. **Up or Down Sound (`/patient/games/up-or-down-sound`)**: Auditory pitch sweep processing. Determines whether a synthesized acoustic sweep rises or falls in pitch. Duration shortens from 400ms to 60ms.
8. **What's New? (`/patient/games/whats-new`)**: Visual scene memory. A room with several objects dims and reopens with one new item added; patient taps the new item.
9. **Sound Pairs (`/patient/games/sound-pairs`)**: Auditory working memory. A grid of face-down speaker tiles plays nature sounds or syllables to match identical pairs.
10. **Errand Runner (`/patient/games/errand-runner`)**: Delayed instructional execution. Follows a spoken multi-step grocery list by tapping shelf items in order.
11. **Story Keeper (`/patient/games/story-keeper`)**: Narrative episodic memory. Listens to an illustrated cultural story and answers comprehension questions.
12. **Rule Switch (`/patient/games/rule-switch`)**: Task set-shifting. Dynamic banner alternates between: *"Digits: Pick HIGHER"* and *"Words: Pick LOWER"*.
13. **Card Back (`/patient/games/card-back`)**: Visual N-back working memory. Determines whether the current card matches the one seen 1 or 2 turns prior.
14. **Flip or Turn (`/patient/games/flip-or-turn`)**: Mental rotation. Determines whether a rotated shape is merely turned or mirrored.
15. **Jigsaw Puzzles (`/patient/games/jigsaw-puzzle`)**: Tap-to-select, tap-to-place puzzles (4, 9, 16, 25 pieces) using family photos or cultural landmarks.

### 3.2 Heuristic Adaptive Difficulty Engine (`adaptiveGameEngine.ts`)
* **Rolling Evaluation Window**: Tracks the last $N = 5$ sessions per game.
* **Exponential Moving Average Formula**:
  $$\text{RollingAcc}_t = \text{RollingAcc}_{t-1} \cdot 0.8 + \text{SessionAcc} \cdot 0.2$$
  $$\text{RollingLat}_t = \text{RollingLat}_{t-1} \cdot 0.8 + \text{SessionLat} \cdot 0.2$$
* **Promotion Rule**: Accuracy $\ge 80\%$ and average response latency $< 4000\text{ ms}$ promotes the patient by $+1$ level (up to level 10).
* **Demotion Rule**: Accuracy $\le 40\%$ eases the difficulty by $-1$ level (floor at level 1).
* **Stage Capping**:
  * *Mild*: Levels 1 to 10.
  * *Moderate*: Hard-capped at **Level 3** to prevent frustration.
  * *Late Comfort*: Disables all scoring and level advancement.
* **Mood Compensation**: A pre-game mood of "Sad" or "Agitated" automatically lowers starting level by 1 and recommends calming content.

---

## 4. Pillar 2: Move & Breathe (Physical Movement)

* **Guided Movement Hub (`/patient/move/guided`)**: Central directory of video-style guided movement routines led by large animated figures with soothing voice pacing.
* **Guided Session Runner (`/patient/move/guided/session`)**: Fullscreen player with pause, next, replay, and zero timer pressure.
* **Seated Exercises**: Rhythmic chair marching, cushion passes, toe taps, arm raises with finger wiggles, and assisted sit-to-stand.
* **Balance & Stability Moves**: Counter-supported single-leg stands, rock-the-boat sways, and hip kicks. Preceded by an audible safety notice and caregiver-present confirmation.
* **Chair Yoga & Tai Chi**: 5-minute gentle breathing flows with an expanding circular visual pacer.

---

## 5. Pillar 3: Feel & Reminisce (Sensory, ASMR & Relaxation)

* **Sensory Sanctuary (`/patient/feel`)**: Entry portal for sensory therapies.
* **Interactive Sensory Box (`/patient/feel/sensory-box`)**: Tactile physics playground with floating feathers, water ripples, squishable stress-balls, popping bubbles, and floating fireflies with haptic vibration feedback.
* **Music Corner (`/patient/feel/music`)**: Curated cultural playlists, morning ragas, folk melodies, and devotional chants.
* **Relax & Unwind Hub (`/patient/relax`)**:
  * **Meditation Player (`/patient/relax/meditation`)**: Guided mindfulness audio player with synchronized text transcripts.
  * **Sound Library (`/patient/relax/sounds`)**: High-definition soundscapes (Monsoon Rain, Forest River, Singing Bowls, Temple Chimes).
  * **Dual-Audio Mixer (`DualMixerModal.tsx`)**: Enables simultaneous blending of two audio layers with independent volume sliders.
  * **Ambience Light Therapy (`AmbienceLighting.tsx`)**: Fullscreen color therapy (Warm Amber, Twilight Indigo, Soft Rose, Mint Glow).
  * **Sleep Timer (`SleepTimerModal.tsx`)**: Auto-fades audio after 15, 30, 45, or 60 minutes.
  * **Offline Sound Manager (`OfflineSoundManagerModal.tsx`)**: Manages offline audio caches.

---

## 6. Pillar 4: Our Circle (Reminiscence Therapy & Kinship)

* **Circle Hub (`/patient/circle`)**: Central memory sanctuary connecting family, milestones, and comfort.
* **Cosy Family Tree (`/patient/circle/tree`)**: Interactive visual family tree organizing children, spouses, siblings, and grandchildren with relational cues, age-bridging photos, and audio greetings.
* **Life Timeline (`/patient/circle/timeline`)**: Chronological narrative of personal milestones (Childhood, Youth, Marriage, Career, Family, Golden Years) with rich photo cards and audio commentary.
* **Familiar Places (`/patient/circle/places`)**: Virtual memory map of meaningful locations (childhood village, ancestral home, wedding chapel, favorite garden) with Google Street View integration.
* **Favourite Things (`/patient/circle/favourites`)**: Personalized memory cards of preferred foods, cherished books, beloved pets, and signature scents.
* **Music Memory Lane (`/patient/circle/music`)**: Curated musical stations spanning the 1950s through 1980s with line-by-line karaoke lyric highlights.
* **Care & Comfort (`/patient/circle/comfort`)**: Emotional check-in, comfort routines (morning tea ritual, afternoon garden stroll, evening listening, bedtime calm), comforting sensory preferences (touch, temperature, beverages).
* **People I Love (`/patient/circle/people`)**: Large photo calling tiles with one-tap WhatsApp and phone dialing.
* **Family Moments (`/patient/circle/moments`)**: Shared stories, celebration photo cards.
* **Caregiver Journal View (`/patient/circle/caregiver-journal`)**: Patient-facing view of shared caregiver reflections.

---

## 7. Caregiver Clinical Portal (`/caregiver`, `/caregiver/dashboard`)

Accessed via secure PIN Gate (`PinGate.tsx`).

```
┌────────────────────────────────────────────────────────────────────────┐
│                    CAREGIVER DASHBOARD TAB STRUCTURE                   │
├────────────────────────────────────────────────────────────────────────┤
│ 1. Hub (hub)         ── Command center, schedule, pending alerts       │
│ 2. Overview (overview)── 30-day metrics, weekly variety ring, heatmaps │
│ 3. Trends (trends)   ── Longitudinal domain trajectories               │
│ 4. Progress (progress)── Game session history & completion breakdowns  │
│ 5. Pictures (pictures)── Manage game photos (family in puzzles/match)  │
│ 6. Care Log (carelog) ── 8-Category ADL logging with End-of-Day Review │
│ 7. Reports (reports) ── Doctor reports, OCR & 14-Day Doctor Encounter  │
│ 8. Alerts (alerts)   ── Safety, inactivity & performance drop alerts   │
│ 9. Routine (routine) ── Medication, meal & exercise schedule editor    │
│ 10. Memory (memory)  ── Memory box items & familiar places manager     │
│ 11. Circle (circle)  ── Family tree & kinship management               │
│ 12. Library (library)── Activity cards library & caregiver tips        │
│ 13. Notes (notes)    ── Private caregiver journal                      │
│ 14. Settings (settings)─ Stage toggle, language, distress trigger list │
└────────────────────────────────────────────────────────────────────────┘
```

### 7.1 Daily Care Log (`CareLogView.tsx`)
Provides rapid single-tap logging across 8 essential ADL categories:
1. **Food & Drink**: Meal category (Breakfast, Lunch, Dinner, Snack, Drink Only), portion consumed (None, Little, Half, Most, All), fluid cups counter, beverage type.
2. **Washroom & Continence**: Toilet visits, assistance level, minor leakages, pad refreshes (flagged as sensitive for medical exports).
3. **Sleep & Night Pacing**: Bedtime, wake time, awakenings, nocturnal wandering, daytime napping.
4. **Emotions & Mood**: 12 starter chips (Calm, Happy, Content, Anxious, Sad, Irritable, Restless, Confused, Withdrawn), observed triggers (Noise, Tiredness, Unfamiliar person, Hunger, Evening sundown), effective comforts (Music, Walk, Photo, Hug, Tea, Hand-holding), intensity ratings (1–3).
5. **Memory & Thinking Moments**: Repetitive questioning, person recognition gaps, temporal disorientation, misplaced items, reassurance strategies.
6. **Behaviour & Communication**: Agitation, care resistance, hallway pacing, exit-seeking, calming interventions.
7. **Physical Wellbeing**: Pain indicators, gait stability, fall events, dizziness, fatigue, skin health, vital signs.
8. **Activities & Social**: Exercises completed, visitors welcomed, games played, hobby participation.
* **End-of-Day Review Modal (`EndOfDayReviewModal.tsx`)**: Daily summary cards and caregiver personal reflections.
* **Undo Toast (`UndoToast.tsx`)**: Enables quick reversal of accidental entries.

### 7.2 Clinical Reporting & Doctor Encounter Pack
* **Local Report Engine (`localReportEngine.ts`)**: Evaluates 30-day domain trajectories, session completion vs. abandonment rates, and response latencies client-side.
* **14-Day Doctor Encounter Pack Modal (`DoctorEncounterModal.tsx`)**: Generates a structured one-page medical consultation summary summarizing cognitive trends, ADL adherence, and sleep patterns for geriatric consultations.
* **Netlify AI Temporal Memory Analysis (`analyze-temporal-memory.ts`)**: Evaluates family recognition patterns through Ribot's law and provides home photo-bridging tips.

### 7.3 Routine & Medication Reminders (`RoutineEditor.tsx`)
* Timed alerts for medications, hydration, meals, exercises, and appointments.
* In-page TTS announcements at scheduled times.
* Grace period monitoring: Routines uncompleted after 30 minutes generate a missed-routine alert.

### 7.4 Automated Safety Monitoring
* **48-Hour Inactivity Monitor**: Flags absence of patient interactions.
* **Performance Drop Warning**: Alerts caregiver if rolling cognitive accuracy falls by > 20% week-over-week.
* **Medication Adherence Alert**: Logs missed medications to the alert ledger.
* **Emergency Call Trigger**: Instantly records double-taps on the patient Help button.

### 7.5 Settings & Safety Filters (`Settings.tsx`)
* **Dementia Stage Toggle**: Mild (levels 1–10), Moderate (capped at level 3), Late Comfort (scoring disabled).
* **Distress Trigger Blacklist (`SCENT_ITEMS`)**: Prevents specific scents (Jasmine, Coffee, Petrichor, Sandalwood, Cardamom, Coconut Oil) or media from appearing if flagged as upsetting to the patient.
* **Module Switches**: Allows caregivers to selectively enable or disable physical exercises until cleared by a physician.

---

## 8. Technical Stack & Localhost Data Privacy

* **Frontend**: React 18, TypeScript, Tailwind CSS, Vite.
* **Storage Engine**: IndexedDB via **Dexie.js**. Complete local storage of sessions, routines, logs, family photos, and audio blobs.
* **Audio Layer**: Web Audio API oscillators for pure pitch sweeps (Up/Down Sound) and multi-channel sound mixing.
* **Voice Synthesis**: Web Speech API (`window.speechSynthesis`) leveraging local device voices without recurring cloud fees.
* **PWA & Offline Service Worker**: `vite-plugin-pwa` precaching the entire application shell, vector icons, and core audio assets.
* **Privacy by Design**: Zero patient photographs, voice recordings, or medical logs are transmitted to external cloud servers; all data remains in the local browser sandbox.

---

### Master File Access:
* Root Workspace Documentation: [COGNIVO_V2_LOCAL_SYSTEM_DOCUMENTATION.md](file:///c:/Users/apple/Downloads/dementia-app/COGNIVO_V2_LOCAL_SYSTEM_DOCUMENTATION.md)
* App Repository Documentation: [CogNivo_v2/COGNIVO_COMPLETE_SYSTEM_DOCUMENTATION.md](file:///c:/Users/apple/Downloads/dementia-app/CogNivo_v2/COGNIVO_COMPLETE_SYSTEM_DOCUMENTATION.md)
* In-IDE Artifact: [COGNIVO_SYSTEM_SPECIFICATION.md](file:///C:/Users/apple/.gemini/antigravity-ide/brain/4a8b4388-8099-49fc-8f81-6ca9f379544e/COGNIVO_SYSTEM_SPECIFICATION.md)
