/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "action-monochromeenabledondark":
          "var(--action-monochromeenabledondark)",
        "action-monochromeenabledonlight":
          "var(--action-monochromeenabledonlight)",
        "action-monochromelowemphasisenabledonlight":
          "var(--action-monochromelowemphasisenabledonlight)",
        "action-ondarkactionhighenabled":
          "var(--action-ondarkactionhighenabled)",
        actionactionactive: "var(--actionactionactive)",
        actionactionenabled: "var(--actionactionenabled)",
        actionactionmidenabled: "var(--actionactionmidenabled)",
        actionbranddarker: "var(--actionbranddarker)",
        actiontextactionenabled: "var(--actiontextactionenabled)",
        "annotationannotation-on-dark": "var(--annotationannotation-on-dark)",
        "annotationannotation-on-light": "var(--annotationannotation-on-light)",
        backgroundaibackgroundenabled: "var(--backgroundaibackgroundenabled)",
        badgecharcoal: "var(--badgecharcoal)",
        badgeimportant: "var(--badgeimportant)",
        borderbackgroundstrokeenabled: "var(--borderbackgroundstrokeenabled)",
        borderborderhighemphasisonlight:
          "var(--borderborderhighemphasisonlight)",
        borderborderlowemphasisonlight: "var(--borderborderlowemphasisonlight)",
        borderbordermidemphasisonlight: "var(--borderbordermidemphasisonlight)",
        brandbrand: "var(--brandbrand)",
        focusfocusborderondark: "var(--focusfocusborderondark)",
        focusfocusborderonlight: "var(--focusfocusborderonlight)",
        surfaceaisurface: "var(--surfaceaisurface)",
        surfacesurfacelight: "var(--surfacesurfacelight)",
        surfacesurfacelightdarker: "var(--surfacesurfacelightdarker)",
        "text-colortextdisabledonlight": "var(--text-colortextdisabledonlight)",
        "text-colortexthighemphasisondark":
          "var(--text-colortexthighemphasisondark)",
        "text-colortexthighemphasisonlight":
          "var(--text-colortexthighemphasisonlight)",
        "text-colortextlowemphasisonlight":
          "var(--text-colortextlowemphasisonlight)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "avatar-lg": "var(--avatar-lg-font-family)",
        "avatar-sm": "var(--avatar-sm-font-family)",
        "button-lg-enabled": "var(--button-lg-enabled-font-family)",
        "button-md-enabled": "var(--button-md-enabled-font-family)",
        "button-md-monochrome": "var(--button-md-monochrome-font-family)",
        "copy-italic": "var(--copy-italic-font-family)",
        "copy-md": "var(--copy-md-font-family)",
        "copy-sm": "var(--copy-sm-font-family)",
        "copy-sm-link": "var(--copy-sm-link-font-family)",
        "data-md-high": "var(--data-md-high-font-family)",
        "data-md-mid": "var(--data-md-mid-font-family)",
        "data-sm-high": "var(--data-sm-high-font-family)",
        "data-sm-low": "var(--data-sm-low-font-family)",
        "data-sm-mid": "var(--data-sm-mid-font-family)",
        "data-xs-condensed-high": "var(--data-xs-condensed-high-font-family)",
        "display-md": "var(--display-md-font-family)",
        "display-sm": "var(--display-sm-font-family)",
        "display-xs": "var(--display-xs-font-family)",
        "form-sm-enabled": "var(--form-sm-enabled-font-family)",
        "heading-box-heading": "var(--heading-box-heading-font-family)",
        "heading-heading-lg": "var(--heading-heading-lg-font-family)",
        "heading-heading-md": "var(--heading-heading-md-font-family)",
        "heading-heading-sm": "var(--heading-heading-sm-font-family)",
        "heading-heading-xs": "var(--heading-heading-xs-font-family)",
        "heading-volte-semibold-s":
          "var(--heading-volte-semibold-s-font-family)",
        "navigation-heading": "var(--navigation-heading-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
  darkMode: ["class"],
};
