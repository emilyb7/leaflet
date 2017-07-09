# Leaflet geo-mapping

## Simple example

A framework-free example with basic HTML, JS and CSS can be found in the `simple` directory.

## Leaflet with React

To view the project:

```bash
  cd react-leaflet
  npm start
```

### Setting up on a new project

Bunch of packages need to be installed:
`npm install leaflet prop-types react react-dom react-leaflet --save`

CSS needs to be included from 'https://unpkg.com/leaflet@1.1.0/dist/leaflet.css'

With a custom-build project, it should be possible to import CSS directly from the leaflet.js node_module. Create React App does not allow this.

### Custom UI elements

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


### Clusters

To create a cluster, use the `react-leaflet-markercluster` package

https://www.npmjs.com/package/react-leaflet-markercluster

`npm install react-leaflet-markercluster --save`

The `Map` component needs a `maxZoom` property in order for the cluster to work.

Use the `MarkerClusterGroup` component as in the example in the docs.

The cluster icon can be styled with CSS. First remove `wrapperOptions={{enableDefaultStyle: true}}` (as in the docs).

Example CSS:

```css
.marker-cluster div {
  border-radius: 100%;
  height: 30px;
  width: 30px;
  margin-left: 5px;
  margin-top: 5px;
  text-align: center;
  font-family: sans-serif;
  background-color: hotpink;
}
```

The individual markers can be styled same as a regular marker component.
