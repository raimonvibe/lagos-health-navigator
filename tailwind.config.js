/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			primary: {
  				DEFAULT: '#06B6D4',
  				50: '#F0FDFF',
  				100: '#CCFBF1',
  				200: '#A5F3FC',
  				500: '#06B6D4',
  				600: '#0891B2',
  				700: '#0E7490',
  				800: '#155E75',
  				900: '#164E63'
  			},
  			secondary: {
  				DEFAULT: '#F97316',
  				50: '#FFF7ED',
  				100: '#FFEDD5',
  				200: '#FED7AA',
  				500: '#F97316',
  				600: '#EA580C',
  				700: '#C2410C',
  				800: '#9A3412',
  				900: '#7C2D12'
  			},
  			accent: {
  				DEFAULT: '#8B5CF6',
  				50: '#F5F3FF',
  				100: '#EDE9FE',
  				200: '#DDD6FE',
  				500: '#8B5CF6',
  				600: '#7C3AED',
  				700: '#6D28D9',
  				800: '#5B21B6',
  				900: '#4C1D95'
  			},
  			success: {
  				DEFAULT: '#10B981',
  				50: '#ECFDF5',
  				100: '#D1FAE5',
  				500: '#10B981',
  				600: '#059669',
  				700: '#047857'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [import("tailwindcss-animate")],
}

