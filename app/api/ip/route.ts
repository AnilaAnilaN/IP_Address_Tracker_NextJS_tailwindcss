import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');
  const apiKey = process.env.NEXT_PUBLIC_IPIFY_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'API key not configured' },
      { status: 500 }
    );
  }

  try {
    let url = `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}`;
    
    if (query) {
      // Check if query is an IP address or domain
      const isIP = /^(\d{1,3}\.){3}\d{1,3}$/.test(query);
      url += isIP ? `&ipAddress=${query}` : `&domain=${query}`;
    }

    const response = await fetch(url);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('IPify API error:', response.status, errorText);
      throw new Error(`Failed to fetch IP data: ${response.status}`);
    }

    const data = await response.json();
    
    // For free tier without GPS coordinates, we'll use approximate coordinates
    // based on country/region (you can enhance this with a country->coords mapping)
    const getApproxCoordinates = (country: string, region: string) => {
      // Default coordinates (you can expand this mapping)
      const countryCoords: { [key: string]: { lat: number; lng: number } } = {
        'US': { lat: 37.7749, lng: -122.4194 }, // San Francisco as default US
        'GB': { lat: 51.5074, lng: -0.1278 },   // London
        'DE': { lat: 52.5200, lng: 13.4050 },   // Berlin
        'FR': { lat: 48.8566, lng: 2.3522 },    // Paris
        'JP': { lat: 35.6762, lng: 139.6503 },  // Tokyo
        'AU': { lat: -33.8688, lng: 151.2093 }, // Sydney
        'CA': { lat: 45.4215, lng: -75.6972 },  // Ottawa
        'IN': { lat: 28.6139, lng: 77.2090 },   // New Delhi
        'BR': { lat: -23.5505, lng: -46.6333 }, // São Paulo
        'CN': { lat: 39.9042, lng: 116.4074 },  // Beijing
      };
      
      return countryCoords[country] || { lat: 0, lng: 0 };
    };
    
    const coords = getApproxCoordinates(data.location.country, data.location.region);
    
    return NextResponse.json({
      ip: data.ip,
      location: {
        country: data.location.country,
        region: data.location.region || 'N/A',
        city: 'N/A', // Free tier doesn't provide city
        lat: coords.lat,
        lng: coords.lng,
        postalCode: 'N/A', // Free tier doesn't provide postal code
        timezone: data.location.timezone,
      },
      isp: data.isp,
    });
  } catch (error) {
    console.error('Error fetching IP data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch IP data' },
      { status: 500 }
    );
  }
}