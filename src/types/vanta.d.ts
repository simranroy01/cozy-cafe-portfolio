declare module 'vanta/dist/vanta.waves.min' {
  interface VantaOptions {
    el: HTMLElement;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    color?: number;
    backgroundAlpha?: number;
    shininess?: number;
    waveHeight?: number;
    waveSpeed?: number;
    zoom?: number;
    THREE?: any;
  }

  interface VantaEffect {
    destroy(): void;
  }

  function VANTA(options: VantaOptions): VantaEffect;

  export { VANTA as default };
}
