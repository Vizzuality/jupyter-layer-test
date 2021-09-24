import type LayerModel from '@vizzuality/layer-manager/dist/layer-model';
import type {
  AnyLayer,
  GeoJSONSourceRaw,
  RasterSource,
  VectorSource,
} from 'mapbox-gl';

export type LayerType = 'geojson' | 'raster' | 'vector' | 'deck';

/**
 * 'carto' provider requires @vizzuality/layer-manager-provider-carto
 */
export type Provider = {
  type: 'carto' | string
  options: Record<string, unknown>
};

export type LMGeoJSONSourceRaw = GeoJSONSourceRaw & {
  provider: Provider
  parse: boolean
};

export type LMVectorSource = VectorSource & {
  provider: Provider
  parse: boolean
};

export type LMRasterSource = RasterSource & {
  provider: Provider
  parse: boolean
};

export type Source = LMGeoJSONSourceRaw | LMVectorSource | LMRasterSource;

export type Render = {
  layers: AnyLayer
  parse: boolean
};

export type Params = Record<string, string | number | boolean | unknown>;

/**
 * keys should start by 'where' or 'and'
 */
export type SQLParams = Record<string, Params>;
export type DecodeParams = Record<string, number>;

/**
 * Documentation for images on MapboxGL
 * https://docs.mapbox.com/mapbox-gl-js/api/map/#map#addimage
 */
export type Image = {
  id: string
  src: string
  options?: { pixelRatio?: number; sdf?: boolean }
};

export type LayerSpec = {
  id: string | number
  type: LayerType
  opacity?: number
  visibility?: boolean
  zIndex?: number
  images?: Image[]
  params?: Params
  sqlParams?: SQLParams
  decodeParams?: DecodeParams
  decodeFunction?: string
  source: Source
  render?: Render
  interactivity?: unknown[]
  deck?: any[]
  onAfterAdd?: () => void
  onAfterRemove?: (layerModel: LayerModel) => void
};

export default LayerSpec;