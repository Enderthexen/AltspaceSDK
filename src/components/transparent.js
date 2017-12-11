import {AFrameComponent} from './AFrameComponent';

/**
* @name module:altspace/components.transparent
* @class
* @extends module:altspace/components.AFrameComponent
* @classdesc Traverses model to set the transparent parameter to true. @aframe
* @example <a-gltf-model src='#thing' transparent></a-gltf-model>
*/
export default class Transparent extends AFrameComponent
{
get schema(){ return {default: true}; }
init(){
	this.el.addEventListener('model-loaded', this.update.bind(this));
}
update(){
	this.el.object3D.traverse( function(obj) {
		if (obj instanceof THREE.Mesh) {
			if(obj.material != undefined)
				obj.material.transparent = this.data;
		}
	}
}