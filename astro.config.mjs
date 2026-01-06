// @ts-nocheck
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
// astro.config.mjs
export default defineConfig({
  integrations: [
    starlight({
      title: 'Kitaloket Docs',
      customCss: ['./src/styles/global.css'],
      sidebar: [
        {
          label: 'Dashboard Vendor',
          items: [
            { label: 'Memulai (Onboarding)', link: '/panduan/intro' },
            { label: 'Sebelum Membuat Event', link: '/panduan/pra-event' },
            { label: 'Membuat Event', link: '/panduan/buat-event' },
            { label: 'Statistik Event', link: '/panduan/statistik-event' }
          ]
        },
        {
          label: 'Pengelolaan Event',
          items: [
            { label: 'Pengelolaan Event', link: '/panduan/pengelolaan-event' },
            { label: 'Edit Event', link: '/panduan/edit-event' },
            { label: 'Lineup', link: '/panduan/lineup-event' },
            { label: 'Booth', link: '/panduan/booth-event' },
            { label: 'Form Tambahan', link: '/panduan/form-tambahan' },
            { label: 'Kategori Harga Tiket', link: '/panduan/kategori-harga' },
            { label: 'Voucher/Kode Promo', link: '/panduan/voucher' },
            { label: 'Aktivator', link: '/panduan/aktivator' },
            { label: 'Waiting Room', link: '/panduan/waiting-room' },
            { label: 'POS', link: '/panduan/point-of-sales' },
            { label: 'Scan Tiket', link: '/panduan/scan-tiket' },
            { label: 'Penarikan Dana', link: '/panduan/penarikan-dana' }
          ]
        },
        {
          label: 'Order dan Tiket',
          items: [
            { label: 'Detail Order', link: '/panduan/detail-order' },
            { label: 'Detail Tiket', link: '/panduan/detail-tiket' }
          ]
        },
        {
          label: 'Pengetahuan Dasar',
          items: [
            {
              label: 'Perubahan Harga',
              link: '/dasar/perubahan-harga'
            }
          ]
        }
      ]
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
})
