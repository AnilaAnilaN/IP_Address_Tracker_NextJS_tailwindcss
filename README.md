
# IP Address Tracker — Frontend Mentor Challenge

This project is my solution to the [IP Address Tracker](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0) challenge from Frontend Mentor. It allows users to search for any IP address or domain and instantly see detailed information along with its location displayed on an interactive map.

## Overview

### The Challenge

Users should be able to:

- View the layout optimally on mobile and desktop
- See their own IP address information on the first load
- Search for any valid IP address or domain
- View key details like location, timezone, and ISP
- See the precise location marked on a Leaflet map

## Links

- **Live Site:** https://ip-address-tracker-next-js-tailwind.vercel.app/  
- **Frontend Mentor Solution:** https://ip-address-tracker-next-js-tailwind.vercel.app/

## Built With

- Next.js 14 (App Router)
- React
- Tailwind CSS
- Leaflet + react-leaflet
- IPify Geolocation API
- Mobile-first workflow

## Features

- Responsive UI matching the official design
- Smooth map animations using Leaflet flyTo
- Custom marker icon
- Overlapping header and info panel layout
- IP and domain lookup support
- Clean Tailwind-based component structure

## What I Learned

Some of the things I improved while building this:

- Handling client-side API logic inside Next.js App Router components
- Managing map rendering and updates without SSR issues
- Tailwind spacing and layout techniques to match exact designs
- Integrating Leaflet maps and fixing icon rendering problems
- Organizing UI in a way that feels natural on all screen sizes

## Installation

```bash
git clone your-repo-url
cd your-project-folder
npm install
npm run dev
````

## Folder Structure

```
project
│── public
│   └── images
│
│── src
│   ├── app
│   │   ├── page.tsx
│   │   └── api/ip/route.ts
│   ├── components
│   │   ├── SearchBar.tsx
│   │   ├── InfoPanel.tsx
│   │   └── Map.tsx
│   └── types
│
│── styles
│   └── globals.css
```

## API Usage

This project fetches data using the IPify Geolocation API:

```
https://geo.ipify.org/api/v2/country,city?apiKey=YOUR_KEY&ipAddress=8.8.8.8
```

Or via your Next.js API route:

```
/api/ip?query=domain.com
```

## Useful Resources

* Leaflet docs — [https://leafletjs.com](https://leafletjs.com)
* React Leaflet — [https://react-leaflet.js.org](https://react-leaflet.js.org)
* IPify API — [https://geo.ipify.org](https://geo.ipify.org)
* Frontend Mentor — [https://frontendmentor.io](https://frontendmentor.io)

## Author

* Frontend Mentor — Anila Nawaz
* GitHub — https://github.com/AnilaAnilaN/
* Portfolio — https://github.com/AnilaAnilaN/Anila-portfolio-NextJS

## Acknowledgments

Thanks to Frontend Mentor for creating practical challenges that help level up frontend skills.


