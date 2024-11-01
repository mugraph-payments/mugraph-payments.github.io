// Modified code based on work by Atrahasis
// (https://codepen.io/Astrak/pen/BoBWPB), licensed under the MIT License.

export const vertexShader = /* glsl */ `
	uniform float scale;
  uniform vec2 resolution;

  varying vec3 vPosition;
  varying float gas;

  void main() {
    vPosition=position;

    float a = length(position) / scale;
    gas = max(.0, sin(- a * 5.));

    vec4 modelViewPosition = modelViewMatrix * vec4( vPosition, 1.0 );
    gl_PointSize = 0.75 + resolution.y * (scale * .01) * (1. + gas * 2.) / length(modelViewPosition.xyz);
    gl_Position = projectionMatrix * modelViewPosition;
  }
`;

export const fragmentShader = /* glsl */ `
uniform float time;
uniform float scale;

varying vec3 vPosition;
varying float gas;

void main(){
  float starCenterDist = distance(gl_PointCoord, vec2(.5));
  float intensityOffset = 0.;
  float galaxyCenterDist = length(vPosition) / scale;

  float gasLook = -(starCenterDist - .5) * 1.2 * gas;
  float starLook = (1. - gas) / (starCenterDist * 15.);
  float texture = starLook + gasLook;

  vec3 blue = vec3(137. / 255., 180.0 / 255., 250.0 / 255.);
  vec3 mauve = vec3(203. / 255., 166. / 255., 247. / 255.);
  vec3 color = vec3(1.);
  color *= mix(
    blue,
    mauve,
    galaxyCenterDist - intensityOffset
  );

  gl_FragColor= vec4(color, 1.0) * texture;
}
`;
