---
layout: page
title: Computer Graphics Systems
importance: 0
description: A Renderer Built from Scratch in C++
img: assets/img/cg-pathtracer-cbox.png
tag: work
category: Systems
meta: C++ · 15-362/662 · Individual project
---

Four rendering and animation systems, built from scratch in C++ with no graphics framework underneath them, for Carnegie Mellon's Computer Graphics course (15-362/662): a CPU rasterization pipeline, a half-edge mesh editor, a Monte Carlo path tracer, and a skeletal animation/IK system. All renders below are real output from my own code, not a mockup.

**At a glance**
- Role: Solo
- Stack: C++, no external rendering framework
- Context: 15-362/662 Computer Graphics, Carnegie Mellon
- Scope: Rasterizer, MeshEdit, PathTracer, and Animation assignments

## <span style="color: #2E8B57;">Rasterizer</span>

- Projects every triangle in a scene onto the screen and fills in the pixels it covers.
- **Barycentric interpolation:** blends a triangle's per-vertex properties (depth, normal, color) across its interior.
- **Z-buffer:** resolves which triangle is actually closest to the camera at each pixel when several overlap.
- **Phong-style shading:** computes per-pixel lighting from interpolated surface normals instead of flat per-triangle color.

<div class="row mt-3">
    <div class="col-sm-10 mx-auto">
        {% include figure.html path="assets/img/cg-rasterizer-bunnies.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Stanford bunny rendered wireframe, flat-shaded, and textured by my rasterizer" %}
    </div>
</div>

## <span style="color: #4682B4;">MeshEdit</span>

- Built a **half-edge mesh**: every edge splits into two directed half-edges, each aware of its neighboring face, vertex, and the half-edge across from it.
- Makes walking a mesh's topology (every face around a vertex, every neighbor of a triangle) a handful of pointer hops instead of a linear scan.
- Implemented subdivision, smoothing, normal computation, and general geometric transformations on top of that structure.

## <span style="color: #8B4513;">PathTracer</span>

- Solves the rendering equation by Monte Carlo integration: cast a ray per pixel, recursively sample bounces off the scene, average many random samples per pixel to estimate how much light reaches the camera.
- **BVH (bounding volume hierarchy):** prunes most of the scene out of consideration for a given ray before exact intersection math, since testing every ray against every object is unusably slow.
- **Variance reduction:** getting a clean image out of a noisy Monte Carlo estimator without just brute-forcing more samples, where a meaningful chunk of the real engineering in a path tracer lives.

<div class="row mt-3">
    <div class="col-sm-10 mx-auto">
        {% include figure.html path="assets/img/cg-pathtracer-cbox.png" class="img-fluid rounded z-depth-1" zoomable=true caption="A Cornell box rendered by my path tracer: global illumination, color bleeding, and soft shadows, all from Monte Carlo sampling" %}
    </div>
</div>

## <span style="color: #DC143C;">Animation</span>

- **Splines:** keyframed motion curves.
- **Skeletal skinning:** binds mesh geometry to an underlying joint hierarchy.
- **Inverse kinematics:** poses a character from end-effector targets instead of hand-setting every joint angle.

<div class="row mt-3">
    <div class="col-sm-10 mx-auto">
        <video class="img-fluid rounded z-depth-1" controls loop muted playsinline style="width:100%;">
            <source src="/assets/video/cg-animation-skinning.mp4" type="video/mp4">
        </video>
    </div>
</div>

## <span style="color: #8A2BE2;">What this taught me about systems</span>

- Performance problems in graphics are almost always structural, not computational. The BVH doesn't make ray-triangle intersection faster, it makes you do far fewer of them.
- A good data structure is the real deliverable. The half-edge mesh took longer to get right than either renderer built on top of it, and both renderers got simpler once it existed.
- Correctness in a renderer is visual, not just logical. A subtly wrong interpolation or an off-by-one in the z-buffer doesn't throw an error; it just looks wrong, which makes rigorous testing (not just "does it look okay") matter more, not less.
