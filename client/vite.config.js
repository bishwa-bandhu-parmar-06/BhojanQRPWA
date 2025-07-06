import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Add the VitePWA plugin
    VitePWA({
      // `registerType` determines how the service worker updates. 
      // 'autoUpdate' will automatically update to the latest version.
      registerType: 'autoUpdate',
      // `devOptions` enables the PWA plugin during development.
      devOptions: {
        enabled: true
      },
      // The `manifest` object defines your app's metadata.
      manifest: {
        name: 'BhojanQR Web App', // Replace with your app's full name
        short_name: 'BhojanQR', // Replace with a shorter name for the app
        description: 'A seamles and queue ordering canteen ordering system.', // Replace with your app's description
        theme_color: '#ffffff', // Sets the theme color of the app
        // `icons` are used for the home screen icon, splash screen, etc.
        icons: [
          {
            src: 'pwa-192x192.png', // Path to your 192x192 icon in the `public` folder
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png', // Path to your 512x512 icon in the `public` folder
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable' // 'maskable' allows the icon to adapt to different shapes
          }
        ]
      }
    })
  ],
})
