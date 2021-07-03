import GeoPattern from 'geopattern'

export const getPattern = title => {
  return GeoPattern.generate(title).toDataUrl()
}
