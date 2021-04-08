import * as THREE from 'three';
import {ElementRef, Injectable, NgZone, OnDestroy} from '@angular/core';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from  'three/examples/jsm/controls/OrbitControls';

@Injectable({providedIn: 'root'})
export class EngineService implements OnDestroy {
  private canvas!: HTMLCanvasElement;
  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  private light!: THREE.AmbientLight;
  private light1!: THREE.PointLight;
  private light2!: THREE.PointLight;
  private light3!: THREE.PointLight;


  private loaderGLTF!: GLTFLoader; 

  private frameId: number = null as any;

  public constructor(private ngZone: NgZone) {
  }

  public ngOnDestroy(): void {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    // The first step is to get the reference of the canvas element from our HTML document
    let me = this;

    this.canvas = canvas.nativeElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true // smooth edges
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // create the scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87CEEB);

    this.camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    this.camera.position.z = 9;
    this.camera.position.y = 1;
    this.camera.position.x = 4;
    this.scene.add(this.camera);

    // white light
    this.light = new THREE.AmbientLight(0xFFFFFF, 0.8);
    // this.light.position.z = 0.8;
    this.scene.add(this.light);
    this.light1 = new THREE.PointLight(0xFF0040, 4, 50);
    this.scene.add(this.light1)
    this.light2 = new THREE.PointLight(0x0040FF, 3 ,50);
    this.scene.add(this.light2)
    this.light3 = new THREE.PointLight(0x80FF80, 4 ,50);
    this.scene.add(this.light3)

    // controls

  const controls = new OrbitControls(this.camera,this.renderer.domElement);
  controls.update();

    this.loaderGLTF = new GLTFLoader();
    this.loaderGLTF.load('../../assets/main/saari009_geo3_bake2.glb', function (gltf) {
      console.log(gltf);
      me.scene.add(gltf.scene);
    }, undefined, function (error) {
      console.error(error);
    });

  }

  public animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        });
      }

      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }

  public render(): void {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });

    this.renderer.render(this.scene, this.camera);
  }

  public resize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }
}
