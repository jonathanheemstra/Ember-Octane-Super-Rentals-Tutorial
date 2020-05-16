import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';

const GOOGLE_MAPS = 'https://maps.googleapis.com/maps/api/staticmap?';

export default class MapComponent extends Component {
  get src() {
    const { lng, lat, width, height, zoom } = this.args;

    const coordinates = `center=${lat}%2c%20${lng}`;
    const dimensions = `&size=${width}x${height}`;
    const token = `&key=${this.token}`;
    const zoomVal = `&zoom=${zoom}`;

    return `${GOOGLE_MAPS}${coordinates}${zoomVal}${dimensions}${token}`
  }

  get token() {
    return encodeURIComponent(ENV.GOOGLE_MAPS_TOKEN);
  }
}


