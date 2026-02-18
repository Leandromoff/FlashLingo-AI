# CLAUDE.md — FlashLingo AI

This file provides guidance for AI assistants (Claude and others) working on this codebase. It covers project structure, development workflows, conventions, and key decisions.

---

## Project Overview

**FlashLingo AI** is a language-learning flashcard app powered by Google's Gemini AI. Users select a topic, choose a target language, and study AI-generated vocabulary flashcards. The app features:

- Flashcard generation via Gemini 2.5 Flash (10 cards per session)
- Cloud TTS audio playback with karaoke syllable highlighting
- Browser speech synthesis fallback
- Pronunciation recording and AI-based evaluation (score 0–100)
- Multi-language support: English, Spanish, French, Italian, German
- Level system (A1–C1 CEFR difficulty, 6 visual levels per topic)
- Spaced repetition via a bonus review deck for unknown cards
- Contextual story generation from learned words
- Dark mode and persistent user preferences via `localStorage`

The app is hosted on Google AI Studio and targets Brazilian Portuguese speakers learning other languages. All user-facing feedback and AI scoring responses are returned in Portuguese (Brazil).

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 19.2.0 | UI framework |
| TypeScript | 5.8.2 | Type safety |
| Vite | 6.2.0 | Dev server and build tool |
| @google/genai | 1.30.0 | Gemini API (text + audio + TTS) |
| lucide-react | 0.554.0 | Icon components |
| Tailwind CSS | via CDN | Styling (not bundled) |

> **No test framework is configured.** There are no unit, integration, or e2e tests.

---

## Repository Structure

```
FlashLingo-AI/
├── index.html           # HTML entry point; loads Tailwind CDN, fonts, import map
├── index.tsx            # React entry; mounts <App /> to #root
├── App.tsx              # Main component: all state, views, and orchestration (~1,169 lines)
├── types.ts             # Shared TypeScript types and constants
├── vite.config.ts       # Vite config: port 3000, env injection, path alias @/
├── tsconfig.json        # TypeScript config: ES2022, bundler resolution, no emit
├── package.json         # Scripts, dependencies
├── metadata.json        # Google AI Studio config (name, description, microphone permission)
├── README.md            # Quick-start instructions
├── components/
│   ├── Card.tsx         # Flashcard component: flip, audio, karaoke, recording (~553 lines)
│   ├── ProgressBar.tsx  # Animated progress bar for deck position (~27 lines)
│   └── TalkingAvatar.tsx # Animated mouth avatar during audio playback (~49 lines)
└── services/
    └── geminiService.ts  # All Gemini API calls and audio logic (~507 lines)
```

---

## Environment Setup

### Required Environment Variable

```
GEMINI_API_KEY=your_api_key_here
```

Create a `.env.local` file at the project root. Vite injects it at build time as both `process.env.API_KEY` and `process.env.GEMINI_API_KEY`.

### Running Locally

```bash
npm install
# create .env.local with GEMINI_API_KEY
npm run dev         # dev server on http://localhost:3000
npm run build       # production build → dist/
npm run preview     # serve the production build
```

### Path Alias

The alias `@/` resolves to the project root. Use it for all internal imports:

```ts
import { FlashcardData } from '@/types';
import { generateFlashcards } from '@/services/geminiService';
```

---

## Key Types (`types.ts`)

```ts
SupportedLanguage   // 'en' | 'es' | 'fr' | 'it' | 'de'

FlashcardData       // word, translation, pronunciation (IPA), phonetics (PT),
                    // syllables (string[]), exampleSentence, exampleTranslation

PronunciationResult // score: number (0–100), feedback: string (in Portuguese)

StoryData           // title, content, translation (in Portuguese)

AppState            // 'HOME' | 'LOADING' | 'STUDY' | 'SUMMARY' | 'STORY' | 'ERROR'

StudySession        // cards[], currentIndex, knownCount, unknownCards[]

PREDEFINED_TOPICS   // 5 predefined topics with emoji + label (Travel, Food, Business, etc.)
```

---

## Architecture and Data Flow

### Component Tree

```
App.tsx  (state owner, view router)
├── ProgressBar.tsx         (STUDY state)
├── Card.tsx                (STUDY state, per-card logic)
│   └── calls geminiService: playCloudAudio, playLocalAudio,
│       preloadCloudAudio, evaluatePronunciation
├── TalkingAvatar.tsx       (embedded in Card.tsx)
└── geminiService.ts        (API layer, audio management)
```

### Session Flow

1. **HOME** — User picks topic, language, and difficulty levels
2. **LOADING** — `generateFlashcards()` fetches 10 cards from Gemini
3. **STUDY** — Cards displayed one at a time; user marks Known or Study
4. **SUMMARY** — Shows known/unknown counts for the session
5. **STORY** *(optional)* — `generateContextualStory()` builds a short story from learned words
6. **ERROR** — Displayed on API failures with a retry option

### State Persistence (`localStorage`)

| Key | Type | Purpose |
|---|---|---|
| `flashlingo_target_language` | string | Current target language |
| `flashlingo_levels` | JSON object | Visual level per topic (1–6) |
| `flashlingo_words` | JSON object | Learned words per topic (prevents repetition) |
| `flashlingo_reviews` | JSON object | Bonus deck (unknown cards) per topic |
| `flashlingo_enable_karaoke` | boolean | Syllable karaoke feature toggle |
| `flashlingo_enable_pronunciation` | boolean | Pronunciation recording toggle |
| `flashlingo_dark_mode` | boolean | Dark mode preference |

