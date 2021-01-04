#version 300 es

precision highp float;
precision highp int;

out vec4 FragColor;
in vec3 vColor;

uniform float time;

//vec2 rect(in vec2 uv, in vec2 pos, in vec2 size){
//}


//uvec4 - Vetor Unasigned(Não pode ser negativo)
//ivec4 - Vetor Inteiro

void main() {
    
    vec2 uv = vColor.xy;
    vec2 pos = vec2(0.5);
    vec2 size = vec2(0.7);

    float a = step(.25, uv.x);
    float b = step(.75, uv.x);

    FragColor = vec4(a, b, b, 1.);
    

}