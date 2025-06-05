"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function LightSaber() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    const glowLight = new THREE.PointLight(0x00ffff, 2, 10); // cyan glow
    glowLight.position.set(0, 1.5, 0);
    scene.add(ambientLight, glowLight);

    // Hilt
    const hiltGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1, 32);
    const hiltMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const hilt = new THREE.Mesh(hiltGeometry, hiltMaterial);
    scene.add(hilt);

    // Blade
    const bladeGeometry = new THREE.CylinderGeometry(0.05, 0.05, 3, 32);
    const bladeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.8,
    });
    const blade = new THREE.Mesh(bladeGeometry, bladeMaterial);
    blade.position.y = 2;
    blade.visible = false;
    scene.add(blade);

    // Sound
    const listener = new THREE.AudioListener();
    camera.add(listener);
    const sound = new THREE.Audio(listener);
    const loader = new THREE.AudioLoader();
    loader.load("/sounds/lightsaber.mp3", function (buffer) {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.5);
    });

    // Toggle logic
    const toggleSaber = () => {
      const on = !isOn;
      setIsOn(on);
      blade.visible = on;
      glowLight.intensity = on ? 2 : 0;
      if (on) sound.play();
      else sound.stop();
    };

    window.addEventListener("click", toggleSaber);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      if (isOn) blade.rotation.y += 0.02;
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", toggleSaber);
    };
  }, [isOn]);

  return (
    <div className="relative w-full h-[500px]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <p className="absolute bottom-4 w-full text-center text-white text-sm">
        Click to toggle lightsaber
      </p>
    </div>
  );
}
