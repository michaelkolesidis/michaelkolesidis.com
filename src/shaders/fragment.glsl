 precision highp float;
 uniform float u_time;
 uniform vec2 u_resolution;

 float tv(vec2 pos, float evolve) {
     float e = fract((evolve*0.01));
     float cx = pos.x*e;
     float cy = pos.y*e;
     return fract(23.0*fract(2.0/fract(fract(cx*2.4/cy*23.0+pow(abs(cy/22.4),3.3))*fract(cx*evolve/pow(abs(cy),0.050)))));
 }

 void main() {
     vec2 fragCoord = gl_FragCoord.xy;
     float tv_val = tv(fragCoord, u_time);
     gl_FragColor = vec4(vec3(tv_val), 1.0);
 }