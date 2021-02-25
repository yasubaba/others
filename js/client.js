let getParams = () => {
    let qstr = location.search.replace('?', '').split('&');
    let params = {};
    qstr.forEach(s => {
        let tmp = s.split('=');
        params[tmp[0]] = tmp[1];
    });
    return params;
};

$(document).ready(() => {
    let video = document.getElementById('client-video');
    let params=getParams();
    const peer=new Peer({
        id: params.id,
        key: 'c3afd194-1f93-4433-9d77-ecc566ea985c',
        degug:3
    });
    peer.on('open',()=>{
        const call=peer.call(params.sid);
        call.on('stream',stream=>{
            video.srcObject=stream;
        })
    });
});