# Leaflet geo-mapping

## Simple example

## Leaflet with React

Bunch of packages need to be installed:
`npm install leaflet prop-types react react-dom react-leaflet --save`

CSS needs to be included from 'https://unpkg.com/leaflet@1.1.0/dist/leaflet.css'

With a custom-build project, it should be possible to import CSS directly from the leaflet.js node_module. Create React App does not allow this.

### Custom UI

To customise UI elements, import the leaflet module into the view: `import Leaflet from 'leaflet';`

Here's an example of customising the marker icon:

```js
/* set options */
const icon = Leaflet.icon({
  iconUrl: 'http://www.iconsdb.com/icons/preview/soylent-red/map-marker-2-xxl.png',
  iconSize: [38, 40],
});
/* initialise with icon prop */
<Marker position={position} icon={icon}>
```
Options for icons can be found in the leaflet docs: http://leafletjs.com/reference-1.1.0.html#icon
