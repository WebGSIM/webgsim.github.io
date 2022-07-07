function displayText(height) {
    return `
G = 6.67e-11
M = 5.97e24
R = 6.37e6
h=${height}
w = 7.3e-5
vc = 3.871277517e3
t = 0
dt = 1
day = 24*3600
r=R+h

scene.camera.pos=vec( 2.73721e+7, 2.81051e+7, 5.94081e+7)
scene.camera.axis=vec( -2.80757e+7, -3.75686e+7, -6.45965e+7)
g=graph(title='<b>Graph of Distance vs Time<b>',xtitle='Time(hour)',ytitle='Distance(km)',background=color.black)

earth = sphere(pos=vector(0,0,0), radius=R, texture=textures.earth)
earth.rotate(angle=pi/2,axis=vector(1,0,0),origin=earth.pos)

class Craft:
    def __init__(self,position,radius,color,trail,mass,velocity,acceleration):
        self.pos=position
        self.radius=radius
        self.color=color
        self.trail=True
        self.m=mass
        self.v=velocity
        self.a=acceleration
        self.r=position-earth.pos
        self.craft=sphere(pos=self.pos,radius=self.radius,color=self.color,make_trail=self.trail,m=self.m,v=self.v,r=self.r,F=self.F)
    
    def update(self,dt):
        self.dt=dt
        self.r = self.craft.pos - earth.pos
        self.F = -G*M*self.m*norm(self.r)/mag(self.r)**2
        self.a = self.F/self.m
        self.v+=self.a*dt
        self.craft.pos +=self.v*self.dt  

craft1=Craft(vec(R+h,0,0),R/3,color.yellow,True,1000,vc*vec(0,0,1),vec(0,0,0))
craft2=Craft(vec(R+h,0,0),R/3,color.red,True,1000,vc*vec(0,0,0.8),vec(0,0,0))
craft3=Craft(vec(R+h,0,0),R/3,color.green,True,1000,vc*vec(0,0,1.1),vec(0,0,0))

while mag(craft1.r)>=R*6/5&(t/3600)<100:
  rate(4*60*60)
  earth.rotate(angle=w*dt,axis=vector(0,0,1),origin=earth.pos)
  craft1.update(dt)
  craft2.update(dt)
  craft3.update(dt)
  t+=dt
 
 
 `

}

