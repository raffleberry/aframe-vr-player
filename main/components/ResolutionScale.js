AFRAME.registerComponent('resolution-scale', {
    schema: {
        ratio: { type: 'number', default: 1 }
    },
    update: function () {
        // this.el.sceneEl.renderer.setPixelRatio(this.data.ratio)
        // this.el.sceneEl.renderer?.xr?.setFramebufferScaleFactor(this.data.ratio)
    }
})