---

## Gemini API Usage (`services/geminiService.ts`)

### Model

All API calls use **`gemini-2.5-flash`**.

### Functions

| Function | Description |
|---|---|
| `generateFlashcards(topic, level, excludedWords, language)` | Generates 10 flashcards as structured JSON |
| `generateContextualStory(words, language)` | Generates a 50–100 word story using learned vocabulary |
| `playCloudAudio(text, language, rate?)` | Gemini TTS → Web Audio API playback; caches `AudioBuffer` |
| `playLocalAudio(text, language, rate?)` | Browser `SpeechSynthesis` fallback |
| `preloadCloudAudio(text, language)` | Fire-and-forget background audio fetch into cache |
| `evaluatePronunciation(audioBlob, targetText, language)` | Sends recorded audio + target text to Gemini; returns score and feedback |
| `retryApiCall(fn, maxRetries)` | Exponential backoff retry (2s → 4s → 8s) for 429/503 errors |

### Audio Architecture

- `audioCache: Map<string, AudioBuffer>` — In-memory cache keyed by text+language
- `audioContext` — Lazy singleton `AudioContext` (resumed on user interaction)
- PCM audio from Gemini TTS is Int16; normalized to Float32 before playback
- `SpeechSynthesisUtterance` stored in module scope to prevent garbage collection

### Difficulty Levels

| Visual Level | CEFR |
|---|---|
| 1 | A1 |
| 2 | A2 |
| 3 | B1 |
| 4 | B2 |
| 5 | C1 |
| 6 | C1 (advanced) |

---

## Card Component (`components/Card.tsx`)

Key behaviors:
- Auto-plays audio 150ms after card renders (local audio first, then cloud)
- Karaoke: Uses `requestAnimationFrame` loop to highlight syllables during playback
- Pronunciation recording: `MediaRecorder` API; auto-stops after 5 seconds
- Preloads cloud audio for the next card in the background
- Flip animation is CSS 3D transform (defined in `index.html`)
- `playingSource` state: `'cloud' | 'local' | null` drives avatar animation

---

## Styling Conventions

- **Tailwind CSS** via CDN — utility-first, no local PostCSS or Tailwind config
- **Dark mode**: `dark:` prefix classes; toggled by adding/removing `dark` class on `<html>`
- **3D flip animation**: Custom CSS keyframes defined in `index.html` `<style>` block
- **Inline styles**: Only used for dynamic values (e.g., progress bar width, animation timing)
- Color scheme: Indigo/violet primary, with amber/yellow accents for karaoke highlighting
- Fonts: Nunito (loaded from Google Fonts in `index.html`)

---

## Import Map (CDN Modules)

`index.html` defines an import map that redirects bare specifiers to `aistudiocdn.com`:

```json
{
  "imports": {
    "react": "...",
    "react-dom/client": "...",
    "@google/genai": "...",
    "lucide-react": "..."
  }
}
```

This means the packages in `package.json` are used only for local development with Vite. The production build served from AI Studio uses CDN URLs. Do not remove these from `package.json` — they are needed for TypeScript types and local dev.

---

## Development Guidelines

### Adding a New Language

1. Add the language code to `SupportedLanguage` in `types.ts`
2. Add a flag SVG and label to the language selector in `App.tsx`
3. Add a `SpeechSynthesis` locale mapping in `geminiService.ts` (`getLanguageLocale` or equivalent)
4. Test with `playLocalAudio` and `playCloudAudio`

### Adding a New Topic

- Static predefined topics live in `PREDEFINED_TOPICS` (`types.ts`)
- The trending carousel in `App.tsx` uses `TOPIC_POOL` (100+ topics defined inline)
- Users can also type a custom topic — no code change needed

### Modifying Gemini Prompts

- All prompts are in `geminiService.ts`
- `generateFlashcards` uses a **structured JSON schema response** — if the schema changes, update both the prompt and the `FlashcardData` type in `types.ts`
- Flashcard generation instructions explicitly require Portuguese (Brazil) phonetics and translations
- Story generation prompt requires Brazilian Portuguese in the translation field

### Error Handling

- API failures in `App.tsx` set `appState` to `'ERROR'` with a message string
- `retryApiCall` handles transient 429 (rate limit) and 503 (service unavailable) errors
- `evaluatePronunciation` includes its own retry logic with exponential backoff
- Show user-friendly error messages in Portuguese

### Audio Gotchas

- `AudioContext` must be created or resumed after a user gesture (browser requirement)
- `SpeechSynthesisUtterance` must be kept in scope to avoid being garbage-collected mid-playback
- The audio cache is in-memory and resets on page reload
- Cloud audio is PCM/Int16 from Gemini; it requires normalization before use with `AudioContext`

---

## What Does NOT Exist (as of latest commit)

- No test framework or test files
- No CI/CD pipeline (no GitHub Actions, Vercel, or Netlify config)
- No ESLint or Prettier configuration
- No Error Boundary React component
- No service worker / PWA support
- No API key validation UI or secure server-side proxy for the Gemini key
- No pagination for the trending topics carousel (fixed 4-item display)
- No offline or caching strategy beyond in-memory audio cache

---

## Git Conventions

Commit messages use the `feat:` / `fix:` conventional commits prefix style, based on the existing history. Use this format for all new commits:

```
feat: short description of what was added
fix: short description of what was fixed
refactor: short description of structural change
docs: changes to documentation only
```
