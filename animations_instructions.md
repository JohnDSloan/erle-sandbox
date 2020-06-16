### INSTRUCTIONS FOR CREATING ANIMATIONS WITH SAIORSE
Open the javascript console on your browser and type:
```sh
$ movementController(movementObject.abs.rotateLeft, 0.5, 0.5)
```

The <strong>movementController</strong> function accepts 4 arguments:
<ol>
    <li>pose</li>
    <li>eye saccade time(s)</li>
    <li>body move time(s)</li>
    <li>callback function once movement finishes (optional)</li>
</ol>

The callback function allows you to chain together movements. Try:

```sh
movementController(movementObject.abs.rotateLeft, 0.5, 0.5, function(){
   
    movementController(movementObject.abs.blank, 1.5, 1.5, function(){ 
    
        movementController(movementObject.abs.armBegin, 1, 1)

    })

})
```

Timeouts (ms) can be used to delay the callbacks
```sh
movementController(movementObject.abs.rotateLeft, 0.5, 0.5, function(){
   
    setTimeout( function() { movementController(movementObject.abs.blank, 1.5, 1.5, function(){ 
    
            movementController(movementObject.abs.armBegin, 1, 1)

        })

    }, 2000)

})
```

Open the file <strong>saoirse/static/saoirse/javascript/move/body/poses.js</strong>. You can view the positions of Saoirse's skeletal rig for a number of poses used on the Erle platform. For example, the final pose of the previous series of movements was <strong>armBegin</strong>. 

```sh
'armBegin': {
    'name': 'armBegin',
    'symmetry': 'B',
    'AUs': {
        'AU1': {
            'head': [[0, 0, 0], [0, 0, 0]],
            'neck': [[0, 0, 0], [0, 0, 0]],
        },
        'AU1b': {
            'spineLower': [[0, 0, 0], [0, 0, 0]],
            'spineUpper': [[0, 0, 0], [0, 0, 0]],
            'spineUpperInner': [[0, 0, 0], [0, 0, 0]],
        },
        'AU2': {
            'shoulder': [[0, 0, 0], [0, 0, 0]],
        },
        'AU2b': {
            'upperArm.L': [[0, 0, 0], [0.2, -0.25, 0]],
            'upperArm.R': [[0, 0, 0], [-0.6, 0.25, 0]],
            'lowerArm.L': [[0, 0, 0], [0, 0, 0]],
            'lowerArm.R': [[0, 0, 0], [0, 0, 1.2]],
            'hand.L': [[0, 0, 0], [0, 0, 0]],
            'hand.R': [[0, 0, 0], [0, 0, 0.8]],
        },
    },
    'sacc': [[0,0,0],[0,0,0]],
}
```

The first triplet in each list is position, the second is rotation. So, for 'upperArm.L', there is no position change for the x, y or z-coordinates, but a rotation change of +0.2 on the x-axis, and -0.25 on the y-axis.
```sh
'upperArm.L': [[0, 0, 0], [0.2, -0.25, 0]]
```

You can change these values yourself, or, if you don't wish to interfere with the current ones, copy and paste and rename to make your own movement.

To do this, copy and paste the blank movement, or one which is close to your desired movement. For this example, copy the armBegin movement, paste it below, rename it as 'armBeginEmphasis' and rotate the arms a bit more:

```sh
'armBeginEmphasis': {
    'name': 'armBeginEmphasis',
    'symmetry': 'B',
    'AUs': {
        'AU1': {
            'head': [[0, 0, 0], [0, 0, 0]],
            'neck': [[0, 0, 0], [0, 0, 0]],
        },
        'AU1b': {
            'spineLower': [[0, 0, 0], [0, 0, 0]],
            'spineUpper': [[0, 0, 0], [0, 0, 0]],
            'spineUpperInner': [[0, 0, 0], [0, 0, 0]],
        },
        'AU2': {
            'shoulder': [[0, 0, 0], [0, 0, 0]],
        },
        'AU2b': {
            'upperArm.L': [[0, 0, 0], [0.5, -0.35, 0.2]],
            'upperArm.R': [[0, 0, 0], [-1.1, -0.1, -0.2]],
            'lowerArm.L': [[0, 0, 0], [0, 0, 0]],
            'lowerArm.R': [[0, 0, 0], [0, 0, 1.2]],
            'hand.L': [[0, 0, 0], [0, 0, 0]],
            'hand.R': [[0, 0, 0], [0, 0, 0.8]],
        },
    },
    'sacc': [[0,0,0],[0,0,0]],
}
```

Now call this new pose:
```sh
movementController(movementObject.abs.armBeginEmphasis, 0.5, 1)
```

### INDIVIDUAL MOVEMENTS
You can also change an individual bones' position and rotation dynamically on the skeletal rig. This is uselful for finding the right position for a pose before adding it to the <strong>poses.js</strong> file
```sh
tiaObject.bodyBones['upperArm.R'].rotation.y -= 0.2
```

Saoirses skeletal rig is split into 4 separate, but connected, sections:

<ul>
    <li>tiaObject.bodyBones</li>
    <li>tiaObject.faceBones</li>
    <li>tiaObject.mouthBones</li>
    <li>tiaObject.eyeBones</li>
</ul>

typing

```sh
tiaObject.bodyBones
```
will show a list of all the bones that can be modified.

Now you can move Saoirse, you can change her expressions too by looking at <a href="https://github.com/JohnDSloan/erle-sandbox/blob/master/expression_instructions.md">expression instructions</a>

