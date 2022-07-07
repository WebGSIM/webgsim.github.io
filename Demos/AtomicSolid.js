var text1 = `G = 6.67e-11
M = 5.97e24
R = 6.37e6
h=2.02e7+1e7
w = 7.3e-5
vc = 3.871277517e3
t = 0
dt = 1
day = 24*3600
r=R+h
t=0
t1=17
t2=35
timeinterval=5
greencolor=vec(6, 255, 0)/100
redcolor=vec(255, 24, 24)/100
yellowcolor=vec(2.52, 2.17, 0)
scene.camera.pos=vec( 2.62466e+7, 2.02944e+7, 4.26189e+7)
scene.camera.axis=vec( -2.80757e+7, -3.75686e+7, -6.45965e+7)
g=graph(title='<b>Graph of Distance vs Time<b>',xtitle='Time(hour)',ytitle='Distance(km)',background=color.black)
g=gcurve()
earth = sphere(pos=vector(0,0,0), radius=R, texture='/glowscript_data/sun_texture.jpg',emissive=1)
earth.rotate(angle=pi/2,axis=vector(1,0,0),origin=earth.pos)
deltatimea=0
deltatimeb=0
n=500
timearea=timeinterval/(n-2)
running = True
line=[]
point=[]
area=[]
area2=[]

def Run(b):
    global running
    running = not running
    if running: b.text = "Pause"
    else: b.text = "Continue"
    
def reset(r):
    craft2.reset()
    
   

button(text="Pause", bind=Run)
button(text='Reset', bind=reset)


class Craft:
    def __init__(self,position,radius,color,trail,mass,velocity,acceleration,deltatimea,deltatimeb):
        self.pos=position
        self.radius=radius
        self.color=color
        self.trail=True
        self.m=mass
        self.v=velocity
        self.a=acceleration
        self.r=position-earth.pos
        self.craft=sphere(pos=self.pos,radius=self.radius,trail_color=self.color,make_trail=self.trail,m=self.m,v=self.v,r=self.r,F=self.F,texture=textures.earth)
        self.n=n
        self.t=t
        self.deltatimea=deltatimea
        self.deltatimeb=deltatimeb
        self.i=0
        self.p=0
    
    
    def update(self,dt):
        self.dt=dt
        self.r = self.craft.pos - earth.pos
        self.F = -G*M*self.m*norm(self.r)/mag(self.r)**2
        self.a = self.F/self.m
        self.v+=self.a*self.dt
        self.craft.pos +=self.v*self.dt  
        earth.rotate(angle=w*self.dt,axis=vector(0,0,1),origin=earth.pos)
        #create lines
        if(self.t>=t1&self.t<t1+0.001|self.t>=t1+timeinterval&self.t<t1+timeinterval+0.001|(self.t>=t2&self.t<t2+0.001|self.t>=t2+timeinterval&self.t<t2+timeinterval+0.001)):
            line[self.i]=cylinder(axis=self.craft.pos-earth.pos)
            line[self.i].length=mag(self.craft.pos-earth.pos)
            line[self.i].radius=R/10
            self.i+=1
        #create points
        if(self.t>=t1&self.t<t1+0.001|self.t>=t1+timeinterval&self.t<t1+timeinterval+0.001|self.t>=t2&self.t<t2+0.001|self.t>=t2+timeinterval&self.t<t2+timeinterval+0.001):
            point[self.p]=sphere(pos=self.craft.pos,radius=0.15*R)
            if(self.t>=t2):
                self.n=n
            sleep(0.5)
            self.p+=1
        #create area
        if(self.t>=t1&self.t<=t1+timeinterval&(round(self.t-(n-self.n)*timearea)==t1)):
            area[n-self.n]=cylinder(axis=self.craft.pos-earth.pos,color=greencolor)
            area[n-self.n].length=mag(self.craft.pos-earth.pos)
            area[n-self.n].radius=R/20
            self.n=self.n-1

          
        if(self.t>=t2&self.t<=t2+timeinterval&(round(self.t-(n-self.n)*timearea)==t2)):
            area2[n-self.n]=cylinder(axis=self.craft.pos-earth.pos,color=redcolor)
            area2[n-self.n].length=mag(self.craft.pos-earth.pos)
            area2[n-self.n].radius=R/20
            self.n=self.n-1
        
        if(self.t>=t1&self.t<t1+0.001):
            timelabela.visible=True
        if (self.t>=t2&self.t<t2+0.001):
            timelabelb.visible=True
        if(self.t>=t1&self.t<=t1+timeinterval):
            timelabela.text=round(self.deltatimea) +' days'
            self.deltatimea+=dt/1000
            timelabela.pos=self.updateLocation()
        if(self.t>=t2&self.t<=t2+timeinterval):
            timelabelb.text=round(self.deltatimeb) +' days'
            self.deltatimeb+=dt/1000
            timelabelb.pos=self.updateLocation()
      
        self.craft.rotate(angle=10*w*self.dt,axis=vector(0,1,1),origin=self.craft.pos)   
        self.t+=self.dt/1000

    def updateLocation(self):
        return self.craft.pos
    
   
    
    def reset(self):
        o=0
        while o<line.length:
            line[o].visible=False
            o+=1
        o=0
        while o<point.length:
            point[o].visible=False
            o+=1
        o=0
        while o<area.length:
            area[o].visible=False
            o+=1
        o=0
        while o<area2.length:
            area2[o].visible=False
            o+=1
        self.t=0
        self.deltatimea=0
        self.deltatimeb=0
        self.craft.pos=vec(R+h,0,0)
        self.craft.clear_trail()
        self.craft.trail=True
        self.v=vc*vec(0,0,0.65)
        self.a=vec(0,0,0)
        self.r=self.craft.pos-earth.pos
        self.n=n
        self.dt=dt
        timelabela.visible=False
        timelabelb.visible=False

        
craft2=Craft(vec(R+h,0,0),R/3,yellowcolor,True,1000,vc*vec(0,0,0.65),vec(0,0,0),deltatimea,deltatimeb)

timelabela=label(pos=craft2.updateLocation(),xoffset=50,yoffset=50,visible=False)
timelabelb=label(pos=craft2.updateLocation(),xoffset=50,yoffset=50,visible=False)

while mag(craft2.r)>=R*6/5:
  rate(4*60*60)
  if running:
      craft2.update(dt)  

`
