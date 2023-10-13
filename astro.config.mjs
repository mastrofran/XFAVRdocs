import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'XFAVR Docs',
			social: {
				github: ' https://github.com/mastrofran/Auto-Column-Chromatography',
			},
			sidebar: [
				{
					label: 'Getting Started',
					// items: [
					// 	// Each item here is one entry in the navigation menu.
					// 	{ label: 'Example Guide', link: '/getting_started/example/' },
					// ],
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: '3D Printing',
					items: [
						// 	// Each item here is one entry in the navigation menu.
							{ label: 'Cura Setup', link: '/3d-printing/cura-setup/' },
							{ label: 'Microcontroller Case (Optional)', link: '/3d-printing/microcontroller-case/'},
							{ label: 'Pivot Arm', link: '/3d-printing/pivot-arm/'},
							{ label: 'Stepper Motor Adapter', link: '/3d-printing/stepper-adapter/'},
							{ label: 'Vial Rotator', link: '/3d-printing/vial-rotator/'},
						],
				},
				{
					label: 'Microcontroller Software',
					items: [
						// 	// Each item here is one entry in the navigation menu.
							{ label: 'Arduino IDE Setup', link: '/microcontroller-software/arduino-ide-setup/'},
							{ label: 'Upload XFAVR Code', link: '/microcontroller-software/upload-code/'},
						],
				},
				{
					label: 'XFAVR Assembly',
					items: [
						// 	// Each item here is one entry in the navigation menu.
							{ label: 'Assembly Notes', link: '/assembly/assembly-notes/' },
							{ label: 'Case Framework', link: '/assembly/case-framework/' },
							{label: 'Stepper Motor Drivers & Breadboard', link: '/assembly/stepper-drivers-breadboard/'},
							{ label: 'Vial Rotator', link: '/assembly/vial-rotator/'},
							{ label: 'Valve Rotator', link: '/assembly/valve-rotator/'},
							{ label: 'Keypad', link: '/assembly/keypad/' },
							{ label: 'OLED Screen', link: '/assembly/oled-screen/' },
							{ label: 'Reset Button', link: '/assembly/reset-button/' },
							{ label: 'Final Comments', link: '/assembly/final-comments/' },
						],
				},
				{
					label: 'Operation',
					items: [
						// 	// Each item here is one entry in the navigation menu.
							{ label: 'Quick Start', link: '/operation/quick-start/'},
							{ label: 'Demo Video', link: '/operation/demo-video/'},
						],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },

	site: 'https://XFAVR.org',
	// base: '/XFAVRdocs/',
});
