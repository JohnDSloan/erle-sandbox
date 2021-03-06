var scene, renderer, camera, pointLight, ambientLight, loader
var saoirseInnerContainer
var WIDTH
var HEIGHT

const CAMERA_POS = { x: 0, y: -2, z: 39 };
const CAMERA__ROT = { x: -0.19, y: 0, z: 0 };
const POINTLIGHT_POS = { x: 50, y: 30, z: 60 };
const BODY_POS = { x: 0, y: -18.5, z: 7.2 };
const FACE_POS = { x: 0, y: 18.7, z: 2.7 };
const FACE_ROT = { x: 0.0925, y: 0, z: 0 };
const MOUTH_ROT = { x: 0, y: 5.53, z: 1.93 };
const EYEL_POS = { x: 0.03, y: 5.57, z: 1.92 };
const EYER_POS = { x: -3.09, y: 5.57, z: 1.92 };
const EYEL_ROT = { x: -0.02, y: -0.055, z: 0 };
const EYER_ROT = { x: -0.02, y: 0.055, z: 0 };

function loadScene( loadSceneCB ) {

    setStage( addSaoirse );

    function setStage( setStageCB ) {
        
        scene = new THREE.Scene();
        saoirseInnerContainer = document.getElementById( 'saoirseInnerContainer' );
        WIDTH = saoirseInnerContainer.offsetWidth;
        HEIGHT = saoirseInnerContainer.offsetHeight;
        renderScene();
        addCamera();
        addLights();
        dealWithResizing();
        loader = new THREE.JSONLoader();

        function renderScene() {

            renderer = new THREE.WebGLRenderer( { alpha: true } );
            renderer.setSize( WIDTH, HEIGHT );
            //renderer.setClearColor( colour , 1);
            saoirseInnerContainer.appendChild( renderer.domElement );

        }

        function addCamera() {

            camera = new THREE.PerspectiveCamera( 55, WIDTH / HEIGHT, 0.1, 1000 );
            camera.position.set( CAMERA_POS.x, CAMERA_POS.y, CAMERA_POS.z  );
            camera.rotation.set( CAMERA__ROT.x, CAMERA__ROT.y, CAMERA__ROT.z,);
            scene.add( camera );

        }

        function addLights() {

            pointLight = new THREE.PointLight( 0xe0fffa, 0.55, 0 );
            pointLight.position.set( POINTLIGHT_POS.x,  POINTLIGHT_POS.y, POINTLIGHT_POS.z );
            scene.add( pointLight );

            ambientLight = new THREE.AmbientLight( 0xffffff, 0.9 );
            scene.add( ambientLight )

        }

        setStageCB();

    }

    function addSaoirse() {

        loader.load( body, addBody );    

        function addBody( geom, mat ) {

            // load the materials for the skin and jumper. Only need 2 materials but JSON has all.
            mat[0].skinning = true;
            mat[1].skinning = true;
            mat[0].morphtargets = true;
            mat[1].morphtargets = true;
            //mat[1].color.setHex( '0x743D2B' );

            tiaObject.mBody = new THREE.SkinnedMesh( geom, mat );
           
            // iterate over the bones in the JSON file and put them into the global bodyBones object. Call bones with bodyBones["<bone name>"] 
            for (var i=0; i<tiaObject.mBody.skeleton.bones.length; i++) {
                
                tiaObject.bodyBones[tiaObject.mBody.skeleton.bones[i].name] = tiaObject.mBody.skeleton.bones[i];

            }

            tiaObject.mBody.position.set( BODY_POS.x, BODY_POS.y, BODY_POS.z );

            loader.load( face, addFace) 
        
        }

        function addFace( geom, mat ) {

            // load the materials for the skin, lips and eyebrows
            mat[0].skinning = true;
            mat[1].skinning = true;
            mat[2].skinning = true;
            mat[0].morphtargets = true;
            mat[1].morphtargets = true;
            mat[2].morphtargets = true;
            //mat[0].color.setHex( '0x743D2B' );
            //mat[1].color.setHex( '0xE35D6A' );
            //mat[2].color.setHex( '0x030106' );
            tiaObject.mFace = new THREE.SkinnedMesh( geom, mat );

            // iterate over the bones in the JSON file and put them into the global faceBones object. Call bones with faceBones["<bone name>"] 
            for (var i=0; i<tiaObject.mFace.skeleton.bones.length; i++) {
                
                tiaObject.faceBones[tiaObject.mFace.skeleton.bones[i].name] = tiaObject.mFace.skeleton.bones[i];

            }
            
            tiaObject.mFace.position.set( FACE_POS.x, FACE_POS.y, FACE_POS.z );
            tiaObject.mFace.rotation.set( FACE_ROT.x, FACE_ROT.y, FACE_ROT.z );        
            tiaObject.bodyBones.spineUpperInner.add( tiaObject.mFace );

            loader.load( mouth, addMouth ) 
        
        }

        function addMouth( geom, mat ) {

            mat[0].skinning = true;
            mat[1].skinning = true;
            mat[0].morphtargets = true;
            mat[1].morphtargets = true;

            tiaObject.mMouth = new THREE.SkinnedMesh( geom, mat );

            // iterate over the bones in the JSON file and put them into the global faceBones object. Call bones with faceBones["<bone name>"] 
            for (var i=0; i<tiaObject.mMouth.skeleton.bones.length; i++) {
                
                tiaObject.mouthBones[tiaObject.mMouth.skeleton.bones[i].name] = tiaObject.mMouth.skeleton.bones[i];

            }

            tiaObject.mMouth.position.set( MOUTH_ROT.x, MOUTH_ROT.y, MOUTH_ROT.z );

            tiaObject.faceBones.head.add( tiaObject.mMouth );
                
            loader.load( eye, addEyes)
            
        }

        function addEyes( geom, mat ) {

            // load the materials for the eyeball, iris and pupil
            mat[0].skinning = true;
            mat[0].morphtargets = true;
            //mat[0].color.setHex( 0xfcfae0 );

            // mEyeL is a clone of mEyeR
            tiaObject.mEyeL = new THREE.SkinnedMesh( geom, mat );
            tiaObject.mEyeR = tiaObject.mEyeL.clone();
            
            // make headbone the parent so eyes move with it
            tiaObject.faceBones.head.add( tiaObject.mEyeL );
            tiaObject.faceBones.head.add( tiaObject.mEyeR );

            // manually set position
            tiaObject.mEyeL.position.set( EYEL_POS.x, EYEL_POS.y, EYEL_POS.z );
            tiaObject.mEyeR.position.set( EYER_POS.x, EYER_POS.y, EYER_POS.z  );

            // attach bones to global variables
            tiaObject.eyeBones.eyeL = tiaObject.mEyeL.skeleton.bones[0];
            tiaObject.eyeBones.eyeR = tiaObject.mEyeR.skeleton.bones[0];

            // rotate inwards so not staring inifinitely into distance
            tiaObject.eyeBones.eyeL.rotation.set( EYEL_ROT.x, EYEL_ROT.y, EYEL_ROT.z );
            tiaObject.eyeBones.eyeR.rotation.set( EYER_ROT.x, EYER_ROT.y, EYER_ROT.z );

            loader.load( hair, addHair)
        
        }


        function addHair( geom, mat ) {

            //mat[0].color.setHex( '0x030106' );
            tiaObject.mHair = new THREE.Mesh( geom, mat );
            //mat[0].color.setHex( '#000000' )

            // need to manually assign position again
            tiaObject.mHair.position.set( -0.1, 5.5, 1.9 );
            // again, parent to headbone
            tiaObject.faceBones.head.add( tiaObject.mHair );

            //// SET CAMERAS AND TIA UP DEPENDING ON ENTER OR REENTER \\\\

            scene.add( tiaObject.mBody );
            loadSceneCB();

        }
        
    }

}

function resizeSaoirse() {

    WIDTH = saoirseInnerContainer.clientWidth;
    HEIGHT = saoirseInnerContainer.clientHeight;
    renderer.setSize( WIDTH, HEIGHT );
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();

}

function eyeLineOfSightHelper() {

    var geometry = new THREE.BoxGeometry( 0.1, 0.1, 80 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    var cube2 = new THREE.Mesh( geometry, material );
    tiaObject.eyeBones.eyeL.add( cube );
    tiaObject.eyeBones.eyeR.add( cube2 );

}

