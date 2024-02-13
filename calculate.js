

function calculateTriangle(){
    console.log('connected')
    const inputBase = document.getElementById('tri_inp_base');
    const baseTex = inputBase.value;
    const base = parseFloat(baseTex);

    const inputHeight = document.getElementById('tri_inp_height');
    const triHeightTex = inputHeight.value;
    const height =parseFloat(triHeightTex);

    console.log(base);
    console.log(height);

    const areacal = (0.5 * base * height );
    //display
    const Sani = document.getElementById('tri-area');
    Sani.innerText = areacal;
}
