var text2 = `s = 3
dt = 0.001
v = 0
spring = helix(axis=vec(0, -10, 0), thickness=k/10)
mass = box(pos=vec(0, -10, 0), size=vec(3+m/10, 3, 3+m/10), color=color.yellow)
if(spring.thickness >= 1):
    spring.thickness = 1
while(True):
    rate(3000)
    F = -k * s
    a = F / m
    v += a * dt
    s += v * dt
    spring.length = 10 + s
    mass.pos.y = -10 - s`


