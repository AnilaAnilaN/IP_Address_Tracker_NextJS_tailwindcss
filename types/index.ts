export interface IPData {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
  };
  isp: string;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export interface InfoPanelProps {
  data: IPData | null;
}

export interface MapComponentProps {
  lat: number;
  lng: number;
}