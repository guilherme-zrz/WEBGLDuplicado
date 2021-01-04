#version 300 es
precision highp float;

layout (location = 0) in vec3 aPos;
layout (location = 1) in vec3 aColor;
out vec3 vColor;
out vec3 vPos;

void main() {
    gl_Position = vec4(aPos.x, aPos.y, aPos.z, 1.0);
    vColor = aColor;
    vPos = aPos;
}